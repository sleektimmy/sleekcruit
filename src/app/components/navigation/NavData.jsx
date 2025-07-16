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
    <li><Link href="/about">About</Link></li>
    <li><Link href="/jobs">Jobs</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/dashboard">Dashboard</Link></li>
    </>
  )
}
