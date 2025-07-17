import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg p-8 sm:p-12 md:p-20 rounded-3xl text-center w-full max-w-xl">
        <FaCheckCircle className="text-green-500 animate-pulse text-6xl sm:text-7xl mb-4 mx-auto" />

        <h1 className="font-bold text-2xl sm:text-3xl uppercase mb-3">
          Thank you!
        </h1>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          You have successfully applied for this role.{" "}
          <br className="hidden sm:block" />
          Kindly check your email for further updates in the future.
        </p>

        <Link
          href="/"
          className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition duration-300"
        >
          <IoMdArrowRoundBack className="mr-2 text-lg" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
