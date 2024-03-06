import { IMAGE1, INFO } from "../../../Constants";

export default function Events() {
  return (
    <>
      <div className="text-lg text-blue_gray-800_02 font-semibold flex gap-3 items-center">
        Key Events
        <img src={INFO} alt="" />
      </div>

      {/* Card component */}
      <div>
        <div className="scroll-snap-x-mandatory flex">
          {/* Your cards go here */}
          <div className="flex sm:w-full w-[65%] gap-px overflow-scroll">
            {/* Single card */}
            <SingleCard />
          </div>
        </div>
      </div>
    </>
  );
}

function SingleCard() {
  return (
    <div className="flex flex-row justify-start items-start gap-2 p-[17px] border-blue-50 border border-solid bg-blue-50 rounded-[12px]  sm:w-90%">
      <img src={IMAGE1} alt="image" width={42} />
      <div className="flex flex-col items-center justify-start w-[88%] mb-[21px] gap-2">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-start w-full">
            <p className="w-[95%] text-sm text-gray-900_04 font-semibold ">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim tincidunt.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <p className="!text-blue_gray-700_01 text-sm font-inter tracking-tight leading-5">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </p>
        </div>
      </div>
    </div>
  );
}
