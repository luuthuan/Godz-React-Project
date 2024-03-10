import React from "react";
import { useNavigate } from "react-router-dom";

const SellerCard = ({ item }) => {
  const { nameProduct, image, costs , amount , productID } = item;
  const navigate = useNavigate();
  return (
    <div className="best-seller-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
      <img
        src={image}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3 uppercase">{nameProduct}</h3>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="mr-3 text-lg font-bold">{costs[0].saledCost}.000đ</span>
            <span className="text-sm opacity-40 line-through">
              {costs[0].cost}.000đ
            </span>
          </div>
          <span className="text-sm font-medium text-red-600">
            - {Math.round(((costs[0].cost - costs[0].saledCost) / costs[0].cost) * 100)}%
          </span>
        </div>
        <div className="flex items-end mb-10">
          <span
            className={
              (!amount <= 0 || amount != null) ? "text-green-500 font-bold" : "text-red-600 font-bold"
            }
          >
            {(!amount <= 0 || amount != null) ? "In Stock" : "Sold Out"}
          </span>
        </div>
        <button
          onClick={() => navigate(`/shop/${productID}`)}
          className="px-6 py-3 rounded-lg font-bold uppercase bg-primary w-full mt-auto"
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default SellerCard;
