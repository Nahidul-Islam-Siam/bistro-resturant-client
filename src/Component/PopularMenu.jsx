
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(item=> item.category === 'popular')
  
    return (
        <section className="mb-12">
            <SectionTitle 
            heading="From Our Menu"
            subHeading="Popular Items"
            >
                
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item=>
                    <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;