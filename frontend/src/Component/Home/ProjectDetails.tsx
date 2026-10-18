import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetProjectsQuery } from "../Redux/ProjectData";
export default function ProjectDetails() {
  let navigate = useNavigate();
  const { data, error, isLoading } = useGetProjectsQuery();
  console.log(data?.data);

  return (
    <>
      <div dir="rtl" className="container mx-auto  py-20 ">
        <div className="px-4 md:px-10 lg:px-20">
          <h1 className="text-black font-bold md:text-4xl mb-4 ">
            مشاريع مميزة
          </h1>
          <div className="flex items-center justify-between mb-3 ">
            <p className=" text-sm text-gray-700">
              ساهم في تحقيق أهدافنا العاجلة
            </p>
            <div className="flex items-center justify-center ">
              <button
                onClick={() => navigate("/projects")}
                className="text-sm text-primary font-bold hover:text-primary-light hover:cursor-pointer"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left-long text-[12px] "></i>
              </button>
            </div>
          </div>

          {/* 3 card */}
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-6  ">
            {/*card 1*/}
            {data?.data?.slice(0, 3).map((item) => {
              return (
                <div
                  key={item?.id}
                  className="w-full flex flex-col h-full   bg-[#fff] rounded-xl "
                >
                  <div className="relative h-56 w-full ">
                    <img
                      className="w-full  h-full  rounded-t-xl  object-cover"
                      src={`http://localhost:1337${item?.img?.url}`}
                      alt=""
                    />
                    <span className="absolute top-4 right-4 backdrop-blur-sm text-red-400 font-bold shadow-sm`  bg-red-100 rounded-full text-sm py-1.5 px-3">
                      {item?.state}
                    </span>
                  </div>
                  <div className="px-4 pb-5 flex flex-col grow">
                    <div className="grow">
                      <h3 className="text-2xl m-2 line-clamp-1">
                        {item?.title}
                      </h3>
                      <p className="text-[17px] leading-8 line-clamp-2">
                        {item?.subTitle}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>تم جمع %{item?.percentage}</span>
                      <span>المتبق:${item?.price}</span>
                    </div>
                    <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden ">
                      <div
                        style={{ width: `${item.percentage}%` }}
                        className="bg-[#007A5E] rounded-full h-full  "
                      ></div>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => navigate(`/donate/${item.documentId}`)}
                        className="bg-primary rounded-2xl py-2 w-full text-white hover:bg-primary-light hover:cursor-pointer"
                      >
                        تبرع االان
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
