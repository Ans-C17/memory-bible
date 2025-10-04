function HeyUser({ user, onLogout }) {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-3xl text-emerald-200 font-anek text-center">
        👋 Hello {user.name}!
      </h1>
      <p className="text-xl text-white font-anek italic text-center">
        "May the spirit guide you"
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-3 rounded-xl border-2 font-anek border-red-400 text-white px-4 py-2 hover:bg-red-600 transition-all"
      >
        Log Out
      </button>
    </div>
  );
}

export default HeyUser;
