import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {api} from '../serviece/api'

function Home() {

const [solutions, setSolutions] = useState([]);


  useEffect(() => {
  api.get("marketing_solutions/")
    .then((res) => {
      setSolutions(res.data);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <div id="home" className="relative w-full min-h-screen">

            {/* =============================== home screen section ===================== */}

      <div className="relative min-h-screen">
        <img
          src="/src/assets/image1.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center justify-center min-h-screen pt-32 md:pt-40 text-center text-white px-6">
          <h2 className="text-orange-500 font-bold tracking-wider text-sm md:text-base">
            PRINTING & BRANDING SOLUTION
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 mt-2">
            IN UAE
          </h1>
          <p className="max-w-xl mt-4 text-gray-300 text-sm md:text-base">
            We craft impactful Printing works, advertising, branding & digital
            marketing strategies to grow your brand and achieve measurable
            success!
          </p>
        </div>
      </div>

            {/* ====================================image section ============================ */}

      <div className="bg-[#0f0f0f] text-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 text-2xl font-bold">
            Deliver Solution
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            We craft custom solutions to help you achieve your specific
            marketing goals and objectives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions?.slice(0,4).map((t)=>(
               <div key={t.id} className="relative group overflow-hidden rounded-lg">
            <img
              src={t.image}
              className="w-full h-[260px] md:h-[320px] object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold">{t.title}</h3>
              <p className="text-yellow-400 text-sm">
                {t.description}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>

              {/* ============================== about section  ================================= */}

      <div className="bg-[#121212] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-500 font-semibold mb-4">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              CREATIVE <br /> AGENCY
            </h2>
          </div>
          <div>
            <p className="text-gray-400 mb-6">
              Nunc lorem, turpis convallis. Praesent elit vitae Morbi risus id
              Lorem Vestibulum placerat ipsum facilisis facilisis massa nibh
              dignissim, faucibus laoreet In at non eget Donec elit maximus
              consectetur nulla.
            </p>
            <button className="text-orange-500 font-semibold hover:text-orange-400">
              Read More
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}
export default Home;
