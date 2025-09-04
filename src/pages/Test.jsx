import FlashCard from "../components/card/FlashCard";
import NavBar from "../components/navbar/NavBar";
import ProgressBar from "../components/card/ProgressBar";
import verses from "../data/verses.json";
import { useState } from "react";

//controls stuff when the test begins, chumma i cant let users begin testing na
function Test() {
  const [nextIndex, setNextIndex] = useState(0);

  function changeIndex(newIndex) {
    setNextIndex(newIndex);
  }

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <div className="w-full flex justify-center items-center">
        <NavBar showSearch={false} showProfile={false} />
      </div>

      <div className="w-full flex items-center justify-center">
        <FlashCard index={nextIndex} onChangeIndex={changeIndex} />
      </div>

      {/* make this responsive later */}
      <div className="w-96 absolute bottom-20">
        <ProgressBar progress={(nextIndex / verses.length) * 100} />
      </div>
    </main>
  );
}

export default Test;
