// pages/contact.jsx or app/contact/page.jsx

import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-4 md:px-20 py-16">
     
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Get in Touch</h1>
        <p className="text-lg max-w-xl mx-auto">
          Whether you're a job seeker or a hiring manager, we'd love to hear from you.
          Fill out the form or reach us directly.
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        <form className="bg-red-50 p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-red-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-red-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="How can we help?"
              className="w-full border border-red-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>

        
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-sm">support@sleekcruit.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-sm">+234 800 123 4567</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Office</h3>
            <p className="text-sm">Lagos, Nigeria</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400">Twitter</a>
              <a href="#" className="hover:text-red-400">LinkedIn</a>
              <a href="#" className="hover:text-red-400">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
