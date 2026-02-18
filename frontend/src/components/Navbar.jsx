import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Logo from "./Logo";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-4 px-4 font-medium sticky top-0 z-50 bg-[#050507] rounded-2xl mt-2 mb-4">
      <Link to="/">
        <Logo className="text-2xl" />
      </Link>

      <ul className="hidden sm:flex gap-1 text-sm text-gray-400">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-300"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-300"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-300"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-300"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:opacity-70 transition-opacity invert"
          alt=""
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer hover:opacity-70 transition-opacity invert"
            src={assets.profile_icon}
            alt=""
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 shadow-xl">
                <p className="cursor-pointer hover:text-purple-500 transition-colors text-sm">
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-purple-500 transition-colors text-sm"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-red-500 transition-colors text-sm"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 hover:opacity-70 transition-opacity invert"
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-purple-600 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden invert"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden glass-card transition-all duration-300 ${visible ? "w-full" : "w-0"}`}
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col text-gray-300 h-full bg-[#050507]/80">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer hover:bg-white/5 transition-colors"
          >
            <img
              className="h-4 rotate-180 invert"
              src={assets.dropdown_icon}
              alt=""
            />
            <p className="text-sm">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-white/5 hover:bg-white/5 transition-colors"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-white/5 hover:bg-white/5 transition-colors"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-white/5 hover:bg-white/5 transition-colors"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border-b border-white/5 hover:bg-white/5 transition-colors"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
