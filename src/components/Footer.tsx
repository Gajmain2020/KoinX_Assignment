/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";

export default function Footer() {
  const [trendingCoin, setTrendingCoin] = useState<any>([]);

  useEffect(() => {
    fetchTrendingCoinAPI()
      .then((res) => {
        setTrendingCoin(res.coins.slice(0, 5));
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

  if (trendingCoin.length === 0) {
    return (
      <div className="bg-white px-24 sm:px-2 py-10 sm:py-2 mt-20 sm:mt-4">
        <span className="text-lg animate-pulse">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-white grid gap-6 px-24 sm:px-2 py-10 sm:py-2 mt-20 sm:mt-4">
      <div className="grid gap-4 snap-x">
        <div className="font-semibold text-blue_gray-500 text-xl">
          You May Also Like
        </div>

        <div className="grid gap-2 overflow-auto no-scrollbar">
          <div className="sm:mx-auto overflow-hidden ">
            <div className="overflow-hidden">
              <div className="flex w-full justify-between flex-nowrap space-x-4 sm:space-x-6 lg:space-x-8 pb-4">
                {trendingCoin.map((coin: any) => (
                  <SingleCard card={coin} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="font-semibold text-blue_gray-500 text-xl">
          Trending Coins
        </div>

        <div className="grid gap-2 overflow-auto no-scrollbar">
          <div className="sm:mx-auto overflow-hidden ">
            <div className="overflow-hidden">
              <div className="flex w-full justify-between flex-nowrap space-x-4 sm:space-x-6 lg:space-x-8 pb-4">
                {trendingCoin.map((coin: any) => (
                  <SingleCard card={coin} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleCard({ card }: { card: any }) {
  const coin = { ...card.item };
  return (
    <div className="sm:w-[14em] w-full px-1 py-1">
      <div className="w-full grid gap-2 rounded-md px-4 py-4 outline outline-1 outline-gray-300 cursor-pointer hover:shadow-lg">
        <div className="flex gap-2 items-center">
          <img src={coin.small} className="rounded-full w-10" alt="" />
          <span className="text-lg text-blue_gray-500 font-semibold">
            {coin.symbol}
          </span>
          <span
            className={
              coin.data.price_change_percentage_24h.usd < 0
                ? "bg-red-400_19 px-2 py-0.5 text-red-500 rounded-md"
                : "bg-teal-500_0f px-2 py-0.5 text-green-500 rounded-md"
            }
          >
            {coin.data.price_change_percentage_24h.usd < 0 && "-"}
            {Math.abs(coin.data.price_change_percentage_24h.usd).toFixed(2)}%
          </span>
        </div>
        <div className="text-xl font-semibold">
          {coin.data.price.split("<")[0]}
        </div>
        <div className="flex justify-center items-center">
          <img src={coin.data.sparkline} alt="image" />
        </div>
      </div>
    </div>
  );
}
