import React, { useContext } from "react";
import GlobalApi from "../services/GlobalApi";
import { UserLocationContext } from "../context/UserLocationContext";
import { BusinessListContext } from "../context/BusinessListContext";

function SearchBar() {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { businessList, setBusinessList } = useContext(BusinessListContext);

  const searchPlace = (searchText) => {
    GlobalApi.searchPlace(searchText, userLocation.lat, userLocation.lng).then(
      (resp) => setBusinessList(resp.data.candidates)
    );
  };
  return (
    <div className="flex gap-3 bg-teal-100 p-3 rounded-xl items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-teal-600"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none w-full text-[17px] placeholder-teal-600"
        onKeyDown={(e) => e.key == "Enter" && searchPlace(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
