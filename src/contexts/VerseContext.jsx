import { createContext, useContext, useState, useEffect } from "react";

const VerseContext = createContext();

export function VerseProvider({ children }) {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    async function fetchVerses() {
      try {
        const res = await fetch("http://localhost:3000/verses");
        const data = await res.json();
        setVerses(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchVerses();
  }, []);

  return (
    <VerseContext.Provider value={{ verses, setVerses }}>
      {children}
    </VerseContext.Provider>
  );
}

export function useVerses() {
  return useContext(VerseContext);
}
