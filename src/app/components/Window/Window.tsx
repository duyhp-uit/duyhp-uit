import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface WindowProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  location: {
    x: number | undefined;
    y: number | undefined;
  };
}

const AppWindow = ({ children, open, onClose, location }: WindowProps) => {
  const [openClass, setOpenClass] = useState("opacity-0 invisible");

  useEffect(() => {
    setOpenClass(open ? `opacity-100 visible transform-[scale(1)]` : `opacity-0 invisible `);
  }, [open]);
  return (
    <div
      className={`window ${openClass} absolute top-[5%] z-9999 h-[95%] w-screen transform-[scale(0)] rounded-xl bg-white duration-400 ease-in-out`}
      style={{ transformOrigin: `${location.x}px ${(location.y as number) - 100}px` }}
    >
      <div className="window-header flex gap-2 px-2 py-3">
        <div className="h-4 w-4 rounded-4xl bg-red-400" onClick={onClose}></div>
        <div className="h-4 w-4 rounded-4xl bg-amber-300"> </div>
        <div className="h-4 w-4 rounded-4xl bg-green-400"> </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default AppWindow;
