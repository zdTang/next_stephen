import Image from "next/image";
import HomeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <Image src={HomeImg} alt="Car Factory" />
    </div>
  );
}
