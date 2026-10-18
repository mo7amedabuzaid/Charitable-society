import React from "react";

export default function About() {
  return (
    <>
      <div
        dir="rtl"
        className="container mx-auto px-4 sm:px-6 lg:px-16   mt-20  bg-[#F5FBF5] p-10 "
      >
        <div className="flex flex-col gap-3 sm:flex-row items-center mb-12 justify-between ">
          <div className="flex-2 ">
            <h1 className="text-primary font-extrabold text-5xl mb-5">
              رسالتنا
            </h1>
            <p className="text-[15px] text-gray-700 max-w-3xl">
              نحن في Lumina Impact نسعى جاهدين لإحداث تغيير إيجابي ومستدام في
              المجتمعات المحتاجة. مهمتنا هي تمكين الأفراد، توفير الموارد
              الأساسية، وبناء مستقبل مشرق للجميع من خلال الشفافية، العمل الجاد،
              والتفاني في خدمة الإنسانية.
            </p>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD6C07Fsj64gV7WCfOIh_dZalC8nUI92j4el6PT7Uw-SG6nThyKjwe5Q15OhL-gTxQj4g5zjvb013MddgYmpG_-WQMo3zqviT59QvOQ3zOfuEijAHwHXVZYBmzTcP3zj9emT2Rn4dxTPf6LWQVpu05tyo7g7jHKIsZGs0y5nVOeeq55Fa52ANsoVMJ6ngIbnthwJ0fbeJvWB3QXRVKCH_fDEgfVf9pvpH89RLs9sa_J2pzdu_9unDO"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#EFF5EF]">
          <div className="text-center mt-20 py-20">
            <h1 className="text-primary text-3xl font-bold">تاريخنا</h1>
            <p className="text-gray-700">رحلتنا نحو إحداث تأثير حقيقي.</p>
          </div>

          <div className="relative">
            <div className=" absolute top-0 bottom-0 -translate-x-1/2   w-[3px] left-1/2 bg-[#DCE5DF]"></div>
            <div className="relative flex items-center  mb-12 justify-between">
              <div className="text-end w-[45%]">
                <span className="px-4 py-2 bg-[#D9F2E8] text-[#087F5B] rounded-full">
                  2018
                </span>
              </div>
              <div className="absolute bg-[#087F5B] w-5 h-5 rounded-full     border-4 border-white left-1/2 -translate-x-1/2 z-10"></div>
              <div className="w-[45%] ">
                <h3 className="font-bold  text-xl">التأسيس</h3>
                <p className="text-gray-700">
                  بدأنا برؤية بسيطة لمساعدة مجتمع محلي صغير.
                </p>
              </div>
            </div>

            <div className="relative flex items-center mb-12 justify-between">
              <div className="text-end w-[45%]">
                <span className="px-4 py-2 bg-[#D9F2E8] text-[#087F5B] rounded-full">
                  2020
                </span>
              </div>
              <div className="absolute bg-[#087F5B] w-5 h-5 rounded-full  border-4 border-white left-1/2 -translate-x-1/2 z-10"></div>
              <div className="w-[45%] ">
                <h3 className="font-bold  text-xl">توسيع النطاق</h3>
                <p className="text-gray-700">
                  أطلقنا أول مشروع وطني لتمويل التعليم والمياه النظيفة.
                </p>
              </div>
            </div>

            <div className="relative flex items-center  pb-12 justify-between">
              <div className="text-end w-[45%]">
                <span className="px-4 py-2 bg-[#D9F2E8] text-[#087F5B] rounded-full">
                  2026
                </span>
              </div>
              <div className="absolute bg-[#087F5B] w-5 h-5 rounded-full  border-4 border-white left-1/2 -translate-x-1/2 z-10"></div>
              <div className="w-[45%] ">
                <h3 className="font-bold  text-xl">التأثير العالمي </h3>
                <p className="text-gray-700">التأثير العالمي </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="text-center mt-10 ">
            <h1 className="text-primary font-bold text-2xl">فريقنا</h1>
            <p className="text-gray-700">الأشخاص وراء التأثير.</p>
          </div>
          <div className="flex flex-col gap-6  sm:flex-row items-center mt-10 justify-between">
            <div className=" relative grow w-full sm:w-1/2">
              <img
                className="   w-full rounded-2xl h-52  sm:h-100  cursor-pointer hover:scale-105 transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrqlzmGFBXn4FkfSia1ONr2fFHwQ30ZXGnNcL0TqrGzk4WQzF4Ist0BjD8t22cHvPdYwwu7hb7ClrXN7Iv2TH_Q07r--QO5Cu-AexjO4yi1hXthyOal3KpSIOSFBq39IpF0J0HcXJWbmxHgJU6DWdgLxwUPwwd2YuVo7C9iYrKa05vK0AgQLPEP6RKhziXLObrbdWZCIhbd_Uk4Jdesph-e2Le1drBFhbG8S9sQFqzeLSprAUFOGhU"
                alt=""
              />
              <div className="absolute bottom-5  right-3    left-0 ">
                <p className="text-3xl text-white font-bold ">سارة أحمد</p>
                <p className="text-green-400">المدير التنفيذي</p>
              </div>
            </div>
            <div className="relative sm:w-1/3 w-full">
              <img
                className=" h-52   sm:h-100  hover:scale-105  cursor-pointer   transition-all duration-300 w-full rounded-2xl  "
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVGWX3Mv86gT7H77fSSw6EJ8KKZkE99hmwSZaLKEvZFF4TvbGcAOkvseSd3zmbYvDc-7JXWhwMEqYGJ76LM_7nyTGIudnlBZxL_XSsabzA7W_LUwiz-0MU8xd99lTHRqkbEPm3hdqvhDHzp5JzEh3fCN94P0PFR_v-MFvhEFlTcagVsZLDUBl_qXp8EToK5VmRfBg8DMeOq9ygGYn885Z3wru3irVjjmEDv_Vpfe1mV7QGirmMYVXp"
                alt=""
              />
              <div className="absolute bottom-5  right-3    left-0 ">
                <p className="text-3xl text-white font-bold ">عمر خالد</p>
                <p className="text-green-400">مدير العمليات</p>
              </div>
            </div>
          </div>
          <div className="mt-5  flex flex-col sm:flex-row  gap-6 items-center ">
            <div className="relative w-full    my-5 ">
              <img
                className="rounded-2xl w-full sm:w-[95%]   hover:scale-105 transition-all cursor-pointer duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASqzO_IJ4vuvUXSK-RiYUF3-2fBBgRe5OrYhvNyYbEqdvQQY1XIYp696daNfcvIJoBgIEjrjARaRWCtpiK_V3Wel31gRHgvsgEMw-FMnJYKZeqqFfS12EFwUOoeKpBBcJtlc6-GQM1D8MTLrPnBeQbhoKDhOHJfCl7U6vslSSiZFnRXnBflWlKo_kwfgeHjER4gH-IIyl0aiQ69MHJQrO1s7672are-OV-X2vvj78ODlXUzmXAl0GB"
                alt=""
              />
              <div className="absolute bottom-5  right-3      left-0 ">
                <p className="text-3xl text-white font-bold ">ليلى محمود</p>
                <p className="text-green-400"> رئيسة التواصل</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch w-full   overflow-hidden shadow-2xl">
            <div className="w-full sm:w-1/2 flex">
              <img
                className="w-full object-cover   hover:scale-105 transition-all duration-300 cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCIwZIMLK0ZbH39-cB-pBX-Aw-NSYNt29Go_ved8IyuslFgyGeG8Krnhck12TmaJ-g0-DXwNSpiTz_wk2FL16V3db95UB4DVcQWR_M3-aGxrTxN0mbhKtV0sNDhHyrirkZK1bMv3qu0OYJk_8_beh9HDGqxH2ZFlXu4lHbltpmtSr4NXt_TnPzkWbxO1f2ym5NDPLyOWCph20kLQfNoW1slDsZyD6lG9gZpkB3ZeXl8EoN_v-W-rL"
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center   p-8 md:p-12">
              <h1 className="text-[#087F5B] text-3xl font-bold mb-5">
                فريق المتطوعين
              </h1>
              <p className="text-gray-700 text-lg leading-8">
                القوة الدافعة الحقيقية وراء مبادراتنا، يعملون بشغف وإخلاص في
                الميدان
              </p>
              <button className="mt-6   px-6  text-primary  py-2 rounded-2xl w-fit  hover:text-green-950 cursor-pointer transition">
              <i className="fa-solid fa-arrow-right"></i>  انضم إلينا
              </button>
            </div>
          </div>
        </div>

          <div className="mt-10">
            <h1 className="text-gray-700 text-3xl font-bold  text-center ">
              شركاؤنا في النجاح
            </h1>
            <div className="flex flex-col sm:flex-row   justify-center gap-12 items-center my-5">
             
              <p className="font-bold text-2xl text-gray-700">FUTURE.ORG</p>
              <p className="font-bold text-2xl text-gray-700">EarthCare</p>
              <p className="font-bold text-2xl text-gray-700">GlobalAid</p>
               <p className="font-bold text-2xl text-gray-700">
                <i className="fa-solid fa-droplet ml-2"></i>
                AquaLife
              </p>
            </div>
          </div>
        </div>
    </>
  );
}
