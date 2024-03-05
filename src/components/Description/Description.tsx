import { NAVIGATION } from "../../Constants";
import RightSidebar from "../RightSidebar";
import MainDescription from "./MainDescription";

export default function Bitcoin() {
  return (
    <div className="grid gap-2 mt-2 w-full">
      <div className="flex gap-2 items-center">
        <a href="#" className="text-blue_gray-400">
          Cryptocurrencies
        </a>{" "}
        <img src={NAVIGATION} alt="Navigation Image" /> <span>Bitcoin</span>
      </div>
      <div className="grid grid-cols-10 sm:grid-cols-1 gap-4">
        <div className="px-6 py-6 col-span-7 bg-white rounded-md">
          <MainDescription />
        </div>

        {/* Right Sidebar constant component */}
        <RightSidebar />
      </div>
    </div>
  );
}
