import React, { useEffect, useState } from "react";
import { api } from "../serviece/api";

function Page5() {

const [creative, setcreative] = useState([]);
  const [desing, setdesing] = useState([]);
  const [reviews,setreviews]=useState([])


  const stats = [
    { number: "5000+", label: "PROJECTS" },
    { number: "500+", label: "CLIENTS" },
    { number: "2+", label: "COUNTRIES" },
    { number: "10K", label: "CREATIVES" },
  ];



  useEffect(() => {
    api.get("creative/").then((res) => {
      setcreative(res.data);
    })
    .catch((err)=>console.log(err.message))
  }, []);

  useEffect(() => {
    api.get("designlist/").then((res) => {
      setdesing(res.data); })
      .catch((err)=>console.log(err.message))
  }, []);


  useEffect(() => {
    api.get("reviews/")
    .then((res) => {
      setreviews(res.data) })

    .catch((err)=>console.log(err.message))
  }, []);


  return (
    <div className="bg-[#0f0f0f] text-white py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-orange-500 text-xl md:text-2xl font-bold">
                {item.number}
              </h3>
              <p className="text-gray-400 text-xs tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <h1
          className="text-[60px] sm:text-[90px] md:text-[160px] font-extrabold text-black 
          [-webkit-text-stroke:1px_#f97316] text-center mb-10 leading-none">
          CREATIVE
        </h1>
      </div>
      <div className="relative">
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap -mt-16 md:-mt-28 relative z-10">
          {creative.map((img, index) => (
            <div
              key={index}
              className="w-[140px] sm:w-[180px] md:w-[220px] h-[200px] sm:h-[260px] md:h-[320px] overflow-hidden" >
              <img
                src={img.image}
                alt="creative"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-20">
        <div className="mb-10">
          <p className="text-gray-400">Client</p>
          <h2 className="text-orange-500 text-2xl md:text-3xl font-semibold">
            Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 flex items-start gap-4 rounded-lg"
            >
              <img
                src={review.image}
                alt="review"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">{review.title}</h3>

                <div className="text-yellow-400 text-sm">★★★★☆</div>

                <p className="text-sm text-gray-600 mt-2">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
          {desing.map((img, index) => (
            <div
              key={index}
              className=" relative w-[120px] sm:w-[150px] md:w-[180px] h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden"
            >
              <img
                src={img.image}
                alt="portfolio"
                className="w-full h-full object-cover"
              />
              <h3 className="absolute bottom-2 left-2 text-white font-semibold text-sm">
                {img.title}
              </h3>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page5;
