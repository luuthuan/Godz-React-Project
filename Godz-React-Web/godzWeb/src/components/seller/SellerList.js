import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SellerCard from "./SellerCard";
import useSWR from "swr";
import { fetcher } from "../../config";

const SellerList = ({ endPoint, subEndPoint }) => {
  const { data } = useSWR(`${endPoint}${subEndPoint}`, fetcher);
  const bestSeller = data || [];

  return (
    <div className="seller-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {bestSeller.length > 0 &&
          bestSeller.map((item) => (
            <SwiperSlide key={item.id}>
              <SellerCard item={item}></SellerCard>
            </SwiperSlide>
          ))}
        ;
      </Swiper>
    </div>
  );
};

export default SellerList;
