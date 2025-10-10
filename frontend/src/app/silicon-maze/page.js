import Link from "next/link"

export default function SiliconMazePage () {
    return (
        <div className="bg-[url('/SM_Banner.png')] bg-bottom bg-cover h-screen flex items-center justify-center">
            <div className="flex mt-20 flex-col max-w-md p-6 gap-6 items-stretch">
                <Link href="https://codeforces.com/contestInvitation/3405a36256b144081d5c23388f0e872ee5909fd8" target="_blank">
                    <div className="w-full py-3 px-10 cursor-pointer border-2 border-[#e9e736] rounded-lg bg-primary-900 hover:bg-primary-950 duration-200 hover:shadow-[6px_6px_#dc4f3c] text-white text-3xl font-bold text-center">
                        Algo Tasks
                    </div>
                </Link>
                <Link href="https://siliconmaze.wec-ctf.com/" target="_blank">
                    <div className="w-full py-3 px-10 cursor-pointer border-2 border-[#e9e736] rounded-lg bg-primary-900 hover:bg-primary-950 duration-200 hover:shadow-[6px_6px_#dc4f3c] text-white text-3xl font-bold text-center">
                        Systems Tasks
                    </div>
                </Link>
                <Link href="https://www.hackerrank.com/silicon-maze/" target="_blank">
                    <div className="w-full py-3 px-10 cursor-pointer border-2 border-[#e9e736] rounded-lg bg-primary-900 hover:bg-primary-950 duration-200 hover:shadow-[6px_6px_#dc4f3c] text-white text-3xl font-bold text-center">
                        Intel and GDG Tasks
                    </div>
                </Link>
            </div>
        </div>
    )
}