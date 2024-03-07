import { NAVIGATION } from "../../Constants";
import RightSidebar from "../RightSidebar";
import Tabs from "../Tabs";
import Details from "./Details";
import MainDescription from "./MainDescription";

export default function Bitcoin() {
  return (
    <div className="grid gap-4 mt-2 w-full">
      <div className="flex gap-2 mt-2 items-center">
        <a href="#" className="text-blue_gray-400">
          Cryptocurrencies
        </a>{" "}
        <img src={NAVIGATION} alt="Navigation Image" /> <span>Bitcoin</span>
      </div>
      <div className="grid grid-cols-10 sm:grid-cols-1 gap-4 sm:gap-0">
        <div className="col-span-7">
          <div>
            <div className="h-4/5 px-6 py-6 bg-white rounded-md">
              <MainDescription />
            </div>
            <div className="my-5">
              <Tabs />
            </div>
            <Details />
          </div>
        </div>
        {/* Right Sidebar constant component */}
        <RightSidebar />
      </div>
    </div>
  );
}
