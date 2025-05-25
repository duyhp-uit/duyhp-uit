import Image from "next/image";

interface AppProps {
  iconSrc: string;
}

const App = ({ iconSrc }: AppProps) => {
  return (
    <button className="application relative">
      <Image
        className="relative! hover:transition-all hover:duration-200 hover:w-[120px]! hover:mb-[46px]"
        src={iconSrc}
        alt="icon"
        fill
      ></Image>
    </button>
  );
};

export default App;
