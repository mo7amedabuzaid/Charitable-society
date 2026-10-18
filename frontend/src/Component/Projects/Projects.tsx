import { useNavigate } from "react-router-dom";
import { useGetProjectsQuery } from "../Redux/ProjectData";
import { useState } from "react";

export default function Projects() {
  const { data, error, isLoading } = useGetProjectsQuery();
  console.log(data);

  const navigate = useNavigate();
  const [searchWord, setsearchWord] = useState("");
  const [select, setselect] = useState("all");
  const filterProject = data?.data?.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.subTitle.toLowerCase().includes(searchWord.toLowerCase());
    const matchFilter = select === "all" || item.cat === select;
    return matchFilter && matchSearch;
  });

  return (
    <>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-25 pt-12 xl:px-16 bg-[#F5FBF5]  md:px-25"
        dir="rtl"
      >
        <div className="flex flex-col md:flex-row md:justify-between items-center ">
          <div className="">
            <h1 className="font-extrabold   text-3xl md:text-4xl">
              المشاريع الحاليه
            </h1>
            <p className="text-gray-500 text-[14px] sm:text-[19px] mt-2">
              تصفح مبادراتنا المستمرة وشارك في إحداث تأثير إيجابي. اختر القضية
              التي تهمك وادعمها اليوم.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-[500px] ">
            <input
              onChange={(e) => setsearchWord(e.target.value)}
              className=" w-full   py-2 rounded-full px-4 border-gray-200 outline-0 border-2 focus:border-primary transition-all duration-1000 "
              type="search"
              placeholder="ابحث عن مشروع"
            />
            <select
              value={select}
              onChange={(e) => setselect(e.target.value)}
              className=" w-full md:w-1/3  py-2 px-4 border-2 border-gray-200 focus:border-primary rounded-full outline-0"
            >
              <option value="all">جميع الفئات</option>
              <option value="health">الصحه</option>
              <option value="education">التعليم</option>
              <option value="environment">البيئه</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10  md:grid-cols-2  lg:grid-cols-3 gap-6  ">
          {/*card 1*/}
          {filterProject?.length ? (
            filterProject?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="w-full  flex flex-col h-full  bg-[#fff] rounded-xl "
                >
                  <div className="relative h-56 w-full ">
                    <img
                      className="w-full rounded-t-xl h-full object-cover"
                      src={`http://localhost:1337${item?.img?.url}`}
                    />
                    <span className="absolute top-4 right-4 backdrop-blur-sm text-red-400 font-bold shadow-sm  bg-red-100 rounded-full text-sm py-1.5 px-3">
                      {item?.state}
                    </span>
                  </div>
                  <div className="px-4 pb-5 flex flex-col grow  ">
                    <div className="grow">
                      <h3 className="text-2xl m-2 line-clamp-1">
                        {item?.title}
                      </h3>
                      <p className="text-[17px] leading-8 line-clamp-2">
                        {item?.subTitle}
                      </p>
                    </div>
                    <div className="flex items-center  justify-between">
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
            })
          ) : (
            <div className="col-span-full text-center font-bold py-10 text-gray-700 text-2xl">
              لاتوجد مشاريع متطابقه
            </div>
          )}
        </div>
        {/* <div className=" flex items-center border-gray-200  rounded-full border-[2px] px-5 py-2  hover:bg-mist-400 transition-all duration-300   w-fit mx-auto my-5 ">
          <button className="space-x-1 hover:cursor-pointer ">
            <span className="text-gray-700 ">عرض الكل المزيد من المشاريع</span>
            <i className="fa-solid fa-arrow-down-long text-[15px] text-gray-700 "></i>
          </button>
        </div> */}
      </div>
    </>                                                
                     
  );
}
