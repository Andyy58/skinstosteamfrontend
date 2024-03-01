import { useSelector } from "react-redux";
import { selectAllItems } from "./ItemsSlice";
import { Card, Typography } from "@material-tailwind/react";

const ItemList = () => {
  const items = useSelector(selectAllItems);
  const TABLE_HEAD = [
    "Name",
    "Steam Price",
    "Steam Volume",
    "Skinport Price",
    "Skinport Volume",
    "Profit",
  ];

  const TABLE_ROWS = items.map((item) => {
    return {
      item: item.name,
      steamPrice: item.steamPrice,
      steamVolume: item.steamSold,
      skinportPrice: item.skinportPrice,
      skinportVolume: item.skinportVolume,
      profit: item.profitWFee,
    };
  });

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            (
              {
                item,
                steamPrice,
                steamVolume,
                skinportPrice,
                skinportVolume,
                profit,
              },
              index
            ) => (
              <tr key={item} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {steamPrice}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {steamVolume}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {skinportPrice}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {skinportVolume}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {profit}
                  </Typography>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default ItemList;
