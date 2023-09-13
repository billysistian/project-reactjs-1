import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 w-full flex-none text-sm font-semibold leading-6 backdrop-blur text-slate-900 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto max-w-container px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex justify-between items-center py-4 max-w-6xl mx-auto px-4">
          <Link className="flex-none text-slate-900" to="/">
            <span className="text-2xl font-bold">Store</span>
          </Link>
          <div className="ml-auto hidden lg:flex lg:items-center">
            <Link to="/products">
              Products
            </Link>
            <input
              className="ml-8 mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
            {isDarkMode ? "Light" : "Dark"}
          </div>
          <div className="lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8 flex justify-between items-center">
            <Link
              className="h-10 rounded-md inline-flex items-center text-sm font-semibold p-2.5 bg-slate-900 text-white hover:bg-slate-700 mr-4 lg:mr-8"
              to="/cart"
            >
              Cart : {totalCart}
            </Link>
            <div className="relative hidden lg:flex">{username}</div>
            <Button
              classname="inline-flex items-center rounded-lg text-sm font-semibold py-2.5 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-4 lg:ml-8"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
