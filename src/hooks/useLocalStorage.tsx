import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
  // Verificar se o objeto window está disponível (navegador)
  const isClient = typeof window === "object";

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (isClient) {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored JSON or return initialValue if none
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      // If there's an error, also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      if (isClient) {
        // Allow value to be a function so we have the same API as useState
        const valueToStore =
          typeof storedValue === "function"
            ? storedValue(storedValue)
            : storedValue;
        // Save state
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [isClient, key, storedValue]);

  return [storedValue, setStoredValue];
};
