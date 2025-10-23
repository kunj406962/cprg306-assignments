import Link from "next/link";
export default function Page(){
  const linkCss="flex items-center px-4 py-3 rounded-lg bg-green-50 text-gray-700 hover:bg-green-100 transition-all transform hover:translate-x-4"
  const spanCss="w-2 h-2 bg-green-500 rounded-full mr-3"
  const liCss="flex items-center"

  return(
    <main>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-y-3 w-max">
        <Link href="week-2" className={linkCss}>
          <li className={liCss}>
            <span className={spanCss}></span>
            <span>This is the link to week-2 page</span>
          </li>
        </Link>
        <Link href="week-3" className={linkCss}>
          <li className={liCss}>
            <span className={spanCss}></span>
            <span>This is the link to week-3 page</span>
          </li>
        </Link>
        <Link href="week-4" className={linkCss}>
          <li className={liCss}>
            <span className={spanCss}></span>
            <span>This is the link to week-4 page</span>
          </li>
        </Link>
        <Link href="week-5" className={linkCss}>
          <li className={liCss}>
            <span className={spanCss}></span>
            <span>This is the link to week-5 page</span>
          </li>
        </Link>
        <Link href="week-6" className={linkCss}>
          <li className={liCss}>
            <span className={spanCss}></span>
            <span>This is the link to week-6 page</span>
          </li>
        </Link>
        <Link href="week-7" className={linkCss}>
          <li className={liCss}>
            <span className={spanCss}></span>
            <span>This is the link to week-7 page</span>
          </li>
        </Link>
        <Link href="week-8" className={linkCss}>
          <li className={liCss}>
            <span className={spanCss}></span>
            <span>This is the link to week-8 page</span>
          </li>
        </Link>
      </ul>
    </main>
  )
}