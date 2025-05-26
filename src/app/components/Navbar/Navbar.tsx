import Clock from "./Clock"
import Info from "./Info"

const Navbar = () => {
  return (
    <div className="top-0 left-0 flex w-screen items-center justify-between px-6 py-2 text-[18px] text-white">
      <Clock />
      <Info />
    </div>
  )
}
export default Navbar
