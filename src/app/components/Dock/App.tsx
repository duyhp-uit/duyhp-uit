import Image from "next/image";
import AppWindow from "../Window/Window";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Terminal from "../Window/Terminal";

interface AppProps {
  iconSrc: string;
}

const App = ({ iconSrc }: AppProps) => {
  const [openWindow, setWindowOpen] = useState(false);
  const appRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={appRef}
        className="application relative"
        onClick={() => {
          setWindowOpen(true);
        }}
      >
        <Image
          className="relative! hover:mb-[46px] hover:w-[120px]! hover:transition-all hover:duration-200"
          src={iconSrc}
          alt="icon"
          fill
        ></Image>
      </button>
      {openWindow &&
        createPortal(
          <AppWindow
            open={openWindow}
            onClose={() => setWindowOpen(false)}
            location={{
              x: appRef.current?.getBoundingClientRect().x,
              y: appRef.current?.getBoundingClientRect().y,
            }}
            children={<Terminal />}
          />,
          document.body
        )}
    </>
  );
};

export default App;
