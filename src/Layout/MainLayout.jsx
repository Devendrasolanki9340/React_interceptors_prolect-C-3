import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"




const MainLayout = () => {
  return (
    <div className="h-screen p-2 flex grid grid-cols-[1fr_6fr]">
      <Navbar/>
      <div className = "h-full p-2">
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
