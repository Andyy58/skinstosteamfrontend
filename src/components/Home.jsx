import ItemList from "../features/items/ItemList";
import { useGetItemsQuery } from "../features/items/ItemsSlice";

const Home = () => {
  return (
    <section className="background-gradient h-[1440px] pt-64 flex justify-center">
      <div className="flex w-fit justify-between">
        <div className="w-fit relative">
          <div className="absolute w-[500px] h-[500px] paleviolet-layer-blur z-0 left-32 rounded-full top-[-52%]"></div>
          <h1 className="text-[72pt] font-bold text-right p-0 m-0 leading-tight pt-2 pr-24 blue-text-gradient relative z-10">
            <span className="nowrap text-transparent">Get More Steam</span>
            <br /> Funds For Your
            <br /> Money
          </h1>
          <p className="text-[20pt] text-right pt-4 pr-24 text-[#9dcdef] relative z-10">
            Top-up for <span className="font-semibold text-inherit">more </span>
            steam wallet funds with
            <span className="font-semibold text-inherit"> less</span> real life
            funds
          </p>

          <div className="flex flex-row pt-14 relative z-10">
            <button className="border-2 border-[#9dcdef] rounded-full py-7 px-11 text-[20pt] text-[#9dcdef] font-semibold mr-4 tracking-wider">
              How Does It Work?
            </button>
            <button className="bg-[#817eff] rounded-full px-11 text-[20pt] font-semibold mr-4 tracking-wider">
              Check Out The Charts →
            </button>
          </div>
        </div>

        <div className="w-[520px] h-[560px] relative">
          <div className="absolute w-[100%] h-[95%] top-[-5%] left-7 rounded-full lightblue-layer-blur z-0"></div>
          <img
            src="/Gaben stonks.png"
            className="w-full object-cover aspect-auto relative z-10"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
