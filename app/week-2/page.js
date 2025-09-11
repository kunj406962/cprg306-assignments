import Link from "next/link";
import StudentInfo from "./student-info";   
export default function Page() {
return (
<main>
<h1>Shopping List</h1>
<StudentInfo />
<Link href="/" className="hover:underline">This will take you to home page</Link>
</main>
);
}