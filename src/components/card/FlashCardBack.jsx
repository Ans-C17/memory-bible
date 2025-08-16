function FlashCardBack({ verse }) {
  return (
    <div>
      <div className="text-white font-anek text-xl">{verse.quote}</div>
      <br></br>
      <div className="text-yellow-300 font-anek text-2xl">{`${verse.book} ${verse.chapter}:${verse.verse}`}</div>
    </div>
  );
}

export default FlashCardBack;
