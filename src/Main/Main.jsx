import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";


const Main = () => {
    return (
        <div className="overflow-hidden scroll-smooth">
            <Navbar/>
         <div>
         <Outlet/>
         </div>
            <Footer/>
        </div>
    );
};

export default Main;