import DailyVerse from "../components/DailyVerse";
import NormalButton from "../components/buttons/NormalButton";
import NavBar from "../components/navbar/NavBar";
import { Link } from "react-router-dom";

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
        <Link to="/test">
          <NormalButton display={"Start Test"} />
        </Link>
        <NormalButton onClick={SubmitEvent} display={"My Verses"} />
      </div>
    </main>
  );
}

export default Home;
