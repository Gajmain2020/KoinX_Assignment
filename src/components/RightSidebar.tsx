import { useEffect, useState } from "react";
import { GET_STARTED, ARROW, PROFIT, LOSS } from "../Constants";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RightSidebar() {
  // making api call for fetching trending top 3 trending coins

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [trendingCoin, setTrendingCoin] = useState<any>([]);

  useEffect(() => {
    fetchTrendingCoinAPI()
      .then((res) => {
        setTrendingCoin(res.coins.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  async function fetchTrendingCoinAPI() {
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.coingecko.com/api/v3/search/trending",
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="col-span-3 flex flex-col gap-5 sm:col-span-1 ">
      <div className="rounded-xl text-center py-8 bg-blue-A700_01 text-white text-sm px-8 flex flex-col gap-4">
        <div className="text-xl font-semibold text-white leading-relaxed">
          Get Started with KoinX <br /> for FREE
        </div>
        <div className="text-xs leading-relaxed">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
        <div className="flex justify-center pt-5">
          <img src={GET_STARTED} alt="Get Started Image" />
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/get-started"
            className="flex px-5 py-3 justify-center items-center gap-2 font-semibold text-lg bg rounded-lg bg-white text-gray-900_07 hover:shadow-md transition"
          >
            Get Started for Free <img src={ARROW} alt="->" />
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-md px-4 py-5 flex flex-col gap-4">
        <div className="text-lg font-semibold">Trending Coins (24h)</div>
        {trendingCoin.length !== 0 && (
          <div className="flex flex-col gap-5">
            {trendingCoin.map((t:any) => (
              <SingleTrendingCoin trendingCoin={t.item} key={t.item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SingleTrendingCoin({ trendingCoin }:{trendingCoin:any}) {
  return (
    <Link to={`/${trendingCoin.id}`}>
      <div className="flex justify-between gap-5">
        <div className="flex gap-2 font-semibold truncate items-center">
          <img
            className="rounded-full"
            width={30}
            src={trendingCoin.small}
            alt={trendingCoin.name}
          />
          <div>
            <span className="">{trendingCoin.name.split(" ")[0]}&nbsp;</span>
            <span>({trendingCoin.symbol})</span>
          </div>
        </div>
        <div
          className={
            trendingCoin.data.price_change_percentage_24h.usd < 0
              ? "loss pnl text-lg"
              : "profit pnl text-lg"
          }
        >
          {trendingCoin.data.price_change_percentage_24h.usd < 0 ? (
            <img src={LOSS} alt="Loss" />
          ) : (
            <img src={PROFIT} alt="Profit" />
          )}
          <span>
            {Math.abs(
              trendingCoin.data.price_change_percentage_24h.usd
            ).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
