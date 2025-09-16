// import verses from "../data/verses.json";
import { useVerses } from "../contexts/VerseContext";

function DailyVerse({ lang }) {
  const { verses } = useVerses();
  if (!verses || verses.length === 0) return <div>Loading...</div>;

  function verseOfTheDay() {
    const today = new Date();
    const year = new Date(today.getFullYear(), 0, 0);
    const day = Math.floor((today - year) / 86400000);
    return verses[day % verses.length];
  }

  const verse = verseOfTheDay();

  return (
    <div className="space-x-4 space-y-3">
      <div className="font-anek text-3xl text-emerald-200 text-center">
        {`"${verse.quote[lang]}"`}
      </div>
      <div className="font-anek text-xl text-yellow-300 text-center">{`${verse.book[lang]} ${verse.chapter}:${verse.verse}`}</div>
    </div>
  );
}

export default DailyVerse;
