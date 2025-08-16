import { useState } from "react";
import verses from "../../data/verses.json";
import FlashCardFront from "./FlashCardFront";
import FlashCardBack from "./FlashCardBack";
import Button from "../Button";

function FlashCard() {
  const [showQuote, setShowQuote] = useState(false);

  const handleFlip = () => setShowQuote(true);
  const handlePrev = () => {
    console.log("previous");
  };
  const handleNext = () => {
    console.log("next");
  };

  return (
    <div className="h-72 w-11/12 py-6 max-w-sm sm:h-80 sm:max-w-md md:h-96 md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-blue-600 rounded-2xl flex flex-col justify-center items-center text-center">
      <div className="flex-1 flex items-center justify-center">
        {showQuote ? (
          <FlashCardBack verse={verses[0]} />
        ) : (
          <FlashCardFront verse={verses[0]} />
        )}
      </div>

      {showQuote ? (
        <div className="flex justify-between w-full px-32">
          <Button onClick={handlePrev} display="Prev" />
          <Button onClick={handleNext} display="Next" />
        </div>
      ) : (
        <Button onClick={handleFlip} display="Show" />
      )}
    </div>
  );
}

export default FlashCard;
