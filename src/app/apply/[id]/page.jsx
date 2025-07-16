"use client";
import Success from "@/app/components/Success";
import { useState } from "react";

export default function JobApplication({ params }) {
  const { id } = params;

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center my-8 ">Job Application</h1>

        <p className="text-center text-gray-600 mb-4">
          Please fill out the form below to apply for the job.
        </p>

        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={id.replaceAll("-", " ").toUpperCase()}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="resume">
              Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="coverLetterText">
              Cover Letter
            </label>
            <textarea
              id="coverLetterText"
              name="coverLetterText"
              rows="4"
              placeholder="Write a Cover Letter (Make it Professional & Brief)"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            ></textarea>
          </div>

          {
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="coverLetterFile">
              Upload Cover Letter (PDF)
            </label>
            <input
              type="file"
              id="coverLetterFile"
              name="coverLetterFile"
              accept=".pdf"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          }

          {/* Submit button */}
          {/* <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit Application
          </button> */}

          <Success />
        </form>
      </div>
    </>
  );
}
