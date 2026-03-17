import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#151414] text-white py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">


        <div>
          <h2 className="text-3xl font-bold mb-4">logo</h2>
          <p className="text-gray-400 text-sm mb-4">
            We Deliver The Best
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            faucibus interdum posuere lorem ipsum dolor sit amet consectetur
            adipiscing elit duis tristique sollicitudin.
          </p>
          <div className="flex gap-4 mt-6 text-gray-400">
            <FaInstagram className="cursor-pointer hover:text-orange-500" />
            <FaFacebookF className="cursor-pointer hover:text-orange-500" />
            <FaYoutube className="cursor-pointer hover:text-orange-500" />
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Company Info</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>We are hiring</li>
            <li>Blog</li>
            <li className="font-semibold text-white pt-3">Legal</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+971 00 000 000</li>
            <li>+971 00 000 000</li>
            <li>info@tested.ae</li>
            <li>Shop No: 13, Dubai - UAE</li>
          </ul>
          <div className="mt-6">
            <h4 className="mb-2 font-semibold">Report</h4>
            <div className="flex items-center bg-[#2a2a2a] rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="Note"
                className="bg-transparent outline-none text-sm flex-1"
              />
              <button className="text-orange-500">➤</button>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;