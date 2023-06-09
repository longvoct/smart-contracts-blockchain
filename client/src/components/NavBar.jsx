import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
import { useState } from "react";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <h1>
      <nav className="w-full flex justify-between items-center p-4 md:px-20 ">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-betweem items-center flex-initial">
          {["Docs", "Services", "About", "Blog", "Contact"].map(
            (item, index) => (
              <NavbarItem key={item + index} title={item} />
            )
          )}
          <li className="bg-[#f6862a] py-3 px-7 mx-4 rounded-full cursor-pointer transition-all hover:bg-[#fe7c11] ">
            Connect Wallet
          </li>
        </ul>
        <div className="md:hidden flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 px-4 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2 ">
                <AiOutlineClose
                  fontSize={28}
                  onClick={() => setToggleMenu(false)}
                />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => (
                  <NavbarItem
                    key={item + index}
                    title={item}
                    classProps="my-2 text-lg"
                  />
                )
              )}
            </ul>
          )}
        </div>
      </nav>
    </h1>
  );
};

export { NavbarItem };
export default NavBar;
