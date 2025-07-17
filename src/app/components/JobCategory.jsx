import JobCard from "./JobCard"



export default function JobCategory() {
  return (
    <section className="md:py-16 md:px-8 py-4 px-4">
      <h2 className="md:text-4xl text-lg font-bold text-center text-black py-5 "> Top Jobs Available</h2>
      <p className="text-center text-gray-600 mb-8">Explore the latest job opportunities across various categories</p>
            <div className="md:py-16 md:px-8 py-4 px-4">
        <JobCard val='6'/>
    </div>
    </section>
  )
}
