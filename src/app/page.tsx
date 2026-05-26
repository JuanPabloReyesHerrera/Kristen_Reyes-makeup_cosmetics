import { Hero } from "@/features/home/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between bg-amber-600 dark:bg-black sm:items-start">
      <Hero imageSrc="/assets/hero.jpeg" />
    </main>
  );
}
