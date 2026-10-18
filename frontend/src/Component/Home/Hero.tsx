import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  let navigate = useNavigate()
  return (
    <>
      <div className="relative h-[calc(100vh-80px)] ">
        <img
          className=" absolute w-full object-cover inset-0  h-full opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd7wG2aREu3JFN591qz-ld_HA4JAazo_XSygwWNUd3LJHleBDYTQNhhI8fDygtNUgntf6fn3iuiFk86TcjHtugKWshTH-KtyanGH6VmWWQrG2SocYVm1hrzfhEt31Hm3grC7hpK2R9bEO0DCoSJ0gyyRWhVzmxZ7BV_e7LGoVOjBvEDhF0KugUAVxuL8XSbDE8fQBQPqxOMWZThbxjKXt41yeKS42K8B6GD2cf5LvUBDRf0UOh91Il"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#006948]/40 via-white/20 to-white/60" />

        <div className="absolute flex items-center justify-center flex-col inset-1    ">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold w-full text-center text-primary mb-5">
            أحدث فرقاً اليوم
          </h1>
          <p className="text-gray-700 mb-10 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-3xl leading-7 ">
            نحن نعمل معاً لبناء مجتمعات أقوى وأكثر استدامة. تبرعك يمكن أن يغير
            حياة الكثيرين ويوفر لهم مستقبلاً أفضل.
          </p>

          <div  className=" flex flex-col gap-3  md:flex-row ">
            <button onClick={()=>navigate("/projects")} className="  w-full shadow-2xl bg-transparent hover:bg-primary  px-6 py-3 sm:w-auto rounded-full text-white hover:cursor-pointer  border-2 border-primary transition-all duration-300 ">
              اكتشف مشاريعنا
            </button>
            <button onClick={()=>navigate("/donate")} className=" w-full shadow-2xl  bg-primary px-6 py-3 rounded-full text-white  sm:w-auto hover:cursor-pointer hover:bg-primary-light  transition-all duration-300  space-x-2   ">
              <span>
                <i className="fa-solid fa-hand-holding-heart"></i>
              </span>
              <span>تبرع الان</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
