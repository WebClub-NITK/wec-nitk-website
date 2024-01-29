import { MyComponent } from "@/components/framer/test-component";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyComponent />
      <Button>Click me</Button>
    </main>
  );
}
