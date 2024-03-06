import React from "react";
import { useNavigate } from "react-router-dom";

const SellerCard = ({ item }) => {
  const { name, image, price, saledPrice, stats, productID } = item;
  const navigate = useNavigate();
  console.log(image);
  return (
    <div className="best-seller-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
      <img
        src={image[0].imageUrl}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3 uppercase">{name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="mr-3 text-lg font-bold">{saledPrice}.000đ</span>
            <span className="text-sm opacity-40 line-through">
              {price}.000đ
            </span>
          </div>
          <span className="text-sm font-medium text-red-600">
            - {Math.round(((price - saledPrice) / price) * 100)}%
          </span>
        </div>
        <div className="flex items-end mb-10">
          <span
            className={
              stats ? "text-green-500 font-bold" : "text-red-600 font-bold"
            }
          >
            {stats ? "In Stock" : "Sold Out"}
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
