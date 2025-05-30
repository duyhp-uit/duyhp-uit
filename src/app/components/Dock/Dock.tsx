import AppWindow from "../Window/Window";
import App from "./App";

const Dock = () => {
  const apps = [
    {
      id: 1,
      src: "/images/safari.png",
    },
    {
      id: 2,
      src: "/images/mail.png",
    },
    {
      id: 3,
      src: "/images/terminal.png",
    },
    {
      id: 4,
      src: "/images/message.png",
    },
  ];
  return (
    <div className="fixed bottom-[3%] left-1/2 z-10 flex h-[90px] -translate-x-1/2 items-center justify-center gap-4 rounded-[24px] border-[1px] border-solid border-[#c4b7b733] bg-[#fff8f810] px-6 backdrop-blur-[32px]">
      {apps.map((item) => (
        <App key={item.id} iconSrc={item.src} />
      ))}
    </div>
  );
};

export default Dock;
