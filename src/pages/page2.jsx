import React, { useEffect, useState } from "react";
import { api } from "../serviece/api";



function Page2() {

const [service,setserviece]=useState([])

useEffect(()=>{
  api.get("coreservice/")
  .then((res)=>{
    setserviece(res.data)
  })
  .catch((err)=>console.log(err.message))
},[])


  return (
    <div  className="bg-[#151414] text-white py-24 px-6">

        {/* ================================ service section ============================= */}

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          OUR CORE SERVICES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {service.map((service, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full "
              >
                <img src={service?.image} className="text-2xl rounded-full"/>
              </div>
              <h3
                className="text-lg font-semibold mb-2 "
              >
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
export default Page2;