import Home from "./pages/Home";
import Test from "./pages/Test";
import MyVerses from "./pages/MyVerses";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Routes>
        <Route
          path="/"
          element={<Home user={user} setUser={setUser} />}
        ></Route>
        <Route
          path="/test"
          element={<Test user={user} setUser={setUser} />}
        ></Route>
        <Route
          path="/user-verses"
          element={<MyVerses user={user} setUser={setUser} />}
        ></Route>
        {/* sub this with the user name and the special query path or whatever */}
      </Routes>
    </div>
  );
}

export default App;
