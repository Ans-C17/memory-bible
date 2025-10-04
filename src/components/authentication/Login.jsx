function Login() {
  function handleSubmit() {}

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-4"
    >
      <input
        type="text"
        placeholder="Email"
        className="w-full p-2 bg-cyan-600 rounded-md outline-none text-white placeholder-gray-600 focus:ring-1 focus:ring-cyan-300"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 bg-cyan-600 rounded-md outline-none text-white placeholder-gray-600 focus:ring-1 focus:ring-cyan-300"
      />
      <button
        type="submit"
        className="rounded-3xl border-2 border-emerald-300 px-6 py-2 text-emerald-800 text-lg bg-emerald-300 font-anek hover:scale-105 transition-all"
      >
        Log In
      </button>
    </form>
  );
}

export default Login;
