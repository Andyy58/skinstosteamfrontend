import { useGetItemsQuery } from "./ItemsSlice";

const ItemList = ({ start, limit }) => {
  const { data, error, isLoading } = useGetItemsQuery({ start, limit });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured: {error.toString()}</div>;

  const items = Object.values(data.entities);
  return items.map((item) => (
    <div
      key={item.id}
      className="w-[98%] h-32 bg-[#B4BAC6A6] mt-2 rounded-2xl grid grid-cols-[1fr_11em_10em_15em] shadow"
    >
      <span className="flex-row flex items-center">
        <img
          src={`https://community.akamai.steamstatic.com/economy/image/${item.iconUrl}`}
          alt={item.name}
          className="w-24 ml-5"
        />
        <h3 className=" pl-8 text-[20pt] text-black">{item.name}</h3>
      </span>
      <span className="flex-row flex items-center justify-between">
        <div className="w-[2px] h-full bg-[#535C67]"></div>
        <h3 className="text-[20pt] text-black text-center">Low</h3>
        <div className="w-[2px] h-full bg-[#535C67]"></div>
      </span>
      <span className="items-center flex justify-center">
        <h3 className="text-[20pt] text-black">
          {((item.profitWFee / item.skinportPrice) * 100).toFixed(2)}%
        </h3>
      </span>
      <span className="flex-row flex items-center">
        <div className="w-[2px] h-full bg-[#535C67]"></div>
        <h3 className="text-[20pt] text-black mx-auto text-center">
          USD ${item.profitWFee}
        </h3>
      </span>
    </div>
  ));
};

export default ItemList;
