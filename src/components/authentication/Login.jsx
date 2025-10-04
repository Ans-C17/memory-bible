function Login({ setUser }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) alert(data.error);
    else setUser(data);
  }

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
        className="rounded-3xl cursor-pointer border-2 border-emerald-300 px-6 py-2 text-emerald-800 text-lg bg-emerald-300 font-anek hover:scale-105 transition-all"
      >
        Log In
      </button>
    </form>
  );
}

export default Login;
