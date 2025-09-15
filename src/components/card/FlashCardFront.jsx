function FlashCardFront({ verse, lang }) {
  return (
    <div className="text-white font-anek text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
      {`${verse.book[lang]} ${verse.chapter}:${verse.verse}`}
    </div>
  );
}

export default FlashCardFront;
