import React from "react";

const BannerItem = ({ item }) => {
  var categoryNames;
  var categoryId = 1;
  const { image, name, categories } = item;
  categories.map((newItem) => {
    categoryNames = newItem.categoryName;
  });
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={image}
        alt=""
        className="w-full h-full  rounded-lg object-cover"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-4xl mb-5 uppercase">{name}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          {categoryNames.map((categoryName) => (
            <span className="py-2 px-4 border border-white rounded-md uppercase" key={categoryId++}>
              {categoryName}
            </span>
          ))}
          <span className="py-2 px-4 border border-white rounded-md uppercase">
            Sales
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg uppercase bg-primary text-white font-medium">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
