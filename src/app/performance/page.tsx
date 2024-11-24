import Hero from "@/components/Hero";
import HomeImg from "@/../public/performance.jpg";

export default function Performance() {
  return (
    <div>
      <div>
        <Hero
          imgData={HomeImg}
          imgAlt="Performance"
          title="professional cloud hosting"
        />
      </div>
    </div>
  );
}
