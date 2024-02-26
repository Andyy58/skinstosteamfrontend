import ItemList from "../features/items/ItemList";
import { useGetItemsQuery } from "../features/items/ItemsSlice";

const Home = () => {
  const { isLoading, isSuccess, isError, error } = useGetItemsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <ItemList />;
  } else if (isError) {
    content = <p>{error.stack}</p>;
    console.log(error);
  }

  return <section>{content}</section>;
};

export default Home;
