import App from "./App"

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
      src: "/images/appstore.png",
    },
    {
      id: 4,
      src: "/images/message.png",
    },
  ]
  return (
    <div
      className="flex items-center fixed justify-center left-1/2 -translate-x-1/2 h-[90px] px-6
	  gap-4 rounded-[24px] border-[1px] border-solid border-[#c4b7b733]
	  backdrop-blur-[32px] bottom-[3%] bg-[#fff8f810] z-10"
    >
      {apps.map((item) => (
        <App key={item.id} iconSrc={item.src} />
      ))}
    </div>
  )
}

export default Dock
