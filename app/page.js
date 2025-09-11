import Image from "next/image";
import Link from "next/link";
export default function Page(){
  return(
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="week-2" className="hover:underline">This is the link to week-2 page</Link>
    </main>
  )
}