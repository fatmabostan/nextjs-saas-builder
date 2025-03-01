import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import PriceCard from "@/components/global/price-card";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
      <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
      <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
        <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center">
            <Button size={'lg'} className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">Start For Free Today!</span>
            </Button>
            <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
              Automate Your Work With Fluxie
            </h1>
          </div>
        }/>
      </div>
      </section>
      <InfiniteMovingCards 
      className="md:mt-[20rem] mt-[-100px]"
      items={clients}
      direction="right"
      speed="slow" />
      <section>
        <HeroParallax products={products} />
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap flex-col md:flex-row gap-8 -mt-72 items-center justify-center">
          <PriceCard title="Hobby" price="$0" description=" Get a glimpse of what our software is capable of. Just a heads
                up you'll never leave us after this!" feature1="3 Free automations" feature2="100 tasks per month" feature3="Two-step Actions" />
          <PriceCard title="Pro Plan" price="$29" description="Get a glimpse of what our software is capable of. Just a heads
                up you'll never leave us after this!" feature1="3 Free automations" feature2="100 tasks per month" feature3="Two-step Actions" className="dark:border-[#E2CBFF]"/>
          <PriceCard title="Unlimited" price="$99" description="Get a glimpse of what our software is capable of. Just a heads
                up you'll never leave us after this!" feature1="3 Free automations" feature2="100 tasks per month" feature3="Two-step Actions" />
        </div>
      </section>
    </main>
  );
}
