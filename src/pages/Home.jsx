import DailyVerse from "../components/DailyVerse";
import NormalButton from "../components/buttons/NormalButton";
import NavBar from "../components/navbar/NavBar";
import Skeleton from "../Skeleton";
import { useVerses } from "../contexts/VerseContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const { loading } = useVerses();
  if (loading) return <Skeleton />;

  const languages = ["English", "Malayalam"];
  const langKeys = ["en", "ml"];

  const [lang, setLang] = useState(0);
  function changeLang() {
    setLang(lang == 0 ? 1 : 0);
  }

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <div className="w-full flex justify-center items-center">
        <NavBar showSearch={true} showProfile={true} lang={langKeys[lang]} />
      </div>
      <div className="w-8/12 m-10 min-h-[150px]">
        <DailyVerse lang={langKeys[lang]} />
      </div>
      <div className="flex gap-6">
        <Link to="/test" state={{ lang: langKeys[lang] }}>
          <NormalButton display={"Start Test"} />
        </Link>
        <NormalButton onClick={SubmitEvent} display={"My Verses"} />
        <NormalButton onClick={changeLang} display={languages[lang]} />
      </div>
    </main>
  );
}

export default Home;
