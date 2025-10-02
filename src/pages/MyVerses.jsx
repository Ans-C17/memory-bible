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
      <div className="bg-red-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full mx-30 h-full my-20 overflow-y-auto max-w-6xl">
        <div className="bg-cyan-700 p-6 rounded-xl">Card 1</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 2</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 3</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 4</div>
        <div className="bg-cyan-700 p-6 rounded-xl">Card 5</div>
      </div>
    </main>
  );
}

export default MyVerses;
