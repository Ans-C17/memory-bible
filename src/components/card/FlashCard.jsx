import { useState } from "react";
import { useVerses } from "../../contexts/VerseContext";
// import verses from "../../data/verses.json";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import FlashCardButton from "../buttons/FlashCardButton";
import Rating from "./Rating";
//FEATURES TO ADD: RANDOM LIST OF PRAYERS , AND ONE SHOWN BEFORE STARTING TEST AND ONE SHOWN AFTER

function FlashCard({ index, onChangeIndex, lang }) {
  const { verses } = useVerses();
  //this is not what we should import, we dont need master verses, we need user verses

  const [showQuote, setShowQuote] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleFlip = () => setShowQuote(true);
  const handleRating = () => setShowNextButton(true);
  const handleNext = () => {
    onChangeIndex(index + 1);
    setShowQuote(false);
    setShowNextButton(false);
  };

  return (
    <div className="h-72 w-11/12 py-6 max-w-sm sm:h-80 sm:max-w-md md:h-96 md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-cyan-600 border-8 border-cyan-600 outline-3 outline-white -outline-offset-16 flex flex-col justify-center items-center text-center">
      <div className="flex-1 flex items-center justify-center">
        {showQuote ? (
          <FlashCardBack verse={verses[index]} lang={lang} />
        ) : (
          <FlashCardFront verse={verses[index]} lang={lang} />
        )}
      </div>

      {showQuote ? (
        showNextButton ? (
          <FlashCardButton onClick={handleNext} display="Next" />
        ) : (
          <Rating onRating={handleRating} />
        )
      ) : (
        <FlashCardButton onClick={handleFlip} display="Reveal" />
      )}
    </div>
  );
}

export default FlashCard;
