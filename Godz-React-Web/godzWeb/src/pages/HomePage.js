import React, { Fragment } from "react";
import SellerList from "../components/seller/SellerList";
import BannerList from "../components/banner/BannerList";

const HomePage = ({ url }) => {
  return (
    <Fragment>
      {/* 1. banners */}
      <BannerList url={url} endPoint={"banners"}></BannerList>
      {/* 2. best seller list*/}
      <section className="best-seller-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Best seller
        </h2>
        <SellerList
          url={url}
          endPoint={"products_v1?isBestSeller=true"}
        ></SellerList>
      </section>
      {/* 3. product type */}
      <section className="best-seller-layout page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Product
        </h2>
        <div className="best-seller-list grid grid-cols-2 gap-8">
          <div className="best-seller-card rounded-lg bg-white text-white relative ">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)] rounded-lg"></div>
            <img
              src="https://file.hstatic.net/200000503583/file/coolmate_94eaf80adc6d464382cae02b86c8e232.jpg"
              alt=""
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute text-white w-full left-5 bottom-5">
              <h2 className="font-bold mb-10 ml-10 text-8xl uppercase">
                T-Shirt
              </h2>
              <button className="py-4 px-20 rounded-3xl  uppercase bg-primary text-white font-bold mb-12 ml-8">
                Shop Now
              </button>
            </div>
          </div>

          <div className="best-seller-card rounded-lg bg-white text-white relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)] rounded-lg"></div>
            <img
              src="https://file.hstatic.net/200000503583/file/coolmate_94eaf80adc6d464382cae02b86c8e232.jpg"
              alt=""
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute text-white w-full left-5 bottom-5">
              <h2 className="font-bold mb-10 ml-10 text-8xl uppercase">
                Pants
              </h2>
              <button className="py-4 px-20 rounded-3xl  uppercase bg-primary text-white font-bold mb-12 ml-8">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
