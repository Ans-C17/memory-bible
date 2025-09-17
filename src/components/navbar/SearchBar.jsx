import { Search } from "lucide-react";
import { useVerses } from "../../contexts/VerseContext";
import SearchResultCard from "../SearchResultCard";
import { useState } from "react";

function SearchBar({ lang }) {
  // const verses = useVerses().verses.map(
  //   (verse) => `${verse.book.en.toLowerCase()} ${verse.chapter}:${verse.verse}`
  // );

  const { verses } = useVerses();

  const [searchQuery, setSearchQuery] = useState("");
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="w-full relative">
      {/* search bar */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Verse by Book Chapter:Verse"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowCards(e.target.value.length > 0);
          }}
          onFocus={() => searchQuery.length > 0 && setShowCards(true)}
          onBlur={() => setShowCards(false)}
          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-800/80 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 min-w-0"
        />
      </div>

      {/* search results */}
      <div className={`${showCards ? "" : "hidden"}`}>
        {verses
          .filter(
            (verse) =>
              verse.book.en.toLowerCase().startsWith(searchQuery.toLowerCase())
            // (verse) => verse.startsWith(searchQuery.toLowerCase())
            // verse.chapter.toString().includes(searchQuery.toLowerCase()) ||
            // verse.verse.toString().includes(searchQuery.toLowerCase())
          )
          .slice(0, 5)
          .map((verse) => (
            <SearchResultCard verse={verse} lang={lang} />
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
