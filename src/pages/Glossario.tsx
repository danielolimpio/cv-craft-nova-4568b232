import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Search, BookOpen, TrendingUp, Sparkles, Clock, Tag, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  glossaryTerms,
  glossaryCategories,
  getAlphabetIndex,
  getFeaturedTerms,
  getMostSearchedTerms,
  getRecentTerms,
  searchTerms,
  glossaryTermUrl,
  totalTerms,
  type GlossaryCategory,
} from "@/data/glossary";
import { generateBreadcrumbSchema } from "@/lib/schema";

const BASE_URL = "https://fazercurriculo.com";

const Glossario = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "todas">("todas");
  const [activeLetter, setActiveLetter] = useState<string>("todas");

  const alphabet = useMemo(() => getAlphabetIndex(), []);
  const featured = useMemo(() => getFeaturedTerms(6), []);
  const mostSearched = useMemo(() => getMostSearchedTerms(8), []);
  const recent = useMemo(() => getRecentTerms(6), []);

  const filteredTerms = useMemo(() => {
    let list = query.trim() ? searchTerms(query) : glossaryTerms;
    if (activeCategory !== "todas") list = list.filter((t) => t.category === activeCategory);
    if (activeLetter !== "todas") {
      list = list.filter((t) => {
        const raw = t.term.charAt(0).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return raw === activeLetter;
      });
    }
    return [...list].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
  }, [query, activeCategory, activeLetter]);

  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Glossário", url: "/glossario" }]);

  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${BASE_URL}/glossario#glossary`,
    name: "Glossário de Carreira, Currículo e Trabalho — Fazer Currículo",
    description:
      "Hub premium com definições, exemplos e guias sobre currículo, ATS, CLT, MEI, IA no trabalho, entrevistas e mercado brasileiro em 2026.",
    inLanguage: "pt-BR",
    url: `${BASE_URL}/glossario`,
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${BASE_URL}${glossaryTermUrl(t.slug)}`,
      name: t.term,
      description: t.shortDefinition,
      url: `${BASE_URL}${glossaryTermUrl(t.slug)}`,
      inDefinedTermSet: `${BASE_URL}/glossario#glossary`,
    })),
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/glossario#page`,
    name: "Glossário Premium — Fazer Currículo",
    description:
      "Glossário completo em português com verbetes atualizados sobre currículo, recrutamento, CLT, MEI, IA e mercado de trabalho no Brasil em 2026.",
    url: `${BASE_URL}/glossario`,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: Object.values(glossaryCategories).map((c) => ({ "@type": "Thing", name: c.label })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Glossário Premium 2026 ✓ Currículo, CLT, MEI, IA e Trabalho</title>
        <meta
          name="description"
          content="Glossário premium com mais de 40 verbetes atualizados sobre currículo, ATS, CLT, MEI, IA no trabalho e mercado brasileiro em 2026. Definições claras, exemplos e guias."
        />
        <meta
          name="keywords"
          content="glossário carreira, glossário currículo, o que é ATS, o que é CLT, o que é MEI, o que é home office, o que é IA no trabalho, dicionário RH, termos de recrutamento"
        />
        <link rel="canonical" href={`${BASE_URL}/glossario`} />
        <meta property="og:title" content="Glossário Premium — Fazer Currículo" />
        <meta property="og:description" content="Hub de definições sobre carreira, currículo, CLT, MEI, IA e mercado de trabalho no Brasil." />
        <meta property="og:url" content={`${BASE_URL}/glossario`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(definedTermSetSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16 max-w-7xl">
        <Breadcrumb items={[{ label: "Glossário" }]} />

        {/* Hero */}
        <section className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Atualizado para 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Glossário Premium
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Definições claras, exemplos práticos e guias atualizados sobre currículo, ATS, CLT, MEI, IA, home office e as
            principais tendências do mercado de trabalho brasileiro. <strong>{totalTerms} verbetes</strong> em constante expansão.
          </p>

          {/* Busca */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden />
            <Input
              type="search"
              placeholder="Buscar: currículo, ATS, MEI, home office…"
              className="pl-12 h-14 text-base rounded-full shadow-md"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar verbete no glossário"
            />
          </div>
        </section>

        <div className="grid lg:grid-cols-[220px_1fr] gap-8">
          {/* Índice A-Z lateral (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-4">
              <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">Índice A–Z</h2>
              <div className="grid grid-cols-4 gap-1.5">
                <button
                  onClick={() => setActiveLetter("todas")}
                  className={`col-span-4 text-xs px-2 py-1.5 rounded-md font-semibold transition ${
                    activeLetter === "todas" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  Todos ({totalTerms})
                </button>
                {alphabet.map(({ letter, terms }) => {
                  const empty = terms.length === 0;
                  const active = activeLetter === letter;
                  return (
                    <button
                      key={letter}
                      disabled={empty}
                      onClick={() => setActiveLetter(letter)}
                      className={`text-xs font-bold px-2 py-1.5 rounded-md transition ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : empty
                          ? "text-muted-foreground/40 cursor-not-allowed"
                          : "bg-muted hover:bg-primary/10 hover:text-primary"
                      }`}
                      aria-label={`Filtrar por letra ${letter}`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>

              <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mt-6 mb-3">Categorias</h2>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveCategory("todas")}
                  className={`w-full text-left text-sm px-3 py-2 rounded-md transition ${
                    activeCategory === "todas" ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted"
                  }`}
                >
                  Todas as categorias
                </button>
                {(Object.entries(glossaryCategories) as [GlossaryCategory, { label: string }][]).map(([k, v]) => (
                  <button
                    key={k}
                    onClick={() => setActiveCategory(k)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-md transition ${
                      activeCategory === k ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Conteúdo principal */}
          <div>
            {/* Filtros mobile */}
            <div className="lg:hidden mb-6 flex flex-wrap gap-2">
              {alphabet.filter((l) => l.terms.length > 0).map(({ letter }) => (
                <button
                  key={letter}
                  onClick={() => setActiveLetter(activeLetter === letter ? "todas" : letter)}
                  className={`text-xs font-bold w-8 h-8 rounded-md transition ${
                    activeLetter === letter ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-primary/10"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Destaques */}
            {!query && activeCategory === "todas" && activeLetter === "todas" && (
              <>
                <section className="mb-10" aria-labelledby="destaques">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h2 id="destaques" className="text-2xl font-bold">Verbetes em Destaque</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featured.map((t) => (
                      <Link
                        key={t.slug}
                        to={glossaryTermUrl(t.slug)}
                        className="group bg-card border border-border rounded-xl p-5 hover:border-primary hover:shadow-lg transition"
                      >
                        <Badge variant="secondary" className="mb-2 text-xs">{glossaryCategories[t.category].label}</Badge>
                        <h3 className="text-lg font-bold group-hover:text-primary transition">{t.term}</h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{t.shortDefinition}</p>
                        <span className="inline-flex items-center gap-1 mt-3 text-primary text-sm font-semibold">
                          Ler verbete <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="mb-10 grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h2 className="text-lg font-bold">Mais pesquisados</h2>
                    </div>
                    <ol className="space-y-2">
                      {mostSearched.map((t, i) => (
                        <li key={t.slug} className="flex items-start gap-3">
                          <span className="text-primary font-bold w-6 shrink-0">{i + 1}.</span>
                          <Link to={glossaryTermUrl(t.slug)} className="text-sm hover:text-primary transition">
                            {t.term}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h2 className="text-lg font-bold">Últimos adicionados</h2>
                    </div>
                    <ul className="space-y-2">
                      {recent.map((t) => (
                        <li key={t.slug}>
                          <Link to={glossaryTermUrl(t.slug)} className="text-sm hover:text-primary transition">
                            {t.term}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* Lista filtrada */}
            <section aria-labelledby="lista-verbetes">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h2 id="lista-verbetes" className="text-2xl font-bold">
                    {query ? `Resultados para "${query}"` : "Todos os verbetes"}
                  </h2>
                </div>
                <span className="text-sm text-muted-foreground">{filteredTerms.length} termos</span>
              </div>

              {filteredTerms.length === 0 ? (
                <div className="text-center py-16 bg-card border border-border rounded-xl">
                  <p className="text-muted-foreground">Nenhum verbete encontrado. Tente outro termo.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {filteredTerms.map((t) => (
                    <Link
                      key={t.slug}
                      to={glossaryTermUrl(t.slug)}
                      className="group bg-card border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold group-hover:text-primary transition">{t.term}</h3>
                        <Tag className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-1" />
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{t.shortDefinition}</p>
                      <span className="text-xs text-primary/80 mt-2 inline-block">
                        {glossaryCategories[t.category].label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Glossario;
