import React from "react";
import { useState, useEffect } from "react";
import { api } from "../serviece/api";

function Page1() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    api
      .get("portfolios/")
      .then((res) => {
        setPortfolio(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="portfolio" className="bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* =====================port folio header ============= */}

        <div className="mb-12">
          <p className="text-white max-w-xl">
            From strategy to stunning visuals, discover the services that
            empower our clients’ success. Explore our portfolio of successful
            projects.
          </p>
          <button className="mt-4 bg-orange-500 text-black px-4 py-1 rounded-full text-sm">
            PORTFOLIOS →
          </button>
        </div>

        {/* =============================== port folio image section ===================================== */}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">


          <div className="relative group overflow-hidden h-[250px] break-inside-avoid">
            <img
              src={portfolio.find((p) => p.id === 3)?.image}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-lg group-hover:scale-110 transition duration-500">
                {portfolio.find((p) => p.id === 3)?.title}
              </h3>
            </div>
          </div>


          <div className="relative group overflow-hidden h-[420px] break-inside-avoid">
            <img
              src={portfolio.find((p) => p.id === 7)?.image}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-lg group-hover:scale-110 transition duration-500">
                {portfolio.find((p) => p.id === 7)?.title}
              </h3>
            </div>
          </div>


          <div className="relative group overflow-hidden h-[370px] break-inside-avoid">
            <img
              src={portfolio.find((p) => p.id === 4)?.image}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-lg group-hover:scale-110 transition duration-500">
                {portfolio.find((p) => p.id === 4)?.title}
              </h3>
            </div>
          </div>
         <div className="relative group overflow-hidden h-[300px] break-inside-avoid">
            <img
              src={portfolio.find((p) => p.id === 8)?.image}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-lg group-hover:scale-110 transition duration-500">
                {portfolio.find((p) => p.id === 8)?.title}
              </h3>
            </div>
          </div>
          <div className="relative group overflow-hidden h-[420px] break-inside-avoid">
            <img
              src={portfolio.find((p) => p.id === 6)?.image}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-lg group-hover:scale-110 transition duration-500">
                {portfolio.find((p) => p.id === 6)?.title}
              </h3>
            </div>
          </div>
          <div className="relative group overflow-hidden h-[250px] break-inside-avoid">
            <img
              src={portfolio.find((p) => p.id === 9)?.image}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-lg group-hover:scale-110 transition duration-500">
                {portfolio.find((p) => p.id === 9)?.title}
              </h3>
            </div>
          </div>
        </div>

        {/* ============================ work and flow ========================== */}

        <div className="mt-24">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-16">
            <div className="text-right">
              <h2 className="text-4xl font-semibold leading-tight">
                OUR WORK <br /> FLOW
              </h2>
            </div>
            <div className="hidden md:block w-[3px] h-24 bg-white"></div>
            <p className="text-white max-w-xl">
              tincidunt Cras adipiscing nec quam ipsum id enim. nibh lorem urna,
              sollicitudin massa tincidunt at, quam nibh ex ex ullamcorper
              vehicula, ipsum Donec elit non sit sodales. felis, gravida quis
              sodales. quam ullamcorper massa Ut Sed non.
            </p>
          </div>

          {/* ===============================icons================================= */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">
                <img
                  src="https://printzed.ae/images/details.gif"
                  className="w-16 h-16 object-cover "
                />
              </div>
              <p className="text-gray-300">Collect Details</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl  mb-4">
                <img
                  src="https://printzed.ae/images/design.gif"
                  className="w-16 h-16 object-cover "
                />
              </div>
              <p className="text-gray-300">Design</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl  mb-4">
                <img
                  src="https://printzed.ae/images/approve.gif"
                  className="w-16 h-16 object-cover "
                />
              </div>
              <p className="text-gray-300">Approve & Print</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl  mb-4">
                <img
                  src="https://printzed.ae/images/delivery.gif"
                  className="w-16 h-16 object-cover "
                />
              </div>
              <p className="text-gray-300">Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
