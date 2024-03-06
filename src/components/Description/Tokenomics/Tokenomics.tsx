import React from "react";
import { PIE_CHART } from "../../../Constants";

export default function Tokenomics() {
  return (
    <>
      <div className="h-full sm:hidden px-6 py-6 grid gap-5 bg-white rounded-md">
        <div className="text-xl font-bold text-gray-900_07">Tokenomics</div>
        <div className="grid gap-2">
          <div className="text-lg font-bold text-gray-900_07">
            Initial Distribution
          </div>
          <div>
            <img src={PIE_CHART} className="w-full" alt="" />
          </div>
          <div className="pr-4 text-[#3E424A]">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </div>
        </div>
      </div>
    </>
  );
}
