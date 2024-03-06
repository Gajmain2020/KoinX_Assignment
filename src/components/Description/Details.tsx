import { BAR, BAR2, INFO, ROW1, ROW2 } from "../../Constants";
import Divider from "../Divider";
import AboutCoin from "./About/AboutCoin";
import AnalystEstimate from "./Analyst Estimate/AnalystEstimate";
import Events from "./Event/Events";
import Team from "./Team/Team";
import Tokenomics from "./Tokenomics/Tokenomics";

export default function Details() {
  return (
    <div className="grid gap-5">
      <div className="h-full px-6 py-6 grid gap-5 bg-white rounded-md">
        <div className="text-xl font-bold text-gray-900_07">Performance</div>
        <div className="flex gap-4 my-2 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 px-3">
            <span className="text-sm">Today's Low</span>
            <span>46,930.22</span>
          </div>
          <div className="flex-1">
            <img src={BAR} className="mx-auto" alt="Bar" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 px-3">
            <span className="text-sm">Today's High</span>
            <span>49,343.83</span>
          </div>
        </div>

        <div className="flex gap-4 my-2 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 px-3">
            <span className="text-sm">52W Low</span>
            <span>16,930.22</span>
          </div>
          <div className="flex-1">
            <img src={BAR2} className="mx-auto" alt="Bar" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 px-3">
            <span className="text-sm">52W High</span>
            <span>49,743.83</span>
          </div>
        </div>

        <div className="text-lg text-blue_gray-800_02 font-semibold flex gap-3 items-center">
          Fundamentals
          <img src={INFO} alt="" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-0">
          <div className="grid">
            {ROW1.map((row) => (
              <Row title={row.title} desc={row.desc} />
            ))}
          </div>
          <div className="grid">
            {ROW2.map((row) => (
              <Row title={row.title} desc={row.desc} />
            ))}
            <div className="flex justify-between items-center">
              <span className="text-blue_gray-400">All-Time High</span>
              <span className="font-semibold flex flex-col justify-end">
                <span className="flex justify-end">
                  $69,044 &nbsp;<span className="text-red-500">-76.6%</span>
                </span>
                <span className="text-xs text-blue_gray-500">
                  Nov 10, 2021 (about 1 year)
                </span>
              </span>
            </div>
            <Divider />
            <div className="flex justify-between">
              <span className="text-blue_gray-400">All-Time Low</span>
              <span className="font-semibold flex flex-col justify-end">
                <span className="flex justify-end">
                  $67.81 &nbsp;<span className="text-green-500">24729.1%</span>
                </span>
                <span className="text-xs text-blue_gray-500">
                  Jul 06, 2013 (over 9 year)
                </span>
              </span>
            </div>
            <Divider />
          </div>
        </div>
      </div>
      {/* sentiment page */}
      <div className="h-full px-6 py-6 grid gap-5 bg-white rounded-md">
        <div className="text-xl font-bold text-gray-900_07">Sentiment</div>
        <Events />

        <AnalystEstimate />
      </div>
      {/* ABOUT COMPONENT */}
      <AboutCoin />

      {/* TOKENOMICS COMPONENT */}
      <Tokenomics />
      <Team />
    </div>
  );
}

function Row({ title, desc }) {
  return (
    <>
      <div className="flex justify-between">
        <span className="text-blue_gray-400">{title}</span>
        <span className="font-semibold">{desc}</span>
      </div>
      <Divider />
    </>
  );
}
