import React from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import BannerItem from "./BannerItem";

const BannerList = ({ endPoint, subEndPoint }) => {
  const { data } = useSWR(`${endPoint}${subEndPoint}`, fetcher);
  const banners = data || [];

  return (
    <section className="banner h-[560px] page-container mb-20 overflow-hidden select-none">
      <Swiper grabCursor="true" slidesPerView="auto">
        {banners.length > 0 &&
          banners.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default BannerList;
