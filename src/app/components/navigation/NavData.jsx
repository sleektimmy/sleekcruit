import Image from "next/image"
import Link from "next/link"

export default function NavData() {
  return (
    <>
    <li>
      <Link href="/">
    <Image src="/logo.png" alt="Logo" width={200} height={100} className="md:block hidden" />
  </Link>
</li>

    <li><Link href="/about" className="hover:text-red-500 transition-colors duration-300">About</Link></li>
    <li><Link href="/jobs" className="hover:text-red-500 transition-colors duration-300">Jobs</Link></li>
    <li><Link href="/contact" className="hover:text-red-500 transition-colors duration-300">Contact</Link></li>
    <li><Link href="/blog" className="hover:text-red-500 transition-colors duration-300">Blog</Link></li>
    <li><Link href="/dashboard" className="hover:text-red-500 transition-colors duration-300">Dashboard</Link></li>

    </>
  )
}
