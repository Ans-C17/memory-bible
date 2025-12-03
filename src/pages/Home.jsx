import DailyVerse from "../components/DailyVerse";
import NormalButton from "../components/buttons/NormalButton";
import NavBar from "../components/navbar/NavBar";
import Skeleton from "../Skeleton";
import MyVerses from "./MyVerses";
import { useVerses } from "../contexts/VerseContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home({ user, setUser }) {
  const [lang, setLang] = useState(0);

  const { loading } = useVerses();
  if (loading) return <Skeleton />;

  // console.log(user);

  const languages = ["English", "Malayalam"];
  const langKeys = ["en", "ml"];

  function changeLang() {
    setLang(lang == 0 ? 1 : 0);
  }

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <NavBar
        showSearch={true}
        showProfile={true}
        lang={langKeys[lang]}
        user={user}
        setUser={setUser}
      />

      <div className="w-8/12 m-10 min-h-[150px]">
        <DailyVerse lang={langKeys[lang]} />
      </div>
      <div className="flex gap-6">
        <Link to="/test" state={{ lang: langKeys[lang] }}>
          <NormalButton display={"Start Test"} />
        </Link>
        <Link to="/user-verses" state={{ lang: langKeys[lang] }}>
          <NormalButton display={"My Verses"} />
        </Link>
        <NormalButton onClick={changeLang} display={languages[lang]} />
      </div>
    </main>
  );
}

export default Home;
