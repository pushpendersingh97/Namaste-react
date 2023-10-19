import RestaurantCard, { withIsOpen } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

// import resList from "../utils/mockData";

const Body = () => {
  // State Variable = Super powerful variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardIsOpen = withIsOpen(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[2]?.card.card.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredResturant(
      json?.data?.cards[2]?.card.card.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(listOfRestaurants)

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h1>Please check the internet connection</h1>;

  // Conditional Rendering 😊
  return filteredResturant.length === 0 ? (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center">
        <Shimmer />
      </div>
    </main>
  ) : (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center">
        <div className="flex mb-4">
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">🔍</span>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="mt-2 ml-2 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
            onClick={() => {
              // Filter the resturant and update the UI
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredResturant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {filteredResturant.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {
                restaurant.info.isOpen ? <RestaurantCardIsOpen resData={restaurant} /> : <RestaurantCard resData={restaurant} />
              }
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;
