import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2C322E] bottom-0 left-0 right-0   ">
        <div className="text-[#68DBA9] text-center pt-5 text-2xl md:text-3xl">
          Lumina Impact
        </div>
        <div className="flex flex-wrap justify-center gap-x-8  mt-4">
          <a
            className="text-[#EFF5EF] hover:text-[#68DBA9] text-[12px]  md:text-[15px]"
            href="#"
          >
            Volunteer Portal
          </a>
          <a
            className="text-[#EFF5EF] hover:text-[#68DBA9] text-[12px]  md:text-[15px]"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-[#EFF5EF] hover:text-[#68DBA9] text-[12px]  md:text-[15px]"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center justify-center mt-3 text-[16px] md:text-[20px] text-[#EFF5EF]">
          Lumina Impact. All rights reserved @2026
        </div>
      </div>
    </>
  );
}
