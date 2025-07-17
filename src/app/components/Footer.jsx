import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-black text-white px-6 py-10 rounded-b-2xl">
       
        <div>
          <Image
            src="/logo-white.png"
            alt="SleekCruit Logo"
            width={160}
            height={80}
            className="mb-4"
          />
          <ul className="text-sm space-y-2">
            <li>Email: support@sleekcruit.com</li>
            <li>Phone: +234 800 123 4567</li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
          <hr className="my-4 border-red-500" />
          <p className="text-sm">Stay updated with our latest news and job openings.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaFacebook className="text-2xl hover:text-red-500" /></a>
            <a href="#"><AiFillTwitterCircle className="text-2xl hover:text-red-500" /></a>
            <a href="#"><TbBrandLinkedinFilled className="text-2xl hover:text-red-500" /></a>
            <a href="#"><AiFillInstagram className="text-2xl hover:text-red-500" /></a>
          </div>
        </div>

   
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-500">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/jobs" className="hover:underline">Job Openings</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

  
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-500">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

 
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-500">Get Updated</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog" className="hover:underline">Latest Articles</a></li>
          </ul>
        </div>
      </div>

  
      <div className="bg-black text-white text-sm px-6 py-6 flex flex-col sm:flex-row items-center justify-between rounded-t-2xl space-y-4 sm:space-y-0">
        <p className="text-center sm:text-left">© 2025 SleekCruit. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="mr-2">Follow us</span>
          <FaArrowRight className="text-red-500 mr-2" />
          <a href="#" className="hover:text-red-400">Facebook</a>
          <a href="#" className="hover:text-red-400">Twitter</a>
          <a href="#" className="hover:text-red-400">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
