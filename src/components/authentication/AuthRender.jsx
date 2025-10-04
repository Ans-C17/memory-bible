import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import HeyUser from "./HeyUser";

function AuthRender({ user, setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  if (user) {
    return (
      <div className="h-56 w-72 absolute right-10 border-2 border-cyan-300 rounded-2xl p-6 bg-cyan-800 flex flex-col">
        <HeyUser user={user} />
      </div>
    );
  } else if (!showSignUp) {
    //show login
    return (
      <>
        <div className="h-72 w-72 absolute right-10 border-2 border-cyan-300 rounded-t-2xl p-6 bg-cyan-800 flex flex-col">
          <h2 className="text-2xl text-emerald-200 font-anek text-center mb-6">
            LOGIN
          </h2>
          <Login setUser={setUser} />
        </div>
        <div className="w-72 h-16 absolute space-x-2 top-82 right-10 flex items-center justify-center border-2 border-cyan-300 rounded-b-2xl bg-cyan-800 font-anek text-lg">
          <h3 className="text-emerald-200">New User?</h3>
          <button
            onClick={() => setShowSignUp(!showSignUp)}
            className="text-blue-300 hover:underline hover:scale-110 hover:text-blue-400 transition-all cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </>
    );
  } else {
    //show sign up
    return (
      <>
        <div className="h-72 w-72 absolute right-10 border-2 border-cyan-300 rounded-t-2xl p-6 bg-cyan-800 flex flex-col">
          <h2 className="text-2xl text-emerald-200 font-anek text-center mb-2">
            SIGN UP
          </h2>
          <Signup setUser={setUser} />
        </div>
        <div className="w-72 h-16 absolute space-x-2 top-82 right-10 flex items-center justify-center border-2 border-cyan-300 rounded-b-2xl bg-cyan-800 font-anek text-lg">
          <h3 className="text-emerald-200">Already have an account?</h3>
          <button
            onClick={() => setShowSignUp(!showSignUp)}
            className="text-blue-300 hover:underline hover:scale-110 hover:text-blue-400 transition-all cursor-pointer"
          >
            Log In
          </button>
        </div>
      </>
    );
  }
}

export default AuthRender;
