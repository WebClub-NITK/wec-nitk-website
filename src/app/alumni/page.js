import { BackgroundBeams } from "@/components/background-beams";
import { EvervaultCard, Icon } from "@/components/ui/team-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen items-center flex-wrap gap-4 justify-center bg-secondary-800  p-2">
      <div className="w-full border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

        <EvervaultCard text="hover" />

        <div className="flex gap-2">
          <h2 className="text-white mt-4 text-lg font-light">Shubham Rasal</h2>
          <p className="text-sm border text-center font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Systems Co-Chair
          </p>
        </div>
        <div className="flex">
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="mailto:bluequbits@gmail.com">Mail</a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://www.linkedin.com/in/shubham-rasal-1b1b3b1b9/">
              LinkedIn
            </a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://github.com/Shubham-Rasal">Github</a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://x.com/bluequbit">X</a>
          </p>
        </div>
      </div>
      <div className="w-full border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

        <EvervaultCard text="hover" />

        <div className="flex gap-2">
          <h2 className="text-white mt-4 text-lg font-light">Shubham Rasal</h2>
          <p className="text-sm border text-center font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Systems Co-Chair
          </p>
        </div>
        <div className="flex">
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="mailto:bluequbits@gmail.com">Mail</a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://www.linkedin.com/in/shubham-rasal-1b1b3b1b9/">
              LinkedIn
            </a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://github.com/Shubham-Rasal">Github</a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://x.com/bluequbit">X</a>
          </p>
        </div>
      </div>
      <div className="w-full border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

        <EvervaultCard text="hover" />

        <div className="flex gap-2">
          <h2 className="text-white mt-4 text-lg font-light">Shubham Rasal</h2>
          <p className="text-sm border text-center font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Systems Co-Chair
          </p>
        </div>
        <div className="flex">
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="mailto:bluequbits@gmail.com">Mail</a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://www.linkedin.com/in/shubham-rasal-1b1b3b1b9/">
              LinkedIn
            </a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://github.com/Shubham-Rasal">Github</a>
          </p>
          <p className="text-sm underline underline-offset-4 text-center font-light mt-4 text-white px-2 py-0.5">
            <a href="https://x.com/bluequbit">X</a>
          </p>
        </div>
      </div>
    </main>
  );
}
