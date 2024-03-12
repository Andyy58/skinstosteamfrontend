import { useState } from "react";

import ItemList from "../features/items/ItemList";
import SortOrderArrows from "./SortOrderArrows";

const Charts = () => {
  const [sortBy, setSortBy] = useState(1); // 1: liquidity, 2: amount, 3: amount spent
  const [reversed, setReversed] = useState(false); // List order

  const changeSortingOrder = (id) => {
    if (sortBy === id) {
      setReversed(!reversed);
    } else {
      setSortBy(id);
      setReversed(false);
    }
  };

  return (
    <section className="w-full h-fit pb-20 min-h-[1440px] background-gradient flex justify-center pt-24">
      <div className="w-[100em] h-fit min-h-[500px] flex flex-col justify-start items-center bg-[#dceafc78] rounded-3xl ">
        <div className="w-[98%] h-16 bg-[#D9D9D9] mt-6 mb-2 rounded-2xl grid grid-cols-[1fr_9em_14em_13em] shadow">
          <h3 className=" pl-8 text-[20pt] text-black flex items-center">
            Name
          </h3>
          <span
            className="flex-row flex items-center justify-between cursor-pointer relative"
            onClick={() => changeSortingOrder(1)}
          >
            <div className="w-[2px] h-full bg-[#535C67]"></div>
            <div className="flex items-center ml-2">
              <h3 className="text-[20pt] text-black text-center">Liquidity</h3>
              <SortOrderArrows
                direction={sortBy === 1 ? (reversed ? "up" : "down") : ""}
              />
            </div>

            <div className="w-[2px] h-full bg-[#535C67]"></div>
          </span>
          <span
            className="items-center flex justify-center cursor-pointer"
            onClick={() => changeSortingOrder(2)}
          >
            <h3 className="text-[20pt] text-black ml-2">Top-up Amount</h3>
            <SortOrderArrows
              direction={sortBy === 2 ? (reversed ? "up" : "down") : ""}
            />
          </span>
          <span className="flex-row flex items-center w-full">
            <div className="w-[2px] h-full bg-[#535C67]"></div>
            <div className="flex ml-3 items-center">
              <h3
                className="text-[20pt] text-black text-center cursor-pointer"
                onClick={() => changeSortingOrder(3)}
              >
                Amount Spent
              </h3>
              <SortOrderArrows
                direction={sortBy === 3 ? (reversed ? "up" : "down") : ""}
              />
            </div>
          </span>
        </div>
        <ItemList sortBy={sortBy} reversed={reversed} />
      </div>
    </section>
  );
};

export default Charts;
