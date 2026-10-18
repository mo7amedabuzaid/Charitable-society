import React from "react";

export default function Main() {
  return (
    <>
      <div dir="rtl" className="bg-[#EFF5EF] px-6 py-15 flex items-center justify-center text-center flex-col ">
        <div className=" w-full max-w-4xl relative ">
          <div className="text-right">
            <i className="fa-solid fa-quote-right text-[40px]  md:text-[50px] text-[#C5DED5]"></i>
          </div>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[32px] leading-[1.6] text-center md:text-3xl">
            "بفضل دعمكم، تمكنت قريتنا أخيراً من الحصول على مياه شرب نظيفة. لقد
            تغيرت حياتنا وأصبح أطفالنا بصحة أفضل. شكراً لكل من ساهم في هذا
            التغيير الإيجابي."
          </p>
        </div>
        <div className="flex items-center justify-center mt-5  gap-2">
          <img
            className="w-[50px] h-[50px] rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl21dshUwlBDcuooW46xIw6A4GMsv0U_lc0alRmxclFpfy4cInJ1_WwPaABjRcgefgsnyAh64aSqmHW8HD0Los9byChjFufH_mHFsAMjYsO-fuSQDf1xFUq7ojWUw0qgOFNelyBLdUNQyqhT4cv4rOBlCQy6TXhWeBm57CdM-jUz6qwJwRWC6Zey3nPLfs140_R03GVyxHhD8mMp9YAXLHN8-5UMzt--aDxmvdeX1jI-m2jsmGMD-b"
            alt=""
          />
          <div>
            <p className="font-semibold text-[20px]">فاطمة أحمد</p>
            <p className="text-gray-600">مستفيدة من مبادرة المياه</p>
          </div>
        </div>
      </div>
    </>
  );
}
