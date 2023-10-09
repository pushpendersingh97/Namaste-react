import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaruantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API}${resId}`
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />
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
