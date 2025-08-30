import verses from "../data/verses.json";

function DailyVerse() {
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
        {`"${verse.quote}"`}
      </div>
      <div className="font-anek text-xl text-yellow-300 text-center">{`${verse.book} ${verse.chapter}:${verse.verse}`}</div>
    </div>
  );
}

export default DailyVerse;
