import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import { Outlet } from 'react-router-dom'

const FrontLayout = () => {
  return (
    <>
    <Navbar />
        <div className="sm:pt-20 lg:pt-8">
            {<Outlet />}
        </div>
    <Footer />
    </>
  )
}

export default FrontLayout