// pages/about.jsx or app/about/page.jsx

import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div className="bg-white font-lg min-h-screen py-12 px-4 md:px-20">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl text-red-500  mb-6  inline-block pb-5">
         We are the bridge to the perfect job match
        </h1>
       <Image src={"/shake.png"} alt="Handshake" width={2000} height={2000} className="mx-auto w-full rounded-full mb-8" />
        <p className="text-lg text-5xl mb-8">
          SleekCruit is an innovative HR platform designed to connect top talent with companies
          looking for excellence. We simplify the hiring journey — from job posting to application
          — with an intuitive, elegant interface built for speed and clarity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <Image src={"/job-hunt.png"} alt="Job Hunt" width={500} height={500} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-3 text-red-500">👥 Who We Help</h2>
            <p>
              SleekCruit empowers HR teams to publish roles effortlessly while helping job seekers
              discover and apply to opportunities that align with their career goals.
            </p>
          </div>
          <div>
            <Image src={"/why-us.png"} alt="HR Team" width={500} height={500} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-3 text-red-500">🚀 Why SleekCruit?</h2>
            <p>
              With a focus on simplicity, speed, and a sleek design, SleekCruit eliminates
              complexity in hiring. Our platform is as efficient as it is elegant.
            </p>
          </div>
        </div>

<br>
</br>
<br>
</br>
       <div className=" flex justify-center items-center my-10 py-5">
  {/* Background Ring */}
  <div className="absolute w-56 h-56 rounded-full border-4 border-red-200 opacity-30 animate-pulse my-10" />

  {/* Gradient Text */}
  <p className=" text-4xl py-4 px-6 bg-gradient-to-r from-red-900 via-red-700 to-red-400 text-transparent bg-clip-text relative z-10">
    Making Recruit <span className='font-bold'> Simple </span>
  </p>
</div>
<br>
</br>
        <div className="mt-12">
          <a
            href="/jobs"
            className="bg-red-500 text-white px-6 py-3 my-4 font-bold rounded-lg hover:bg-red-700 transition"
          >
            Explore Jobs
          </a>
 </div>
 
      </section>
 <section  className="max-w-4xl mx-auto text-center">

 <br />
 <div>
    <h1 className="text-5xl text-red-500 nline-block ">
         Meet The Team
        </h1>
        <p className="text-lg font-italic text-gray-600 mb-8">
          Our team is dedicated to making the hiring process seamless and efficient for both
          employers and job seekers. </p>
 </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
    {[
      {
        name: "Yusuf Timileyin",
        role: "CEO/Founder",
        image: "https://ui-avatars.com/api/?name=Yusuf+Timileyin&background=ffffff&color=991b1b",
      },
      {
        name: "Ms Odk",
        role: "Virtual Assistant",
        image: "https://ui-avatars.com/api/?name=ms+Obi&background=ffffff&color=991b1b",
      },
      {
        name: "Leks Dada",
        role: "UI/UX Designer",
        image: "https://ui-avatars.com/api/?name=Linda+Dada&background=ffffff&color=991b1b",
      },
      {
        name: "ST",
        role: "Backend Engineer",
        image: "https://ui-avatars.com/api/?name=sLEEK+tIMMY&background=ffffff&color=991b1b",
      },
    ].map((member, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 mb-4 shadow-md">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm">{member.role}</p>
      </div>
    ))}
  </div>
 </section>
 <section className="bg-red-50 py-16 px-4 md:px-20 text-red-500 text-center">
  <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Integrity</h3>
      <p className="text-sm">
        We act with honesty and transparency in everything we do — with our team, clients, and users.
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Innovation</h3>
      <p className="text-sm">
        We embrace creativity and new ideas to push boundaries and build smarter recruitment tools.
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
      <p className="text-sm">
        Our platform is designed to be clean, intuitive, and efficient — because hiring should never be complicated.
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Excellence</h3>
      <p className="text-sm">
        We hold ourselves to high standards and strive to deliver exceptional quality in every feature.
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
      <p className="text-sm">
        We work together with respect and openness, believing that great things happen when teams align.
      </p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Impact</h3>
      <p className="text-sm">
        Every line of code and design decision is aimed at making recruitment better and more human.
      </p>
    </div>
  </div>
</section>

    </div>
  );
  
};

export default About;


