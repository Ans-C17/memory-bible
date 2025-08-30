import DailyVerse from "../components/DailyVerse";
import NormalButton from "../components/buttons/NormalButton";
import FlashCard from "../components/card/FlashCard";
import NavBar from "../components/navbar/NavBar";

function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-cyan-950">
      <div className="w-full flex justify-center items-center">
        <NavBar />
      </div>
      <div className="w-8/12 m-10">
        <DailyVerse />
      </div>
      <div className="flex gap-6">
        <NormalButton onClick={SubmitEvent} display={"Start Test"} />
        <NormalButton onClick={SubmitEvent} display={"My Verses"} />
      </div>
    </main>
  );
}

export default Home;
