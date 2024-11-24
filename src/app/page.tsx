import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home Page
      <Image
        src="/home.jpg"
        alt="Car Factory"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
