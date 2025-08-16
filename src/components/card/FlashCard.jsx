import verses from "../../data/verses.json";
import FlashCardFront from "./FlashCardFront";

function FlashCard() {
  return (
    <div className="h-72 w-11/12 max-w-sm sm:h-80 sm:max-w-md md:h-96 md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-blue-600 rounded-2xl flex justify-center items-center text-center">
      <FlashCardFront verse={verses[0]} />
    </div>
  );
}

export default FlashCard;
