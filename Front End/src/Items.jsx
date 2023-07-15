import SingleItem from "./SingleItem";
import { useFetchData } from "./queryFetchCustomHook";
const Items = () => {
  const { isLoading, data, error, isError } = useFetchData();
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading....</p>;
  }
  if (isError) {
    return (
      <p style={{ marginTop: "1rem" }}>
        {error.message}
        <br />
        {error.response.data}
      </p>
    );
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
