import React from "react";

const OptionCard = ({ data, title }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <div>{title}</div>
      </div>
      <div className="flex justify-start items-center gap-x-3">
        {data.length > 0 &&
          data.map((dataItem) => (
            <span
              key={dataItem.id}
              className={
                dataItem.stats
                  ? "w-20 text-center py-1 px-2 border text-white border-white rounded-md capitalize cursor-pointer"
                  : "w-20 text-center py-1 px-2 border opacity-85 text-gray-400 border-gray-400 rounded-md capitalize select-none"
              }
            >
              {dataItem.name}
            </span>
          ))}
      </div>
    </div>
  );
};

export default OptionCard;
