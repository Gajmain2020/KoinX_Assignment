import { NAVIGATION } from "../../Constants";

export default function Bitcoin() {
  return (
    <div className="grid gap-2 mt-2">
      <div className="flex gap-2 items-center">
        <span className="text-blue_gray-400">Cryptocurrencies</span>{" "}
        <img src={NAVIGATION} alt="Navigation Image" /> <span>Bitcoin</span>
      </div>
      <div className="outline bg-white rounded-md grid grid-cols-2 sm:grid-cols-1 ">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          sapiente libero error repellendus dicta nesciunt nobis numquam beatae
          eligendi saepe.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          sapiente libero error repellendus dicta nesciunt nobis numquam beatae
          eligendi saepe.
        </div>
      </div>
    </div>
  );
}
