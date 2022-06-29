import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    const itemValue = value === '' ? '' : JSON.stringify(value);
    localStorage.setItem(key, itemValue);
  }, [key, value]);

  return [value, setValue];
};
