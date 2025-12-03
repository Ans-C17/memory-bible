import SearchBar from "./SearchBar";
import usericon from "../../assets/usericon2.svg";
import AuthRender from "../authentication/AuthRender";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar({ showSearch, showProfile, lang, user, setUser }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  // console.log(user.userId);

  return (
    <div className="fixed top-4 left-10 right-10 z-50">
      <div className="flex items-start px-4 py-3 rounded-lg">
        <div className="flex-1 flex justify-start">
          <span className="text-emerald-200 font-anek text-3xl cursor-pointer">
            <Link to="/">MemoryBible</Link>
          </span>
        </div>
        <div
          className={`flex-1 flex justify-center ${
            showSearch ? "" : "invisible"
          }`}
        >
          <SearchBar lang={lang} user={user} />
        </div>
        <div
          className={`flex-1 flex justify-end ${
            showProfile ? "" : "invisible"
          }`}
        >
          <div className="relative">
            <img
              src={usericon}
              alt="none"
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="size-8 cursor-pointer hover:brightness-150"
            />
            {showUserMenu && <AuthRender user={user} setUser={setUser} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
