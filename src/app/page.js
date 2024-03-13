import Image from "next/image";
import { Button } from "@/components/ui/button"
import WhatWeDoSection from "@/components/whatWeDoSection/SetionContainer";
import TestAnimation from "@/components/framer/test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
      <TestAnimation />
      <WhatWeDoSection />
    </main>
  );
}
