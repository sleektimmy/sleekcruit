import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="transition duration-300  hover:bg-gray-200 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 rounded-b-2xl bg-black  text-white px-4 py-6 transition duration-300">
        <div>
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={200}
            height={100}
            className="mb-4"
          />
          <div>
            <ul className="text-sm space-y-2">
              <li>Email: support@sleekcruit.com</li>
              <li>Phone: +234 800 123 4567</li>
              <li>Location: Lagos, Nigeria</li>
            </ul>
          </div>
          <hr className="my-4 text-red-500"/>
          <p className="text-sm">
            Stay updated with our latest news and job openings.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-green-400">
              <FaFacebook  className="text-2xl text-white hover:text-red-500  transition:pulse duration-300" />
            </a>
            <a href="#" className="text-white hover:text-green-400">
              <AiFillTwitterCircle  className="text-2xl text-white hover:text-red-500 transition-pulse duration-300" />
            </a>
            <a href="#" className="text-white hover:text-green-400">
              <TbBrandLinkedinFilled className="text-2xl text-white hover:text-red-500   transition-pulse duration-300 " />
            </a>
            <a href="#" className="text-white hover:text-green-400">
              <AiFillInstagram  className="text-2xl text-white hover:text-red-500   transition-pulse duration-300" />
            </a>
          </div>
        </div>
        <div>
          <h3 className=" mb-3 text-2xl hover:text-red-500 hover:underline border-b-red ">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="/jobs" className="hover:underline">
                Job Openings
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3 className=" mb-3 text-2xl hover:text-red-500 hover:underline border-b-red ">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className=" mb-3 text-2xl hover:text-red-500 hover:underline border-b-red ">Get Updated</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="flex items-center justify-between bg-black px-6 py-4  my-5 rounded-t-2xl">
        <p className="text-slate-100 text-sm py-4">
          © 2025 SleekCruit. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2">
          <p className="text-slate-100">Follow us on social media</p>{" "}
          <FaArrowRight className="text-red-500" />
          <a href="#" className="text-white hover:text-red-400">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-red-400">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-red-400">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
