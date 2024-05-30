import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">

            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
<ul className="menu p-4">

{
    isAdmin ? <>
    
<li><NavLink to='/dashboard/adminHome'><FaHome />Admin  Home</NavLink></li>

<li><NavLink to='/dashboard/addItems'><FaUtensils />AddItems</NavLink></li>

<li><NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart  ({cart.length})</NavLink></li>
<li><NavLink to='/dashboard/review'><FaAd /> Add Review</NavLink></li>
<li><NavLink to='/dashboard/manageItems'><FaList /> Manage Items</NavLink></li>
<li><NavLink to='/dashboard/bookings'><FaBook /> Manage Bookings</NavLink></li>
<li><NavLink to='/dashboard/users'><FaUsers /> All Users</NavLink></li>
    </> 
    :
    <>
    
<li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>

<li><NavLink to='/dashboard/history'><FaCalendar /> No History</NavLink></li>

<li><NavLink to='/dashboard/cart'><FaShoppingCart /> My Cart  ({cart.length})</NavLink></li>
<li><NavLink to='/dashboard/review'><FaAd /> Add Review</NavLink></li>
<li><NavLink to='/dashboard/paymentHistory'><FaList />Real Payment  History</NavLink></li>
    </>
}


{/* shared nav links */}
<div className="divider">


</div>
<li><NavLink to='/'><FaHome />Home</NavLink></li>
<li><NavLink to='/order/salad'><FaSearch />Menu</NavLink></li>
<li><NavLink to='/dashboard/contact'><FaVoicemail />Contact</NavLink></li>
</ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;