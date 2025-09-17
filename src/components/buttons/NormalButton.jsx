function NormalButton({ onClick, display }) {
  return (
    <button
      className="bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 text-white py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-100 font-anek"
      onClick={onClick || (() => {})}
    >
      {display}
    </button>
  );
}

export default NormalButton;
