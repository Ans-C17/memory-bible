function Button({ onClick, display }) {
  return (
    <button
      className="bg-blue-300 text-white px-6 py-3 rounded-lg font-anek font-medium hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      {display}
    </button>
  );
}

export default Button;
