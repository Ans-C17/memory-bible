import DailyVerse from "../components/DailyVerse";

function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-cyan-950">
      <div className="w-8/12">
        <DailyVerse />
      </div>
    </main>
  );
}

export default Home;
