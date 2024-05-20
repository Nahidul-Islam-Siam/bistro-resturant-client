import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";


const Main = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div className="overflow-hidden scroll-smooth">
          {noHeaderFooter || <Navbar></Navbar>}
         <div>
         <Outlet/>
         </div>
          {noHeaderFooter ||  <Footer/>}
        </div>
    );
};

export default Main;