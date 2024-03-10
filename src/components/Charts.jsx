import { useState } from "react";
import ItemList from "../features/items/ItemList";
import { useGetItemsQuery } from "../features/items/ItemsSlice";

const Charts = () => {
  const [start, setStart] = useState(0);
  const limit = 10;

  let pageButtons;

  const { data, error, isLoading } = useGetItemsQuery({ start, limit });
  let pageCount = 0;
  if (!isLoading) {
    const itemCount = data.itemCount;
    pageCount = Math.floor(itemCount / limit) + 1;
    const curPage = Math.floor(start / limit) + 1;

    const pageNumbers = () => {
      let pageNums = [1];

      if (curPage >= 5) {
        pageNums.push("...");
      }

      console.log(curPage < 4);

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

    pageButtons = pageNumbers().map((pageNum, index) => (
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
  }

  return (
    <section className="w-full h-fit pb-20 min-h-[1440px] background-gradient flex justify-center pt-24">
      <div className="w-[100em] h-fit min-h-[500px] flex flex-col justify-start items-center bg-[#dceafc78] rounded-3xl ">
        <div className="w-[98%] h-16 bg-[#D9D9D9] mt-6 mb-2 rounded-2xl grid grid-cols-[1fr_11em_10em_15em] shadow">
          <h3 className=" pl-8 text-[20pt] text-black flex items-center">
            Name
          </h3>
          <span className="flex-row flex items-center justify-between">
            <div className="w-[2px] h-full bg-[#535C67]"></div>
            <h3 className="text-[20pt] text-black text-center">Liquidity ⓘ</h3>
            <div className="w-[2px] h-full bg-[#535C67]"></div>
          </span>
          <span className="items-center flex justify-center">
            <h3 className="text-[20pt] text-black ">% Profit ⓘ</h3>
          </span>
          <span className="flex-row flex items-center w-full">
            <div className="w-[2px] h-full bg-[#535C67]"></div>
            <h3 className="text-[20pt] text-black mx-auto text-center">
              Amount Profit ⓘ
            </h3>
          </span>
        </div>
        <ItemList start={start} limit={limit} />
        <div className="h-10 w-full flex justify-between">
          <div className=""></div>
          <div className="flex">
            <button
              className="pr-2"
              onClick={() => setStart(start - limit >= 0 ? start - limit : 0)}
            >
              Prev
            </button>
            {pageButtons}
            <button
              className="pr-10"
              onClick={() =>
                setStart(start + limit <= itemCount ? start + limit : 0)
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
