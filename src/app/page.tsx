import Image from "next/image";
import Hero from "@/components/Hero";
import HomeImg from "@/../public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imgData={HomeImg}
        imgAlt="car factory"
        title="professional cloud hosting"
      />
    </div>
  );
}
