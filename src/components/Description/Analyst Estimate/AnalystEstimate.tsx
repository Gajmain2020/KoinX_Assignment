import {
  BUY_BAR,
  HOLD_BAR2,
  INFO,
  LOSS_BAR,
  PROFIT_BAR,
} from "../../../Constants";

export default function AnalystEstimate() {
  return (
    <>
      <div className="text-lg text-blue_gray-800_02 font-semibold flex gap-3 items-center">
        Analyst Estimate
        <img src={INFO} alt="" />
      </div>
      <div className="flex items-center gap-10 sm:gap-4">
        <div className="text-3xl px-6 py-5 rounded-full aspect-square bg-blue_gray-50 font-semibold text-teal-400 justify-center flex items-center">
          76 <span className="text-sm">%</span>
        </div>
        <div className="flex flex-col flex-1 gap-2 text-sm text-blue_gray-400">
          <div className="flex gap-10 sm:gap-2 ">
            Buy <img className="sm:hidden" src={BUY_BAR} alt="" />{" "}
            <img src={PROFIT_BAR} className="hidden sm:flex" />
          </div>
          <div className="flex gap-8 sm:gap-2">
            Hold <img className="sm:hidden" src={BUY_BAR} alt="" />{" "}
            <img src={HOLD_BAR2} className="hidden sm:flex" />
          </div>
          <div className="flex gap-10 sm:gap-2">
            Sell <img className="sm:hidden" src={BUY_BAR} alt="" />{" "}
            <img src={LOSS_BAR} className="hidden sm:flex" />
          </div>
        </div>
      </div>
    </>
  );
}
