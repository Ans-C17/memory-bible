import { Plus } from "lucide-react";

function SearchResultCard({ verse, lang }) {
  return (
    <div
      className="w-full relative my-3 p-4 rounded-2xl 
                bg-gradient-to-r from-cyan-800/40 via-cyan-700/30 to-cyan-600/40 
                backdrop-blur-md border border-cyan-200/30 shadow-2xl"
    >
      <div className="flex h-full p-2 rounded-xl">
        <div className="flex flex-col flex-1">
          <span className="font-anek flex-1 text-2xl text-white">{`${verse.book[lang]} ${verse.chapter}:${verse.verse}`}</span>
          <span className="font-anek flex-1 text-xl text-emerald-200 line-clamp-1 text-ellipsis overflow-hidden">
            {verse.quote[lang]}
          </span>
        </div>
        <button className="bg-emerald-200 rounded-sm my-auto p-1 hover:bg-emerald-300 hover:scale-110 transition-all">
          <Plus size={36} color="#062c33" />
        </button>
      </div>
    </div>
  );
}

export default SearchResultCard;
