import { useGetItemsQuery } from "./ItemsSlice";
import { useState } from "react";
import fx, { convert } from "money";

const conversionRates = {
  base: "USD",
  rates: {
    CAD: 1.347663,
    EUR: 0.914477,
    JPY: 147.392821,
    GBP: 0.780288,
    AUD: 1.512088,
  },
  symbols: {
    USD: "$",
    CAD: "$",
    EUR: "€",
    JPY: "¥",
    GBP: "£",
    AUD: "$",
  },
};

fx.rates = conversionRates.rates;
fx.base = conversionRates.base;

const currencies = ["USD", "CAD", "EUR", "JPY", "GBP", "AUD"];
const limit = 10;

const ItemList = ({ sortBy, reversed }) => {
  const [start, setStart] = useState(0);
  const [currency, setCurrency] = useState(currencies[0]);

  const { data, error, isLoading } = useGetItemsQuery({
    start,
    limit,
    reversed,
    sortBy,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (error) return <div>An error occured: {error.toString()}</div>;
  else {
    const itemCount = data.itemCount;
    const pageCount = Math.floor(itemCount / limit) + 1;
    const curPage = Math.floor(start / limit) + 1;

    const pageNumbers = () => {
      let pageNums = [1];

      if (curPage >= 5) {
        pageNums.push("...");
      }

      if (curPage < 4) {
        pageNums = pageNums.concat([2, 3, 4, 5, 6]);
      } else if (curPage > pageCount - 3) {
        pageNums = pageNums.concat([
          pageCount - 5,
          pageCount - 4,
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
        ]);
      } else {
        pageNums = pageNums.concat([
          curPage - 2,
          curPage - 1,
          curPage,
          curPage + 1,
          curPage + 2,
        ]);
      }

      if (curPage <= pageCount - 4) {
        pageNums.push("...");
      }
      pageNums.push(pageCount);

      return pageNums;
    };

    const pageButtons = pageNumbers().map((pageNum, index) => (
      <button
        className={`mx-1 ${
          pageNum === curPage ? "text-[#B4B4B4] underline" : "text-white"
        }`}
        key={index}
        disabled={pageNum === "..." || pageNum === curPage}
        onClick={() => pageNum !== "..." && setStart((pageNum - 1) * limit)}
      >
        {pageNum}
      </button>
    ));

    const items = Object.values(data.entities);

    const list = items.map((item) => (
      <div
        key={item.id}
        className="w-[98%] h-32 bg-[#B4BAC6A6] mt-2 rounded-2xl grid grid-cols-[1fr_9em_14em_13em] shadow z-10"
      >
        <span className="flex-row flex items-center">
          <img
            src={`https://community.akamai.steamstatic.com/economy/image/${item.iconUrl}`}
            alt={item.name}
            className="w-24 ml-5"
          />
          <a
            href={`${item.market_page}`}
            target="_blank"
            className=" pl-8 text-[20pt] text-black"
          >
            {item.name}
          </a>
        </span>
        <span className="flex-row flex items-center justify-between">
          <div className="w-[2px] h-[98%] rounded-full bg-[#535C67]"></div>
          <h3 className="text-[20pt] text-black text-center">
            {item.liquidity === 0
              ? "low"
              : item.liquidity === 1
              ? "medium"
              : "high"}
          </h3>
          <div className="w-[2px] h-[98%] rounded-full bg-[#535C67]"></div>
        </span>
        <span className="items-center flex justify-center">
          <h3 className="text-[20pt] text-black">
            {`${conversionRates.symbols[currency]}${fx
              .convert(item.topupAmount, { from: "USD", to: currency })
              .toFixed(2)}`}
          </h3>
        </span>
        <span className="flex-row flex items-center">
          <div className="w-[2px] h-[98%] rounded-full bg-[#535C67]"></div>
          <h3 className="text-[20pt] text-black mx-auto text-center">
            {`${conversionRates.symbols[currency]}${fx
              .convert(item.skinportPrice, { from: "USD", to: currency })
              .toFixed(2)}`}
          </h3>
        </span>
      </div>
    ));

    return (
      <>
        {list}
        <div className="h-10 w-full flex justify-between items-center">
          <select
            className="ml-3 bg-transparent border-2 rounded-full h-fit"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencies.map((cur) => (
              <option className="bg-[#6d7689]" key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>

          <div className="flex">
            <button
              className="mr-2"
              onClick={() => setStart(start - limit >= 0 ? start - limit : 0)}
            >
              Prev
            </button>
            {pageButtons}
            <button
              className="mr-10"
              onClick={() =>
                setStart(
                  start + limit < itemCount
                    ? start + limit
                    : (pageCount - 1) * limit
                )
              }
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default ItemList;
