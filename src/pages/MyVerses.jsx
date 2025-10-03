import Skeleton from "../Skeleton";
import { useVerses } from "../contexts/VerseContext";
import NavBar from "../components/navbar/NavBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MiniCard from "../components/card/MiniCard";

function MyVerses() {
  const { verses, loading } = useVerses();
  //THIS IS NOT WHAT WE NEED, WE NEED USER VERSES, NOT MASTER VERSES
  if (loading) return <Skeleton />;

  const location = useLocation();
  const [lang] = useState(location.state.lang);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <NavBar showSearch={false} showProfile={false} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full mx-30 h-full mt-30 mb-10 overflow-y-auto max-w-6xl">
        {verses.map((verse) => {
          return <MiniCard verse={verse} lang={lang} />;
        })}
      </div>
    </main>
  );
}

export default MyVerses;
