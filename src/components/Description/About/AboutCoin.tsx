import { ARROW, CARD_IMAGE1, CARD_IMAGE2 } from "../../../Constants";
import Divider from "../../Divider";

export default function AboutCoin() {
  return (
    <>
      <div className="h-full px-6 py-6 grid gap-5 bg-white rounded-md">
        <div className="text-xl font-bold text-gray-900_07">About Bitcoin</div>
        <div className="grid gap-2">
          <div className="text-lg font-bold text-gray-900_07">
            What is Bitcoin?
          </div>
          <div className="pr-4 text-[#3E424A]">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </div>
        </div>
        <Divider />
        <div className="grid gap-2">
          <div className="text-lg font-bold text-gray-900_07">
            Lorem ipsum dolor sit amet
          </div>
          <div className="pr-4 text-[#3E424A] grid gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
            </p>
            <p>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </p>
            <p>
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </div>
        </div>
        <hr />
        <div className="text-xl font-bold text-gray-900_07">
          Already Holding Bitcoin?
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 justify-center items-center">
          <div className="flex gap-8 font-semibold rounded-md text-gray-50 flex-1 bg-gradient1 px-2 py-2">
            <img src={CARD_IMAGE1} alt="" />
            <div className="grid ">
              <div className="text-xl">
                Calculate your
                <br />
                Profit
              </div>
              <div>
                <button className="bg-white flex items-center truncate justify-center gap-2 px-5 py-2 rounded-md text-gray-950">
                  Check Now <img src={ARROW} className="sm:w-5" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8 font-semibold rounded-md  text-gray-50 flex-1 bg-gradient2 px-2 py-2">
            <img src={CARD_IMAGE2} alt="" />
            <div className="grid">
              <div className="text-xl sm:text-medium">
                Calculate your tax
                <br />
                liability
              </div>
              <div>
                <button className="bg-white flex items-center justify-center truncate gap-2 px-5 py-2 rounded-md text-gray-950">
                  Check Now <img src={ARROW} className="sm:w-5" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="pr-4 text-[#3E424A]">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </div>
      </div>
    </>
  );
}
