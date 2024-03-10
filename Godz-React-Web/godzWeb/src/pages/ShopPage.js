import React from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import SellerCard from "../components/seller/SellerCard";

const ShopPage = ({ url, endPoint }) => {
  const { data } = useSWR(`${url}${endPoint}`, fetcher);
  const products = data || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 outline-none text-white"
            placeholder="Enter products..."
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {products.length > 0 &&
          products.map((product) => (
            <SellerCard key={product.id} item={product}></SellerCard>
          ))}
      </div>
    </div>
  );
};

export default ShopPage;
