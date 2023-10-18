import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div class="max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl m-3">
      <a href="#">
        <img class="rounded-t-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      </a>
      <div class="p-4">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
            {name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">{cuisines.join(", ")}</p>
        <p className="text-gray-700 flex justify-between">
          <span
            className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10 ${
              avgRating > 4 ? "text-green-600 bg-green-100" : "text-red-400 bg-red-100"
            } `}
          >
            {avgRating}
          </span>
          <span>{costForTwo}</span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
