import { useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../Redux/ProjectData";
import { useEffect, useState } from "react";

export default function Donate() {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetProjectByIdQuery(id!);
  const [paid, setpaid] = useState<string | null>(null);
  const [titlestate, settitlestate] = useState<string>("")
  const [img ,setImg] = useState<string>()
  console.log(data);
  console.log(id);
  const [amount, setAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sucsess, setsucsess] = useState(false)
  function handalePaid(value: string) {
    if (paid === value) {
      setpaid(null);
    } else {
      setpaid(value);
    }
  }
  function handleClick(value: number) {
    if (amount === value) {
      setAmount(null);
    } else {
      setAmount(value);
    }
  }
  const [name, setname] = useState<string>("");
  const [nameError, setnameError] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [emailError, setemailError] = useState<string>("");
  function validation() {
    let isValid = true;
    if (name.trim() === "") {
      setnameError("من فضلك ادخل الاسم");
      isValid = false;
    } else {
      setnameError("");
    }
    if (email.trim() === "") {
      setemailError("من فضلك ادخل الايميل");
      isValid = false;
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(!email)) {
      setemailError("الايميل خاطء");
    } else {
      setemailError("");
    }
    return true
  }

  useEffect(() => {
    if(data?.data&&id){
        setImg (`http://localhost:1337${data.data.img.url}`)
       settitlestate(data?.data?.title)
    }else{
      setImg("article24_2025.webp")
      settitlestate("التبرع من اجل حمايه الاطفال")

    }
  }, [data && id])
  
  function handaleDonat() {
    if (amount == null) {
      setError("من فضللك ادخل مبلغ التبرع");
    } else {
      setError(null);
    }
    setsucsess(true)
  }

  return (
    <>
      <div
        dir="rtl"
        className="bg-[#F5FBF5] container mx-auto my-20 px-4 sm:px-6 md:px-8 lg:px-16"
      >
        <div className="text-center mx-auto py-9">
          <h1 className="text-3xl font-bold text-primary mb-3">إحداث فرق</h1>
          <p className="text-gray-700">
            تبرعك يساهم في بناء مستقبل مشرق وتوفير الاحتياجات الأساسية للمجتمعات
            المحتاجة.
          </p>
        </div>

        <div
          className="bg-white w-full max-w-3xl mx-auto border rounded-xl     p-6
 border-[#C8D5CC] "
        >
          <h1 className="text-2xl text-center text-gray-800  mb-2 font-bold">
           
            {titlestate}
          
          </h1>
       
    <div className="w-full h-60">
     <img
     className=" w-full h-full object-fit  border-2 border-gray-700"   
      src={img}
              />
              </div>
          <h2 className="text-2xl text-center text-gray-800 mb-2 mt-10 font-bold">
            اختر مبلغ التبرع
          </h2>

          <div className="flex mt-4  gap-10">
            <button
              onClick={() => {
                handleClick(10);
                setError(null);
              }}
              className={`w-1/3 rounded-lg border-2 border-[#007A55] py-4 text-2xl font-bold ${
                amount === 10
                  ? "bg-[#007A55] text-white"
                  : "bg-[#F5FBF5] text-[#007A55]"
              }`}
            >
              10$
            </button>
            <button
              onClick={() => {
                handleClick(50);
                setError(null);
              }}
              className={`w-1/3 rounded-lg border-2 border-[#007A55] py-4 text-2xl font-bold ${
                amount === 50
                  ? "bg-[#007A55] text-white"
                  : "bg-[#F5FBF5] text-[#007A55]"
              }`}
            >
              50$
            </button>
            <button
              onClick={() => {
                handleClick(100);
                setError(null);
              }}
              className={`w-1/3 rounded-lg border-2 border-[#007A55] py-4 text-2xl font-bold ${
                amount === 100
                  ? "bg-[#007A55] text-white"
                  : "bg-[#F5FBF5] text-[#007A55]"
              }`}
            >
              10$
            </button>
          </div>
          <p className="my-3 text-2xl text-red-700 font-bold ">{error}</p>
          <div className="my-5 relative">
            <span className="absolute  top-5 right-1.5 text-2xl text-gray-700  ">
              $
            </span>

            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              type="number"
              placeholder="مبلغ اخر"
              className="w-full rounded-2xl border  border-gray-300 bg-[#F5FBF5] px-7 py-5 outline-none text-[19px] focus:border-[#007A55] focus:ring-0"
            />
          </div>
          <div className="bg-[#F5FBF5] rounded-xl py-3 px-4 border border-1 border-gray-300">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-heart text-[#007A55]"></i>
              <p className="font-bold ">تأثير تبرعك:</p>
            </div>
            <p className="text-gray-700 mt-1">
              أدخل مبلغاً${amount} لترى تأثير تبرعك علي
            </p>
          </div>
          <hr className="my-5 text-gray-300" />
          <div>
            <h1 className="text-2xl font-bold ">المعلومات الشخصية</h1>
            <div className="my-4">
              <label htmlFor="name">الاسم كامل</label>
              <input
                onChange={(e) => {
                  setname(e.target.value);
                }}
                type="text"
                id="name"
                className="w-full rounded-2xl border   border-gray-300 bg-[#F5FBF5] px-7 py-2 outline-none text-[19px] focus:border-[#007A55] focus:ring-0"
              />
              <p className="text-xl font-bold text-red-700 my-3">{nameError}</p>
            </div>
            <div className="my-4">
              <label htmlFor="name"> البريد الالكتروني</label>
              <input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                id="name"
                className="w-full rounded-2xl border   border-gray-300 bg-[#F5FBF5] px-7 py-2 outline-none text-[19px] focus:border-[#007A55] focus:ring-0"
              />

              <p className="text-xl font-bold text-red-700 my-3">
                {emailError}
              </p>
            </div>
          </div>
          <hr className="my-5 text-gray-300" />
          <div>
            <h1 className="text-2xl font-bold mb-2 ">طرق الدفع </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handalePaid("paypal")}
                className={`py-3 bg- border border-gray-300 text-blue-900 rounded-lg w-1/3 cursor-pointer  text-2xl  ${
                  paid === "paypal"
                    ? "bg-[#37a17e] text-white"
                    : "bg-[#F5FBF5] text-[#007A55]"
                }`}
              >
                <i className="fa-brands fa-paypal"></i>
              </button>
              <button
                onClick={() => handalePaid("pay")}
                className={`py-3 bg- border border-gray-300 text-blue-900 rounded-lg w-1/3  cursor-pointer  text-2xl  ${
                  paid === "pay"
                    ? "bg-[#37a17e] "
                    : "bg-[#F5FBF5] text-[#007A55]"
                }`}
              >
                <i className="fa-brands fa-apple-pay"></i>
              </button>
              <button
                onClick={() => handalePaid("vodfoneCash")}
                className={`py-3 bg- border border-gray-300 text-blue-900 rounded-lg w-1/3 cursor-pointer  text-2xl  ${
                  paid === "vodfoneCash"
                    ? "bg-[#37a17e] text-white"
                    : "bg-[#F5FBF5] text-[#007A55]"
                }`}
              >
                <i className="fa-solid fa-credit-card"></i>
              </button>
            </div>
            <button
              onClick={() => {
                handaleDonat();
                validation();
                
              }}
              className="w-full mt-5 bg-primary py-4 rounded-lg  text-white hover:bg-[#007A55] cursor-pointer"
            >

              تبرع الان

            </button>
           {sucsess ?
        <div className="space-y-6 px-4 max-w-4xl mt-6">
   <div
      className="bg-green-800/60 text-sm p-3 rounded-md flex flex-col gap-3 border border-green-100 sm:items-center sm:flex-row"
      role="alert">
      <p className="text-green-900 ">
            تمت عملية التبرع بنجاح ❤️
      </p>
   </div>   
   </div>   
   : null}
          </div>
        </div>
      </div>
    </>
  );
  }
