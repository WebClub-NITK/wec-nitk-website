import * as React from "react";
import Community from "../../public/community.svg";
import Event from "../../public/event.svg";
import Image from "next/image";
import {IconTallymarks} from "@tabler/icons-react";
import NumberTicker from "./ui/number-ticker";

export function AboutUsSection() {
  return (
    <div className="flex flex-col lg:px-2 lg:m-2 lg:py-8">
      <h2 className="text-2xl mb-12 text-center font-semibold text-gray-50">
        Some numbers that matter
      </h2>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 lg:gap-[72px]">
        <div className="flex h-72 lg:w-72 w-full md:w-72 flex-col items-center justify-center rounded-3xl bg-comet px-4 py-8 text-center md:px-6 md:py-10 gap-4">
          <Image priority src={Community} alt="Community" />
          <h1 className="text-5xl font-semibold"><NumberTicker value={100} />+</h1>
          <p className="font-medium">Current Members</p>
        </div>
        <div className="flex h-72 lg:w-72 w-full md:w-72 flex-col items-center justify-center rounded-3xl bg-soft-blue px-4 py-8 text-center md:px-6 md:py-10 gap-4">
          <IconTallymarks className="w-[84px] h-[81px] stroke-1" alt="Community" />
          <h1 className="text-5xl font-semibold"><NumberTicker value={20} />+</h1>
          <p className="font-medium">Years in presence</p>
        </div>
        <div className="flex h-72 lg:w-72 w-full md:w-72 flex-col items-center justify-center rounded-3xl bg-nebula px-4 py-8 text-center md:px-6 md:py-10 gap-4">
          <Image priority src={Event} alt="Community" />
          <h1 className="text-5xl font-semibold"><NumberTicker value={50} />+</h1>
          <p className="tont-medium">Events conducted this year</p>
        </div>
      </div>
    </div>
  );
}
