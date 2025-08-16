function FlashCardFront({ verse }) {
  return (
    <div className="text-white font-anek text-5xl">{`${verse.book} ${verse.chapter}:${verse.verse}`}</div>
  );
}

export default FlashCardFront;
