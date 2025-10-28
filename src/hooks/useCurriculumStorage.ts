import { useEffect, useCallback } from 'react';
import { CurriculumData } from '@/types/curriculum';

const STORAGE_KEY = 'curriculum_draft';

export const useCurriculumStorage = (
  data: CurriculumData,
  setData: (data: CurriculumData) => void
) => {
  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setData(parsed);
      } catch (error) {
        console.error('Error loading saved curriculum:', error);
      }
    }
  }, [setData]);

  // Save data whenever it changes
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, 500); // Debounce save by 500ms

    return () => clearTimeout(timer);
  }, [data]);

  // Clear saved data
  const clearStorage = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Check if there's saved data
  const hasSavedData = useCallback(() => {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }, []);

  return { clearStorage, hasSavedData };
};
