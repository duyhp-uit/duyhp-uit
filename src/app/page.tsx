import Dock from "src/app/components/Dock/Dock";
import Navbar from "src/app/components/Navbar/Navbar";
import { Lexend } from "next/font/google";
const lexend = Lexend({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`bg-[url(/iridescence.jpg)] bg-cover bg-center h-screen w-screen ${lexend.className}`}
    >
      <Navbar />
      <Dock></Dock>
    </div>
  );
}
