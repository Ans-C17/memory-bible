function FlashCardButton({ onClick, display }) {
  return (
    <button
      className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
      onClick={onClick}
    >
      {display}
    </button>
  );
}

export default FlashCardButton;
