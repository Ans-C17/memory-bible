import Home from "./pages/Home";
import Test from "./pages/Test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
