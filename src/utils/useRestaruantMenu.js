import React, { useEffect, useState } from "react";
// import { MENU_API } from "./constants";

const useRestaruantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(`${MENU_API}${resId}`);
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=${resId}`
    );
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaruantMenu;
