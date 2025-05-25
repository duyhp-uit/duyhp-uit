import Clock from "./Clock"
import Info from "./Info"

const Navbar = () => {
  return (
    <div className="text-white w-screen top-0 left-0 py-2 px-6 flex text-[18px] items-center justify-between">
      <Clock />
      <Info />
    </div>
  )
}
export default Navbar
