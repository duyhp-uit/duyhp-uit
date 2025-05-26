import App from "./App"

interface DockProps {
  onClick: () => void
}

const Dock = ({ onClick }: DockProps) => {
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
      src: "/images/appstore.png",
    },
    {
      id: 4,
      src: "/images/message.png",
    },
  ]
  return (
    <div className="fixed bottom-[3%] left-1/2 z-10 flex h-[90px] -translate-x-1/2 items-center justify-center gap-4 rounded-[24px] border-[1px] border-solid border-[#c4b7b733] bg-[#fff8f810] px-6 backdrop-blur-[32px]">
      {apps.map((item) => (
        <App onClick={onClick} key={item.id} iconSrc={item.src} />
      ))}
    </div>
  )
}

export default Dock
