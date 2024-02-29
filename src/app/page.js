import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-between bg-secondary-blue">
      <nav className="h-16 w-full z-10 bg-white"></nav>

      <div className="absolute h-full w-full flex items-center justify-end">
        <Image
          className="opacity-50 relative z-10 object-cover"
          src="/logo.png"
          alt="illustration"
          width={500}
          height={500}
        />
      </div>
      <div className="h-screen flex justify-end items-center w-full relative">
          <div className="h-16 w-1/2 bg-white">

          </div>
      </div>
    </main>
  );
}
