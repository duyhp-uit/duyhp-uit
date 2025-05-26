import Image from "next/image"

interface AppProps {
  iconSrc: string
  onClick: () => void
}

const App = ({ iconSrc, onClick }: AppProps) => {
  return (
    <button className="application relative" onClick={onClick}>
      <Image
        className="relative! hover:mb-[46px] hover:w-[120px]! hover:transition-all hover:duration-200"
        src={iconSrc}
        alt="icon"
        fill
      ></Image>
    </button>
  )
}

export default App
