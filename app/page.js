import { SpanStatus } from "next/dist/trace";
import Link from "next/link";
export default function Page(){
  const liCss="flex items-center px-4 py-3 rounded-lg bg-green-50 text-gray-700 hover:bg-green-100 transition-all transform hover:translate-x-4"
  const spanCss="w-2 h-2 bg-green-500 rounded-full mr-3"

  return(
    <main>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-y-3 w-max">
        <li className={liCss}>
          <span class={spanCss}></span>
          <Link href="week-2" >This is the link to week-2 page</Link>
        </li>
        <li className={liCss}>
          <span class={spanCss}></span>
          <Link href="week-3" >This is the link to week-3 page</Link>
        </li>
        <li className={liCss}>
          <span class={spanCss}></span>
          <Link href="week-4" >This is the link to week-4 page</Link>
        </li>
      </ul>
    </main>
  )
}