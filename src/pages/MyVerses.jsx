import Skeleton from "../Skeleton";
import { useVerses } from "../contexts/VerseContext";
import { useUserVerses } from "../contexts/UserVerseContext";
import NavBar from "../components/navbar/NavBar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MiniCard from "../components/card/MiniCard";
import userverses from "../../backend/models/userverses";

function MyVerses({ user, setUser }) {
  const location = useLocation();
  const [lang] = useState(location.state.lang);

  const { userVerses, loading, fetchVerses } = useUserVerses();
  useEffect(() => {
    if (user) fetchVerses(user.userId);
  }, [user]);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <div className="w-full flex justify-center items-center">
        <NavBar showSearch={false} showProfile={false} />
      </div>

      {userVerses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full mx-30 h-full mt-30 mb-10 overflow-y-auto max-w-6xl">
          {userVerses.map((verse) => {
            return <MiniCard verse={verse.verseId} lang={lang} />;
          })}
        </div>
      ) : (
        <h2 className="font-anek text-4xl text-emerald-200">
          YOU DON'T HAVE ANY VERSES, ADD VERSES TO BEGIN
        </h2>
      )}
    </main>
  );
}

export default MyVerses;
