interface WindowProps {
  open: boolean
}

const AppWindow = ({ open }: WindowProps) => {
  const openClass = open ? "opacity-100" : "opacity-0"
  return (
    <div
      className={`window ${openClass} absolute top-[5%] z-999999 h-screen w-screen rounded-xl bg-white`}
    >
      <div className="window-header flex gap-2 px-2 py-3">
        <div className="h-4 w-4 rounded-4xl bg-red-400"> </div>
        <div className="h-4 w-4 rounded-4xl bg-amber-300"> </div>
        <div className="h-4 w-4 rounded-4xl bg-green-400"> </div>
      </div>
    </div>
  )
}
export default AppWindow
