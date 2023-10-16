import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaruantMenu from "../utils/useRestaruantMenu";

const RestaruantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaruantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </h2>
      <ul>
        {itemCards.map((item) => {
          return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaruantMenu;
