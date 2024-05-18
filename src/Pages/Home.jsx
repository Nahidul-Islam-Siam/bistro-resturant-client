
import { Helmet } from "react-helmet-async";
import Banner from "../Component/Banner";
import Featured from "../Component/Featured";
import PopularMenu from "../Component/PopularMenu";
import Slider from "../Component/Slider";
import Testimonials from "../Component/Testimonials";



const Home = () => {
  
    return (
        <div>
               <Helmet>
        <title>Bistro Boss | Home</title>
        
      </Helmet>
            <Banner/>
            <Slider/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;