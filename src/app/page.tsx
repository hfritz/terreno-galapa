import { Contact } from "@/components/sections/contact";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { PropertySpecs } from "@/components/sections/property-specs";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertySpecs />
      <Location />
      <Gallery />
      <Contact />
    </>
  );
}
