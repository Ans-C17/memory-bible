import FlashCard from "../components/card/FlashCard";
import NavBar from "../components/navbar/NavBar";
import ProgressBar from "../components/card/ProgressBar";
import Skeleton from "../Skeleton";
// import verses from "../data/verses.json";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUserVerses } from "../contexts/UserVerseContext";
import EndTestPage from "../components/EndTestPage";
import { useVerses } from "../contexts/VerseContext";
// import userverses from "../../backend/models/userverses";

//controls stuff when the test begins, chumma i cant let users begin testing na
function Test({ user, setUser }) {
  const location = useLocation();
  const [lang] = useState(location.state.lang);

  const [nextIndex, setNextIndex] = useState(0);

  const { userVerses, loading, fetchVerses } = useUserVerses();
  useEffect(() => {
    if (user) fetchVerses(user.userId);
  }, [user]);

  if (loading) {
    return <Skeleton />;
  }

  function changeIndex(newIndex) {
    setNextIndex(newIndex);
  }

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-cyan-950">
      <div className="w-full flex justify-center items-center">
        <NavBar showSearch={false} showProfile={false} />
      </div>

      {userVerses.length > 0 ? (
        <>
          {nextIndex == userVerses.length ? (
            <EndTestPage />
          ) : (
            <div className="w-full flex items-center justify-center">
              <FlashCard
                index={nextIndex}
                onChangeIndex={changeIndex}
                lang={lang}
                user={user}
                setUser={setUser}
                userVerses={userVerses}
              />
            </div>
          )}

          <div className="w-96 absolute bottom-20">
            <ProgressBar progress={(nextIndex / userVerses.length) * 100} />
          </div>
        </>
      ) : (
        <h2 className="font-anek text-4xl text-emerald-200">
          YOU DON'T HAVE ANY VERSES, ADD VERSES TO BEGIN
        </h2>
      )}
    </main>
  );
}

export default Test;
