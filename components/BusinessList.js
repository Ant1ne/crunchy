import React, { useState, useEffect, useContext } from "react";
import BusinessItem from "./BusinessItem";
import ShimmerEffectItem from "./ShimmerEffectItem";
import { SelectedBusinessContext } from "../context/SelectedBusinessContext";

function BusinessList({ businessListData }) {
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);

  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );
  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setLoader(true);
    setCount(0);
  }, [businessListData]);

  return (
    <div>
      <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
        Top Nearby Places
        <span className="flex">
          {count > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => setCount(count - 3)}
              className="w-10 h-10 p-2 text-gray-400 dark:text-white hover:text-black hover:bg-white cursor-pointer rounded-lg"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          ) : null}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => setCount(count + 3)}
            className="w-10 h-10 p-2 text-gray-400 dark:text-white hover:text-black hover:bg-white cursor-pointer rounded-lg"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </h2>
      {/* Business Item */}
      {!loader ? (
        <div>
          {businessListData.map(
            (business, index) =>
              index >= count &&
              index < count + 3 && (
                <div
                  key={index}
                  className={`cursor-pointer rounded-2xl
          ${selectedBusiness.name == business.name ? "bg-teal-50" : null}`}
                  onClick={() => setSelectedBusiness(business)}
                >
                  <BusinessItem business={business} />
                </div>
              )
          )}
        </div>
      ) : null}
      {loader
        ? [1, 2, 3].map((item, index) => <ShimmerEffectItem key={index} />)
        : null}
    </div>
  );
}

export default BusinessList;
