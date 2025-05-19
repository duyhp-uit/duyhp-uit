import Dock from "src/app/components/Dock/Dock";
import Navbar from "src/app/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-[url(/iridescence.jpg)] bg-cover bg-center h-screen w-screen">
      <Navbar />
      <Dock></Dock>
    </div>
  );
}
