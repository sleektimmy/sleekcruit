import jobs from "@/app/data/jobs";
import Image from "next/image";
import Link from "next/link";
import { SiListmonk } from "react-icons/si";
import { FaRegClock } from "react-icons/fa";
import SaveButton from "@/app/components/SaveButton";

export default function JobDescription({ params }) {
  const jobDetails = jobs.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  const relatedJobs = jobs
    .filter(
      (job) =>
        (job.category === jobDetails.category &&
          job.title.toLowerCase().replace(/\s+/g, "-") !== params.slug) ||
        (job.location === jobDetails.location &&
          job.title.toLowerCase().replace(/\s+/g, "-") !== params.slug)
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const daysLeft = Math.ceil(
    (new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 w-full max-w-5xl mx-auto text-center">
      <Image
        src={`/${jobDetails.id !== null ? jobDetails.id : "hire"}.jpg`}
        alt={jobDetails.title}
        width={500}
        height={500}
        className="w-32 sm:w-48 md:w-64 rounded-full shadow-md mb-6 object-cover mx-auto"
      />

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
        <h1 className="font-bold text-2xl sm:text-3xl border-b-4 border-double border-red-500 uppercase py-2">
          {jobDetails.title}
        </h1>
        <p
          className={`font-semibold text-white py-2 px-4 rounded-full text-sm sm:text-base ${
            daysLeft < 4 ? "bg-red-800 animate-pulse" : "bg-red-500"
          }`}
        >
          {daysLeft < 0 ? "Expired" : `Days Left: ${daysLeft} days`}
        </p>
      </div>

      <div className="text-left w-full my-6 text-sm sm:text-base space-y-1">
        <p><strong>Company:</strong> {jobDetails.company}</p>
        <p><strong>Category:</strong> {jobDetails.category}</p>
        <p><strong>Location:</strong> {jobDetails.location}</p>
        <p>
          <strong>Closing Date:</strong>{" "}
          {new Date(jobDetails.endDate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Job Description */}
      <section className="text-left w-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Job Description</h2>
        <p className="text-justify text-sm sm:text-base">{jobDetails.description}</p>
      </section>

      {/* Requirements */}
      <section className="w-full mt-6 text-left">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Job Requirements</h2>
        <ul className="space-y-2 text-sm sm:text-base">
          {jobDetails.requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-2">
              <SiListmonk className="mt-1 text-red-500" />
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Apply + Save Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <Link href={`/apply/${params.slug}`}>
          <input
            type="button"
            value={daysLeft < 0 ? "No longer available" : "Apply for this role"}
            disabled={daysLeft < 0}
            className={`${
              daysLeft < 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
            } text-white font-semibold py-2 px-6 rounded-full capitalize transition-colors duration-300`}
          />
        </Link>

        {daysLeft >= 0 && (
          <SaveButton title={jobDetails.title} company={jobDetails.company} />
        )}
      </div>

      {/* Related Jobs */}
      <section className="w-full mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left">Related Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <h3 className="text-lg font-bold mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600">Company: {job.company}</p>
              <p className="text-sm text-gray-600 mb-2">Location: {job.location}</p>
              <Link
                href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-red-500 hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
