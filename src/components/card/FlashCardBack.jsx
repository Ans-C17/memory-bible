function FlashCardBack({ verse }) {
  return (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="text-white font-anek text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed overflow-y-auto flex-1">
        {verse.quote}
      </div>
      <div className="text-yellow-300 font-anek text-base sm:text-lg md:text-xl lg:text-2xl mt-4 flex-shrink-0">
        {`${verse.book} ${verse.chapter}:${verse.verse}`}
      </div>
    </div>
  );
}

export default FlashCardBack;
