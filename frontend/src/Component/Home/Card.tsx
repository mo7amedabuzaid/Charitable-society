import React from "react";
export default function Card() {
  return (
    <>
      <div className=" flex flex-col gap-3 md:flex-row justify-between items-center px-4 md:px-10  pt-15 ">
        {/* card 1 */}

        <div className=" w-full flex flex-col  hover:translate-y-0.5 hover:shadow-md transition-all duration-300  md:w-1/3 items-center justify-center gap-1 rounded-2xl   border-2 p-5 border-[#DDE7DF] bg-[#FFFFFF]">
          <div className=" text-[#007A5A]  text-2xl sm:text-2xl">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="text-[#007A5A] font-bold text-3xl sm:text-5xl ">
            100%
          </div>
          <p className="text-[#374151]"> شفافية مالية</p>
        </div>
        {/* card 2 */}
        <div className=" w-full flex flex-col hover:translate-y-0.5 hover:shadow-md  transition-all duration-300  md:w-1/3 items-center justify-center gap-1 rounded-2xl   border-2 p-5 border-[#DDE7DF] bg-[#FFFFFF]">
          <div className=" text-[#007A5A]  text-2xl sm:text-2xl">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="text-[#007A5A] font-bold text-3xl sm:text-5xl ">
            +50
          </div>
          <p className="text-[#374151]">مشروع نشط</p>
        </div>
        {/* card 3 */}
        <div className=" w-full flex flex-col   hover:translate-y-0.5 hover:shadow-md  transition-all duration-300    md:w-1/3 items-center justify-center gap-1  rounded-2xl  border-2 p-5 border-[#DDE7DF] bg-[#FFFFFF]">
          <div className=" text-[#007A5A]  text-2xl sm:text-2xl">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="text-[#007A5A] font-bold text-3xl sm:text-5xl ">
            10K+
          </div>
          <p className="text-[#374151]">شخص تم مساعدتهم</p>
        </div>
      </div>
    
    </>
  );
}
