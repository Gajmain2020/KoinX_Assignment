import { BUY_BAR, HOLD_BAR, INFO, SELL_BAR } from "../../../Constants";

export default function AnalystEstimate() {
  return (
    <>
      <div className="text-lg text-blue_gray-800_02 font-semibold flex gap-3 items-center">
        Analyst Estimate
        <img src={INFO} alt="" />
      </div>
      <div className="flex items-center gap-10">
        <div className="text-3xl px-6 py-5 rounded-full aspect-square bg-blue_gray-50 font-semibold text-teal-400 justify-center flex items-center">
          76 <span className="text-sm">%</span>
        </div>
        <div className="flex flex-col flex-1 gap-2 text-sm text-blue_gray-400">
          <div className="flex gap-10">
            Buy <img className="sm:w-[80%]" src={BUY_BAR} alt="" />
          </div>
          <div className="flex gap-8">
            Hold <img className="sm:w-[20%]" src={HOLD_BAR} alt="" />
          </div>
          <div className="flex gap-10">
            Sell <img className="sm:w-[20%]" src={SELL_BAR} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
