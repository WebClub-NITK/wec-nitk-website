import { LampDemo } from "@/components/lamp-effect";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center bg-slate-950 p-2">
      <Image
        className="z-0 object-contain"
        src="/logo.svg"
        alt="illustration"
        width={500}
        height={500}
      />
    </main>
  );
}
