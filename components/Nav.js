import Link from "next/link";

export default function Nav () {
    return (
        <nav className="mx-14 flex justify-between items-center py-10">
            <Link href={"/"}>Logo</Link>
            <ul>
                <Link className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-9" href={"/auth/login"}>
                    Join now
                </Link>
            </ul>
        </nav>
    )
}