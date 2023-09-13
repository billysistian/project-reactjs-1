import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
    const {children, title, type} = props;
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    {
      console.log(isDarkMode)
    }
    return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
    <div className="w-full max-w-xs rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <button
        className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" 
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
      <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        Welcome, please enter your details
      </p>
      {children}
      <Auth type={type} />
    </div>
    </div>
    );
};

const Auth = ({type}) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
}

export default AuthLayouts;