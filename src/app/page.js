import { BackgroundBeams } from "@/components/background-beams";
import { AccordionDemo } from "@/components/faq";
import Footer from "@/components/footer";
import { Accordion } from "@radix-ui/react-accordion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="flex h-screen flex-col items-start justify-center  bg-secondary-800">
        <BackgroundBeams />
        <div className="relative w-full flex items-center justify-center">
          <Image
            className="absolute z-0 opacity-85 object-contain  "
            src="/logo.svg"
            alt="illustration"
            width={400}
            height={400}
          />
          <div
            className=" absolute h-24 w-full border-y 
          bg-secondary-800 z-10 opacity-80
          border-cyan-900 text-white lg:text-6xl font-bold text-center flex  justify-center items-center"
          >
            We are Web Enthusiasts` Club NITK
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-4 justify-between w-full h-screen bg-secondary-800 text-white">
        <span className="lg:text-6xl text-3xl font-bold py-12">
          FAQ
        </span>
        <div className="flex flex-col lg:flex-row w-full h-full ">
          <p className="lg:w-1/2 px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quos similique quia aliquid dolorem neque molestiae libero fugit at
            fugiat, natus dolores harum explicabo reiciendis et odio, cumque
            amet quae.
          </p>
          <AccordionDemo />
        </div>
      </section>
    </main>
  );
}
