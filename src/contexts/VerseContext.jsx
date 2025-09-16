import { createContext, useContext, useState, useEffect } from "react";

const VerseContext = createContext();

export function VerseProvider({ children }) {
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVerses() {
      try {
        const res = await fetch("http://localhost:3000/verses");
        //IMPORTANT: THE MASTER VERSES OBJECT ORDER IS CORRECT, WE ONLY ADD MORE DETAILS IN THE USER VERSES SCHEMA
        const data = await res.json();
        setVerses(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVerses();
  }, []);

  return (
    <VerseContext.Provider value={{ verses, loading }}>
      {children}
    </VerseContext.Provider>
  );
}

export function useVerses() {
  return useContext(VerseContext);
}
