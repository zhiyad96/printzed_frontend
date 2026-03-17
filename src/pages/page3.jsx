import React, { useEffect, useState } from "react";
import { api } from "../serviece/api";

function Page3() {
  const [service, setserviece] = useState([]);

  useEffect(() => {
    api.get("services/").then((res) => {
      setserviece(res.data);
    })
    .catch((err)=>console.log(err.message))
  }, []);


  return (
    <div className="bg-[#0f0f0f] text-white py-16 md:py-20  md:px-8 px-6">

          {/* ============================= service header ============================= */}

      <div id="service" className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 justify-center">
          <h2 className="text-4xl font-semibold leading-tight">
            SERVICES <br /> WE PROVIDE
          </h2>
          <div className="hidden md:block w-[2px] h-28 bg-orange-600 rounded-full"></div>
          <p className="text-gray-300 max-w-xl">
            tincidunt Cras adipiscing nec quam ipsum id enim. nibh lorem urna,
            sollicitudin massa tincidunt at, quam nibh ex ex ullamcorper
            vehicula, ipsum Donec elit non sit sodales. felis, gravida quis
            sodales. quam ullamcorper massa Ut Sed non.
          </p>
        </div>
      </div>

            {/* ========================================== services =============================== */}

      <div className="flex flex-col items-center mt-16 ">
        <div className="hidden md:block w-full max-w-5xl h-[1px] bg-white rounded-full"></div>


        <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-6">
          <p className="text-white md:w-[80px]">(001)</p>
          <div className="flex-1">
            <h3 className="text-orange-500 font-semibold p-2">
             {service[0]?.title}
            </h3>
            <p className="pt-2 text-[12px] text-gray-300">
              {service[0]?.description}
            </p>
          </div>
          <img
            src={service[0]?.image}
            className="w-full md:w-60 h-36 object-cover rounded-xl"
          />
        </div>


        <div className="hidden md:block w-full max-w-5xl h-[1px] bg-white rounded-full"></div>


        <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-6">
          <p className="text-white md:w-[80px]">(002)</p>
          <div className="flex-1">
            <h3 className="text-orange-500 font-semibold p-2">
              {service[1]?.title}
            </h3>
            <p className="pt-2 text-[12px] text-gray-300">
              {service[1]?.description}
            </p>
          </div>
          <img
            src={service[1]?.image}
            className="w-full md:w-60 h-36 object-cover rounded-xl"
          />
        </div>


        <div className="hidden md:block w-full max-w-5xl h-[1px] bg-white rounded-full"></div>


        <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-6">
          <p className="text-white md:w-[80px]">(003)</p>
          <div className="flex-1">
            <h3 className="text-orange-500 font-semibold p-2">
              {service[2]?.title}
            </h3>
            <p className="pt-2 text-[12px] text-gray-300">
              {service[2]?.description}
            </p>
          </div>
          <img
            src={service[2]?.image}
            className="w-full md:w-60 h-36 object-cover rounded-xl"
          />
        </div>


        <div className="hidden md:block w-full max-w-5xl h-[1px] bg-white rounded-full"></div>


        <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-6">
          <p className="text-white md:w-[80px]">(004)</p>
          <div className="flex-1">
            <h3 className="text-orange-500 font-semibold p-2">
              {service[3]?.title}
            </h3>
            <p className="pt-2 text-[12px] text-gray-300">
              {service[3]?.description}
            </p>
          </div>
          <img
            src={service[3]?.image}
            className="w-full md:w-60 h-36 object-cover rounded-xl"
          />
        </div>


        <div className="hidden md:block w-full max-w-5xl h-[1px] bg-white rounded-full"></div>


        <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-6">
          <p className="text-white md:w-[80px]">(005)</p>
          <div className="flex-1">
            <h3 className="text-orange-500 font-semibold p-2">
              {service[4]?.title}
            </h3>
            <p className="pt-2 text-[12px] text-gray-300">
              {service[4]?.description}
            </p>
          </div>
          <img
            src={service[4]?.image}
            className="w-full md:w-60 h-36 object-cover rounded-xl"
          />
        </div>


        <div className="hidden md:block w-full max-w-5xl h-[1px] bg-white rounded-full"></div>


      </div>
    </div>
  );
}
export default Page3;
