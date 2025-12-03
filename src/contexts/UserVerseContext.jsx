import { createContext, useContext, useState, useEffect } from "react";

const UserVerseContext = createContext();

export function UserVerseProvider({ children }) {
  const [userVerses, setUserVerses] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchVerses(userId) {
    if (!userId) return;

    setLoading(true);

    try {
      console.log("im inside the try block");
      const res = await fetch(`http://localhost:3000/userverses/${userId}`);
      const data = await res.json();
      if (data) console.log(data);
      else console.log("onum kiteela");
      setUserVerses(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function addVerse(userId, verseId) {
    try {
      const res = await fetch(`http://localhost:3000/userverses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, verseId }),
      });

      const data = await res.json();

      // console.log(userId, verseId);

      if (res.ok) {
        fetchVerses(userId); //refresh the list
      }

      return data;
    } catch (error) {
      console.log(error.error);
    }
  }

  return (
    <UserVerseContext.Provider
      value={{ userVerses, loading, fetchVerses, addVerse }}
    >
      {children}
    </UserVerseContext.Provider>
  );
}

export function useUserVerses() {
  return useContext(UserVerseContext);
}
