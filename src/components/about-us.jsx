import * as React from "react";
import Community from "../../public/community.svg";
import School from "../../public/school.svg";
import Event from "../../public/event.svg";
import Image from "next/image";

export function AboutUsSection() {
  return (
    <div className="flex flex-col lg:px-2 lg:m-2 lg:py-8">
      <h2 className="text-2xl mb-12 text-center font-semibold text-gray-50">
        Some numbers that matter
      </h2>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 lg:gap-[72px]">
        <div className="flex h-72 lg:w-72 w-full md:w-72 flex-col items-center justify-center rounded-3xl bg-comet px-4 py-8 text-center md:px-6 md:py-10 gap-4">
          <Image priority src={Community} alt="Community" />
          <h1 className="text-5xl font-semibold">200,000+</h1>
          <p className="font-medium">Members</p>
        </div>
        <div className="flex h-72 lg:w-72 w-full md:w-72 flex-col items-center justify-center rounded-3xl bg-soft-blue px-4 py-8 text-center md:px-6 md:py-10 gap-4">
          <Image priority src={School} alt="Community" />
          <h1 className="text-5xl font-semibold">5,500+</h1>
          <p className="font-medium">Years in presence</p>
        </div>
        <div className="flex h-72 lg:w-72 w-full md:w-72 flex-col items-center justify-center rounded-3xl bg-nebula px-4 py-8 text-center md:px-6 md:py-10 gap-4">
          <Image priority src={Event} alt="Community" />
          <h1 className="text-5xl font-semibold">1500+</h1>
          <p className="tont-medium">Total events conducted</p>
        </div>
      </div>
    </div>
  );
}
