import Link from "next/link";
export default function Categories({jobs}) {
    const categories = [ ...new Set(jobs.map(job => job.category)) ];
    const newCategories = [ ...new Set(jobs.map(job => job.category)) ].slice(0, 5);
  return (
    <nav>
        <ul className="flex justify-around items-center bg-gray-100 p-4 space-around m-4 wrap flex-wrap scroll-x md:hidden">
    {newCategories.map((category, index) => (
        <li key={index} className="inline-block mr-4 hover:bg-red-500 hover:text-white hover:text-xl p-2 rounded transition-all duration-300">
            <Link href={`/jobs/category/${category.replaceAll(' ', '-')}`}>
            {category}
            </Link>
        </li>
    ))}
</ul>
        <ul className="flex justify-around items-center bg-gray-100 p-4 space-around m-4 wrap flex-wrap scroll-x hidden md:block">
    {categories.map((category, index) => (
        <li key={index} className="inline-block mr-4 hover:bg-red-500 hover:text-white hover:text-xl p-2 rounded transition-all duration-300">
            <Link href={`/jobs/category/${category.replaceAll(' ', '-')}`}>
            {category}
            </Link>
        </li>
    ))}
</ul>
        
        </nav>
  )
}
