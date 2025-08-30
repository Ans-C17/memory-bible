import SearchBar from "./SearchBar";
import profile from "../../assets/person_2.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-4 left-10 right-10 z-50">
      <div className="flex items-center px-4 py-3 rounded-lg">
        <div className="flex-1 flex justify-start">
          <span className="text-emerald-200 font-anek text-3xl cursor-pointer">
            <Link to="/">MemoryBible</Link>
          </span>
        </div>
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>
        <div className="flex-1 flex justify-end">
          <img src={profile} alt="none" className="h-10 w-auto" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
