import { Helmet } from "react-helmet-async";
import Cover from "../Component/Cover";
import menuImg from '../assets/menu/banner3.jpg'
import PopularMenu from "../Component/PopularMenu";

const Menu = () => {
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
      <Cover img={menuImg} title='our menu'></Cover>
      <PopularMenu/>
      <Cover img={menuImg} title='our menu'></Cover>
      <PopularMenu/>
      <Cover img={menuImg} title='our menu'></Cover>
      <PopularMenu/>
      <Cover img={menuImg} title='our menu'></Cover>
      <PopularMenu/>
   
        </div>
    );
};

export default Menu;