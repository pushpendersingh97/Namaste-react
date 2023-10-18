import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaruantMenu from "../utils/useRestaruantMenu";
import { CDN_URL } from "../utils/constants";

const RestaruantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaruantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    cartOrderabilityNudgeBanner,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log(itemCards);

  return (
    <>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-wrap bg-gray-100">
        {/** Header Section */}
        <div className="max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl m-3 w-25">
          <img
            className="rounded-t-lg"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
            alt=""
          />

          <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
              {name}
            </h5>

            <p className="mb-3 font-normal text-gray-700">
              {cuisines.join(", ")}
            </p>
            <p className="text-gray-700 flex justify-between">
              <span
                className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10 ${
                  avgRating > 4
                    ? "text-green-600 bg-green-100"
                    : "text-red-400 bg-red-100"
                } `}
              >
                {avgRating}
              </span>
              <span>{costForTwoMessage}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-3/4">
          <p className="text-2xl my-3 font-medium">{title}</p>
          <ul>
            {itemCards.map((item) => {
              return (
                <li
                  key={item?.card?.info?.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md p-3 mb-3 w-full flex justify-between"
                >
                  <span className="font-medium">{item?.card?.info?.name}</span>
                  <span>Rs. {item?.card?.info?.price / 100}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaruantMenu;
