import Skeleton from "../Skeleton";
import { useVerses } from "../contexts/VerseContext";
import NavBar from "../components/navbar/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";

function MyVerses() {
  const { verses, loading } = useVerses();
  //THIS IS NOT WHAT WE NEED, WE NEED USER VERSES, NOT MASTER VERSES
  if (loading) return <Skeleton />;

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <NavBar showSearch={false} showProfile={false} />
    </main>
  );
}

export default MyVerses;
