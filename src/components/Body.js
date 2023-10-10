import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import useAllRestaurants from "../utils/useAllRestaurants.js";
import useOnline from "../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import MenuShimmer from "./MenuShimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(true);

  console.log("initialrender");

  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  /*async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.Swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }*/

  async function getRestaurants() {
    try {
      const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      // if response is not ok then throw new Error
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {

            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(checkData,"one")

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              console.log(checkData)
              return checkData;
            }
          }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);

        // update the state variable restaurants with Swiggy API data
        setAllRestaurants(resData);
        console.log(resData)
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }

  if (!allRestaurants) return null;

  //if (filteredRestaurants.length === 0) return <h1>No match found</h1>;

  if (filteredRestaurants.length === 0) return <Shimmer />;
  else {
    return (
      <>
        <div className="bg-slate-600 w-screen  "></div> 
        <Carousel />
        
        <div className="bg-black p-2 flex justify-between items-center">
          <div className="text-white text-lg font-bold ml-2">
           <i>Food delivery as fast as "RECONCILIATION ALGO"</i>
          </div>
         
          <div className="mt-1 flex justify-center mr-2">
            <input
              data-testId="search-input"
              className="m-1 bg-gray-300 p-2 rounded-md focus-within:purple border-slate-500 border"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              data-testId="search-btn"
              className="bg-slate-500 text-gray-300 rounded-md m-1 w-20"
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                if (data.length) {
                  setfilteredRestaurants(data);
                  setSearchResult(true);
                } else setSearchResult(false);
              }}
            >
              Search
            </button>
          </div>
          </div>
        
        {/* <iframe
          className="hidden"
          src="https://cors-anywhere.herokuapp.com/corsdemo"
        ></iframe> */}
        <div data-testId="res-list" className="bg-[#FBEEDB]  flex w-full flex-wrap justify-center">
          {searchResult ? (
            filteredRestaurants.map((restaurant) => {
              return (
               /* <Link to={"/restaurant/" + restaurant?.data?.id}>
                  <RestaurantCard
                    {...restaurant?.data}
                    key={restaurant?.data?.id}
                  /></Link>*/
                
                <Link to={"/restaurant/" + restaurant?.info?.id}key={restaurant.info.id}>
                   <RestaurantCard  restaurant={restaurant?.info}  /> 
                </Link>
                    
              );
            })
          ) : (
            <div className="w-full flex justify-center">
              <img
                className="w-[50%]"
                src="https://www.replaylistings.com/assets/images/result-not-found-1.png"
              />
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Body;
