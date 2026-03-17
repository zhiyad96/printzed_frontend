import React, { useEffect, useState } from "react";
import { api } from "../serviece/api";

function Page4() {

const [coo,setcoo]=useState([])
const [team,setteam]=useState([])

useEffect(()=>{

  api.get("teammembers/")
    .then((res)=>{
      setteam(res.data)
    })
    .catch((err)=>console.log(err.message))

},[])

  useEffect(()=>{
    api.get("coo_message/")
    .then((res)=>{
      setcoo(res.data)
    })
    .catch((err)=>console.log(err.message))
  },[])

  return (
    <div id="teams" className="bg-[#151414] text-white py-16 md:py-20 px-6 md:px-8 ">
      <div className="max-w-5xl mx-auto ">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          {coo[0]?.title}
        </h3>
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-shrink-0">
            <img
              src={coo[0]?.image}
              alt="COO"
              className="w-[205px] h-[300px] object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-6 mt-6 md:mt-0">
            <p className="text-gray-300 text-sm md:text-base">
             {coo[0]?.description}
            </p>
            <p className="text-gray-300 text-sm md:text-base mt-3">
              Our mission is to transform ideas into powerful visual experiences
              that connect brands with their audiences.
            </p>
            <div className="mt-3">
              <p className="text-orange-500 font-semibold">John Doe</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="overflow-hidden ">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-[220px] object-cover "
                  />
                </div>
                <p className="text-orange-500 font-semibold mt-3">
                  {member.title}
                </p>
                <p className="text-gray-400 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page4;
