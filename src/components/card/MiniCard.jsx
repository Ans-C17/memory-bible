import { Quote } from "lucide-react";
import { useState } from "react";

function MiniCard({ verse, lang }) {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div
      className="bg-cyan-600 p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all flex items-center justify-center h-40 w-full outline-3 outline-white -outline-offset-10 font-anek text-white"
      onClick={() => {
        setShowQuote(!showQuote);
      }}
    >
      {showQuote ? (
        <div className="text-sm overflow-y-auto max-h-11/12 max-w-10/12">
          {verse.quote[lang]}
        </div>
      ) : (
        <div className="text-2xl text-center">
          {verse.book[lang]} {verse.chapter}:{verse.verse}
        </div>
      )}
    </div>
  );
}

export default MiniCard;
