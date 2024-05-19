import { Helmet } from "react-helmet-async";
import Cover from "../Component/Cover";
import menuImg from '../assets/menu/banner3.jpg'
import dessert from '../assets/menu/dessert-bg.jpeg'
import soups from '../assets/menu/soup-bg.jpg'
import salads from '../assets/menu/salad-bg.jpg'
import pizzas from '../assets/menu/pizza-bg.jpg'
import useMenu from "../hooks/useMenu";
import SectionTitle from "../Component/SectionTitle";
import MenuCategory from "../Component/MenuCategory";

const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(item=> item.category === 'dessert')
  const soup = menu.filter(item=> item.category === 'soup')
  const salad = menu.filter(item=> item.category =='salad')
  const pizza = menu.filter(item=> item.category === 'pizza')
  const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
      <Cover img={menuImg} title='our menu'></Cover>
      {/* main cover */}
     <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
   {/* offered menu items */}
   <MenuCategory items={offered} title=''></MenuCategory>
   <MenuCategory items={desserts} title="dessert" coverImg={dessert}></MenuCategory>
   <MenuCategory items={pizza} title={"pizza"} coverImg={pizzas}></MenuCategory>
   <MenuCategory items={salad} title={"salad"} coverImg={salads}></MenuCategory>
   <MenuCategory items={soup} title={"soup"} coverImg={soups}></MenuCategory>
   
        </div>
    );
};

export default Menu;