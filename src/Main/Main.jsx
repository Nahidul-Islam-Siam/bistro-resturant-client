import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";


const Main = () => {
    return (
        <div >
            <Navbar/>
         <div>
         <Outlet/>
         </div>
            <Footer/>
        </div>
    );
};

export default Main;