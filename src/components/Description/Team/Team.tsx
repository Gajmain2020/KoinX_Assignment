import {  TEAM } from "../../../Constants";

export default function Team() {
  return (
    <>
      <div className="h-full px-6 py-6 grid gap-5 bg-white rounded-md">
        <div className="text-xl font-bold text-gray-900_07">Team</div>
        <div className="grid gap-2">
          <div className="text-lg font-bold text-gray-900_07">
            Initial Distribution
          </div>
          <div className="pr-4 text-[#3E424A]">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
            nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
            quam. Facilisis purus convallis quam augue.
          </div>

          <div className="grid gap-4">
            {TEAM.map((mem) => (
              <TeamCard
                image={mem.image}
                name={mem.name}
                message={mem.message}
                dest={mem.dest}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TeamCard({ image, message, name, dest }:{image:string, message:string, name:string, dest:string}) {
  return (
    <div className="flex sm:flex-wrap gap-6 text-blue_gray-500 bg-blue-50 px-6 py-3 rounded-md">
      <div className="flex gap-2 flex-col items-center justify-center sm:w-full">
        <img src={image} alt="" />
        <div className="text-sm flex justify-center items-center flex-col">
          <span className="font-bold">{name}</span>
          <span className="text-xs truncate text-blue_gray-400">{dest}</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">{message}</div>
    </div>
  );
}
