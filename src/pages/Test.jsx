import FlashCard from "../components/card/FlashCard";
import NavBar from "../components/navbar/NavBar";
import ProgressBar from "../components/card/ProgressBar";
import { Link } from "react-router-dom";

//controls stuff when the test begins, chumma i cant let users begin testing na
function Test() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <div className="w-full flex justify-center items-center">
        <NavBar showSearch={false} showProfile={false} />
      </div>

      <div className="w-full flex items-center justify-center">
        <FlashCard />
      </div>

      {/* make this responsive later */}
      <div className="w-96 absolute bottom-20">
        <ProgressBar progress={90} />
      </div>
    </main>
  );
}

export default Test;
