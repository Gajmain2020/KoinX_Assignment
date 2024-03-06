import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LOGO, LOSS, PROFIT } from "../../Constants";
import Divider from "../Divider";
import TradingViewWidget from "../Chart";

export default function MainDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (id !== "") {
      fetchDetails(id)
        .then((res) => {
          setData(res);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  async function fetchDetails(id: string | undefined) {
    try {
      if (!id) {
        //fallback if nothing is written
        navigate("/");
        return;
      }

      const response = await axios({
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/${id}`,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  if (!data) {
    return (
      <div className="h-1/2 flex  flex-col gap-2 justify-center items-center w-full animate-pulse ">
        <div className="animate-bounce flex flex-col gap-4 items-center justify-center">
          <img src={LOGO} alt="Logo" width={200} />
          <span className="text-lg font-semibold">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {/* Name component */}
        <div className="flex items-center text-lg font-semibold gap-2">
          <img src={data.image.small} width={36} alt={data.name} />
          <span className="text-xl">{data.name}</span>
          <span className="text-blue_gray-600">
            {data.symbol.toUpperCase()}
          </span>
          <div className="bg-blue_gray-400 text-white rounded-md px-4 py-2 ml-10">
            Rank #{data.market_cap_rank}
          </div>
        </div>

        <div>
          <div className=" flex gap-8 items-center">
            <span className="font-semibold text-2xl">
              ${data.market_data.current_price.usd.toLocaleString()}
            </span>
            <div className="flex items-center gap-3 text-gray_blue-">
              <div
                className={
                  data.market_data.price_change_percentage_24h < 0
                    ? "loss pnl-desc"
                    : "profit pnl-desc"
                }
              >
                {data.market_data.price_change_percentage_24h < 0 ? (
                  <img src={LOSS} alt="Loss" />
                ) : (
                  <img src={PROFIT} alt="Profit" />
                )}
                {Math.abs(data.market_data.price_change_percentage_24h).toFixed(
                  2
                )}
                %
              </div>
              <span className="text-blue_gray-400">(24H)</span>
            </div>
          </div>
          <div className="my-1">
            ₹ {(data.market_data.current_price.usd * 80).toLocaleString()}
          </div>
        </div>
      </div>
      <Divider />
      <div className="h-4/5">
        <TradingViewWidget />
      </div>
    </>
  );
}
