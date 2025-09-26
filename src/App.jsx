import Home from "./pages/Home";
import Test from "./pages/Test";
import MyVerses from "./pages/MyVerses";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/user-verses" element={<MyVerses />}></Route>
        {/* sub this with the user name and the special query path or whatever */}
      </Routes>
    </div>
  );
}

export default App;
