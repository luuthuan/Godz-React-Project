import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";

const ShopDetailPage = () => {
  const { productId } = useParams();

  const { data } = useSWR(
    `https://65e08910d3db23f7624987f0.mockapi.io/api/v1/products?productID=${productId}`,
    fetcher
  );

  if (!data) return null;
  const dataItem = data[0];
  const { image, name, price, saledPrice } = dataItem;

  return (
    <div className="py-10">
      <div className="grid grid-cols-8 gap-10 container-page  h-[1000px] px-4 py-6">
        <div className="col-span-5 grid grid-rows-4 gap-10  overflow-hidden border p-4  border-white rounded-3xl">
          <div className="row-span-3  flex justify-center pt-6 items-center  ">
            <img
              src={image[0].imageUrl}
              className="h-[700px] object-cover rounded-lg p-5 justify-self-center "
              alt=""
            />
          </div>
          {/* Swiper */}
          <div className="row-span-1  overflow-hidden">
            <div className="product-detail flex items-center">
              <Swiper
                grabCursor={"true"}
                spaceBetween={10}
                slidesPerView={"auto"}
              >
                {image.length > 0 &&
                  image.map((imageItem) => (
                    <SwiperSlide key={imageItem.id}>
                      <img
                        src={imageItem.imageUrl}
                        alt=""
                        className=" w-full h-[200px] object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="col-span-3  p-10">
          {/* header */}
          <div className="mb-12">
            <p className="text-sm uppercase mb-2">Godz.Tee</p>
            <h1 className=" text-3xl text-white capitalize mb-2">{name}</h1>
            <div className="flex justify-start items-end mb-2">
              <span className=" text-2xl text-white pr-2">{price}.000₫</span>
              <span className=" text-sm block line-through text-white ">
                {saledPrice}.000₫
              </span>
            </div>
          </div>
          {/* body */}
          <div className="mb-12">
            {/* colors */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <div>Màu sắc</div>
              </div>
              <div className="flex justify-start items-center gap-x-3">
                <span className="w-20 text-center py-1 px-2 border border-white rounded-md capitalize">
                  black
                </span>
                <span className="w-20 text-center py-1 px-2 border border-white rounded-md capitalize">
                  white
                </span>
              </div>
            </div>
            {/* size */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <div>Size</div>
                <div>Bảng size</div>
              </div>
              <div className="flex justify-start items-center gap-x-3">
                <span className="w-20 text-center py-1 px-2 border border-white rounded-md capitalize">
                  XS
                </span>
                <span className="w-20 text-center py-1 px-2 border border-white rounded-md capitalize">
                  S
                </span>
                <span className="w-20 text-center py-1 px-2 border border-white rounded-md capitalize">
                  M
                </span>
                <span className="w-20 text-center py-1 px-2 border border-white rounded-md capitalize">
                  L
                </span>
              </div>
            </div>
            {/* count */}
            <div className="flex justify-between items-center mb-6">
              <div>Số lượng</div>
              <div className="flex justify-between items-center gap-x-1">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <input className="w-12 px-2 py-1 mx-4 rounded-md" />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* voucher */}
            <div className="flex justify-between items-center bg-slate-600 h-12 px-2 py-4 rounded-lg capitalize">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                  />
                </svg>
                <span>Voucher shop</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {/* footer */}
          <div className="mb-12">
            <div className="w-full border text-primary border-primary rounded-md text-center py-2 px-4 capitalize mb-4">
              thêm vào giỏ hàng
            </div>
            <div className="w-full  rounded-md text-center py-2 px-4 capitalize bg-primary ">
              mua ngay
            </div>
          </div>
          {/* Other */}
          <div>
            {/* Contact */}
            <div className="text-center mb-8">
              <p className="mb-3 capitalize">Mua hàng trực tiếp tại</p>
              <div className="flex items-center justify-center gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                >
                  <path
                    fill="#f9b621"
                    d="M74.007,18.001c0.204,0,0.403,0.056,0.576,0.163l16.427,10.109c0.61,0.375,0.989,1.054,0.989,1.77	v29.085c0,0.724-0.367,1.384-0.982,1.766L51.055,85.699C50.738,85.896,50.373,86,50,86s-0.738-0.104-1.055-0.301L8.982,60.895	C8.367,60.513,8,59.853,8,59.129V30.044c0-0.716,0.379-1.395,0.989-1.77l16.427-10.109c0.173-0.107,0.373-0.163,0.576-0.163	c0.205,0,0.406,0.057,0.58,0.165l15.354,9.53c2.426,1.506,5.218,2.302,8.073,2.302s5.647-0.796,8.073-2.302l15.354-9.53	C73.602,18.058,73.802,18.001,74.007,18.001"
                  ></path>
                  <path
                    fill="#f5905f"
                    d="M50,52L8.228,29.125C8.087,29.408,8,29.72,8,30.044v29.085c0,0.724,0.367,1.384,0.982,1.766	l39.963,24.805C49.262,85.896,49.627,86,50,86V52z"
                  ></path>
                  <path
                    fill="#ee4267"
                    d="M50,52l41.772-22.875C91.913,29.408,92,29.72,92,30.044v29.085c0,0.724-0.367,1.384-0.982,1.766	L51.055,85.699C50.738,85.896,50.373,86,50,86V52z"
                  ></path>
                  <path
                    fill="#ee5490"
                    d="M92,30.04v29.09c0,0.72-0.37,1.38-0.98,1.76L85,64.63v-31.8l6.77-3.71C91.91,29.41,92,29.72,92,30.04	z"
                  ></path>
                  <polygon
                    fill="#ef5684"
                    points="85,32.83 85,64.63 79,68.35 79,36.11"
                  ></polygon>
                  <polygon
                    fill="#ef517b"
                    points="79,36.11 79,68.35 73,72.08 73,39.4"
                  ></polygon>
                  <polygon
                    fill="#ef4a75"
                    points="73,39.4 73,72.08 67,75.8 67,42.69"
                  ></polygon>
                  <polygon
                    fill="#f2ac0f"
                    points="41,27.12 41,47.07 35,43.78 35,23.4"
                  ></polygon>
                  <path
                    fill="#f59173"
                    d="M47,29.7v20.66l-6-3.29V27.12l0.93,0.58C43.49,28.67,45.21,29.34,47,29.7z"
                  ></path>
                  <path
                    fill="#f27c7c"
                    d="M53,29.7v20.66L50,52l-3-1.64V29.7c0.98,0.2,1.99,0.3,3,0.3S52.02,29.9,53,29.7z"
                  ></path>
                  <path
                    fill="#f16e7c"
                    d="M59,27.12v19.95l-6,3.29V29.7c1.79-0.36,3.51-1.03,5.07-2L59,27.12z"
                  ></path>
                  <polygon
                    fill="#ef6388"
                    points="65,23.4 65,43.78 59,47.07 59,27.12"
                  ></polygon>
                  <path
                    fill="#ee5490"
                    d="M91.77,29.12L65,43.78V23.4l8.43-5.23C73.6,18.06,73.8,18,74.01,18c0.2,0,0.4,0.06,0.57,0.16	l16.43,10.11C91.34,28.48,91.61,28.78,91.77,29.12z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M50,87c-0.559,0-1.105-0.156-1.582-0.451L8.455,61.744C7.544,61.179,7,60.201,7,59.128V30.044	c0-1.062,0.562-2.066,1.465-2.622l16.427-10.109c0.665-0.409,1.542-0.408,2.207,0.002l15.355,9.532	c2.268,1.407,4.877,2.151,7.546,2.151s5.278-0.744,7.546-2.151l15.354-9.53c0.669-0.414,1.544-0.413,2.209-0.004l16.427,10.109	C92.438,27.978,93,28.982,93,30.044v29.084c0,1.072-0.544,2.05-1.455,2.616L51.582,86.549C51.105,86.844,50.559,87,50,87z M25.416,18.165l0.524,0.852L9.514,29.125C9.196,29.32,9,29.672,9,30.044v29.084c0,0.376,0.19,0.718,0.51,0.917L49.473,84.85	c0.316,0.196,0.738,0.197,1.055,0L90.49,60.045C90.81,59.847,91,59.504,91,59.128V30.044c0-0.372-0.196-0.724-0.514-0.919	L74.007,19.001c-0.02,0-0.038,0.005-0.055,0.016l-15.352,9.529c-2.584,1.604-5.559,2.452-8.601,2.452s-6.017-0.848-8.601-2.452	l-15.354-9.53L25.416,18.165z"
                  ></path>
                  <polygon
                    fill="#1f212b"
                    points="50,52.57 7.76,29.438 8.24,28.562 50,51.43 91.76,28.562 92.24,29.438"
                  ></polygon>
                  <rect
                    width="1"
                    height="35"
                    x="49.5"
                    y="52"
                    fill="#1f212b"
                  ></rect>
                  <path
                    fill="#1f212b"
                    d="M29.5,68.833c-0.091,0-0.182-0.024-0.264-0.075l-16.055-9.965C12.441,58.333,12,57.539,12,56.669	V35.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v21.169c0,0.522,0.265,0.999,0.709,1.274l16.055,9.965	c0.234,0.146,0.307,0.454,0.161,0.688C29.83,68.749,29.667,68.833,29.5,68.833z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M44.5,78.144c-0.091,0-0.182-0.024-0.264-0.075l-1-0.621c-0.234-0.146-0.307-0.454-0.161-0.688	c0.146-0.235,0.456-0.305,0.688-0.161l1,0.621c0.234,0.146,0.307,0.454,0.161,0.688C44.83,78.06,44.667,78.144,44.5,78.144z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M40.5,75.661c-0.091,0-0.182-0.024-0.264-0.075l-4-2.483c-0.234-0.146-0.307-0.454-0.161-0.688	c0.146-0.235,0.456-0.304,0.688-0.161l4,2.483c0.234,0.146,0.307,0.454,0.161,0.688C40.83,75.577,40.667,75.661,40.5,75.661z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M84.418,30c-0.09,0-0.181-0.024-0.262-0.074l-9.351-5.754c-0.489-0.3-1.093-0.298-1.577,0.003	l-5.465,3.392c-0.232,0.146-0.542,0.074-0.688-0.161c-0.146-0.234-0.073-0.543,0.161-0.688l5.465-3.392	c0.811-0.503,1.817-0.504,2.628-0.005l9.351,5.754c0.235,0.145,0.309,0.453,0.164,0.688C84.749,29.916,84.585,30,84.418,30z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M63.701,30c-0.167,0-0.33-0.084-0.425-0.236c-0.146-0.235-0.073-0.543,0.161-0.688l1.611-1	c0.233-0.144,0.542-0.074,0.688,0.161c0.146,0.235,0.073,0.543-0.161,0.688l-1.611,1C63.883,29.976,63.792,30,63.701,30z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path d="M39,44H9c-1.657,0-3-1.343-3-3v-7h36v7C42,42.657,40.657,44,39,44z"></path>
                  <path
                    fill="#fff"
                    d="M39,41H9c-1.105,0-2-0.895-2-2V7h34v32C41,40.105,40.105,41,39,41z"
                  ></path>
                  <path d="M39,42H9c-1.654,0-3-1.346-3-3V7c0-0.553,0.447-1,1-1h34c0.553,0,1,0.447,1,1v32C42,40.654,40.654,42,39,42z M8,8v31	c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1V8H8z"></path>
                  <path d="M29.298,12.101h-3.414c0,0-0.036,16.574-0.036,16.655c0,2.041-1.804,3.652-3.845,3.652c-2.046,0-3.702-1.656-3.702-3.702	c0-2.041,1.656-3.697,3.702-3.697c0.153,0,0.301,0.027,0.449,0.045v-3.571c-0.148-0.009-0.296-0.022-0.449-0.022	c-4.002,0-7.25,3.244-7.25,7.246s3.248,7.25,7.25,7.25s7.246-3.244,7.246-7.25c0-0.085,0-5.258,0-9.803	c1.14,1.732,3.1,2.88,5.33,2.88c0.197,0,0.39-0.013,0.588-0.031v-3.971C32.084,17.562,29.621,15.152,29.298,12.101z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                >
                  <path
                    fill="#e85654"
                    d="M83,27c0.57,0,1.02,0.47,1,1.04L81.83,78.3c-0.16,3.75-3.24,6.7-6.99,6.7H25.16	c-3.75,0-6.83-2.95-6.99-6.7L16,28.04C15.98,27.47,16.43,27,17,27h16c0-10.49,7.61-19,17-19s17,8.51,17,19H83z M38,27h24	c0-7.72-5.38-14-12-14S38,19.28,38,27z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M50.1,39.5c-4.93,0-8.5,2.73-8.5,6.5c0,3.75,3.31,5.23,8.75,7.22c5.51,2.02,11.75,4.3,11.75,11.55	c0,5.45-5.38,9.73-12.25,9.73c-6.06,0-11.05-3.71-12.28-4.71l1.69-2.5c0.05,0.05,4.89,4.21,10.59,4.21c5.1,0,9.25-3.02,9.25-6.73	c0-4.81-3.69-6.5-9.78-8.73C44.3,54.21,38.6,52.12,38.6,46c0-5.42,4.94-9.5,11.5-9.5c4.99,0,8.92,2.29,10.17,3.1	c0.23,0.15,0.3,0.45,0.15,0.68l-1.03,1.68c-0.15,0.23-0.45,0.31-0.69,0.16c-0.34-0.21-0.73-0.44-0.91-0.54	C56.24,40.74,53.38,39.5,50.1,39.5z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M74.84,86H25.16c-4.296,0-7.806-3.364-7.989-7.658l-2.17-50.259c-0.02-0.558,0.179-1.079,0.561-1.473	C15.941,26.217,16.452,26,17,26h15.022C32.493,15.435,40.376,7,50,7s17.507,8.435,17.978,19H83c0.548,0,1.059,0.217,1.438,0.61	c0.381,0.395,0.58,0.915,0.561,1.465l-2.17,50.268C82.646,82.636,79.136,86,74.84,86z M17,28l2.169,50.257	C19.307,81.478,21.938,84,25.16,84h49.68c3.222,0,5.854-2.522,5.991-5.743l2.17-50.26L83,28H67c-0.552,0-1-0.448-1-1	c0-9.925-7.178-18-16-18s-16,8.075-16,18c0,0.552-0.448,1-1,1H17z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M62,28H38c-0.552,0-1-0.448-1-1c0-8.271,5.832-15,13-15s13,6.729,13,15C63,27.552,62.552,28,62,28z M39.032,26h21.936C60.534,19.297,55.781,14,50,14S39.466,19.297,39.032,26z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M73.5,81h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5	S73.776,81,73.5,81z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M69.5,81h-6c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5	S69.776,81,69.5,81z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M49.85,75c-6.184,0-11.205-3.691-12.596-4.822l-0.355-0.289l2.284-3.378l0.429,0.424	C39.643,66.961,44.328,71,49.85,71c4.825,0,8.75-2.795,8.75-6.23c0-4.326-3.027-5.908-9.452-8.26C44.226,54.715,38.1,52.482,38.1,46	c0-5.701,5.159-10,12-10c4.995,0,8.966,2.224,10.442,3.181c0.223,0.145,0.376,0.365,0.433,0.62c0.059,0.261,0.01,0.528-0.136,0.752	l-1.022,1.668c-0.311,0.479-0.914,0.614-1.381,0.323c-0.331-0.204-0.711-0.429-0.888-0.527C56.16,41.266,53.341,40,50.1,40	c-4.636,0-8,2.523-8,6c0,3.422,3.182,4.833,8.422,6.75C56.193,54.83,62.6,57.179,62.6,64.77C62.6,70.506,57,75,49.85,75z M38.245,69.685C39.756,70.839,44.395,74,49.85,74c6.589,0,11.75-4.054,11.75-9.23c0-6.893-6.059-9.114-11.404-11.074	C44.53,51.623,41.1,50.074,41.1,46c0-4.056,3.785-7,9-7c3.461,0,6.453,1.341,7.928,2.141c0.188,0.104,0.587,0.339,0.935,0.554	l1.031-1.676C58.597,39.112,54.828,37,50.1,37c-6.271,0-11,3.869-11,9c0,5.782,5.521,7.795,10.391,9.57	c6.29,2.303,10.109,4.071,10.109,9.2c0,3.987-4.374,7.23-9.75,7.23c-4.901,0-9.119-2.922-10.481-3.979L38.245,69.685z"
                  ></path>
                  <path
                    fill="#1f212b"
                    d="M58.5,81H27.554c-2.954,0-5.368-2.312-5.495-5.263L20.8,46.521c-0.012-0.276,0.202-0.509,0.478-0.521	c0.287-0.008,0.509,0.202,0.521,0.478l1.259,29.215C23.163,78.108,25.137,80,27.554,80H58.5c0.276,0,0.5,0.224,0.5,0.5	S58.776,81,58.5,81z"
                  ></path>
                </svg>
              </div>
            </div>
            {/*  Rule */}
            <div className="flex items-center mb-4 justify-between bg-slate-500 w-full h-14 px-3 py-6 rounded-lg capitalize">
              {/* Bao hanh */}
              <div>
                <p className="text-sm font-bold">Chính sách bảo hành</p>
                <p className="text-slate-200 text-xs">
                  Miễn phí đổi trả trong vòng 7 ngày
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            {/* Ship */}
            <div className="flex items-center justify-between bg-slate-500 w-full h-14 px-3 py-6 rounded-lg capitalize">
              {/* Bao hanh */}
              <div>
                <p className="text-sm font-bold">Chính sách vận chuyển</p>
                <p className="text-slate-200 text-xs">
                  Miễn phí vận chuyển hóa đơn trên 500.000₫
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailPage;
