import { Link } from "react-router-dom";
import { NAVBAR_OPTIONS, LOGO } from "../Constants";

export default function Navbar() {
  function handleGetStartedClick() {
    //! fucntionality of getting started to be written here
    console.log("Handle Get Started Clicked");
  }

  return (
    <div className="flex justify-between py-2 w-full bg-white px-24 sm:px-5">
      <div className="flex items-center">
        <Link to="/">
          <img src={LOGO} alt="KoinX Logo" />
        </Link>
      </div>
      <div className="flex gap-5 items-center font-inter py-3 font-semibold sm:hidden">
        {NAVBAR_OPTIONS.map((option) => (
          <Link to={option.link}>{option.optionName}</Link>
        ))}
        <button
          onClick={handleGetStartedClick}
          className="flex flex-row justify-center items-center p-2 gap-2 w-34 h-10 bg-gradient-to-r from-blueGrad-left to-blueGrad-right rounded-lg text-gray-50"
        >
          Get Started
        </button>
      </div>
      <div className="hidden gap-5 items-center font-inter py-3 font-semibold sm:flex">
        helllo
      </div>
    </div>
  );
}
