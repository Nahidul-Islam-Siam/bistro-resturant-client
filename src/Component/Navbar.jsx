import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiShoppingCart } from "react-icons/ci";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const [cart] = useCart()
  const handleLogout = ()=>{
    logout()
  }
    const links = <>
     <li><Link to='/'>HOME</Link></li>
    <li><Link  to='/menu'>OUR MENU</Link></li>
    <li><Link  to='/order/salad'>ORDER FOOD</Link></li>
    <li><Link  to='/secret'>SECREAT</Link></li>
 <li>
 <Link to='/dashboard/cart'>
 <button className="btn btn-outline">
 <CiShoppingCart className="mr-2"/>
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
 </Link>
 </li>
  { user ?
   <li onClick={handleLogout}><Link >LOG OUT</Link></li>:<li><Link  to='/login'>LOGIN</Link></li>}
   
    
     
    </>
    return (
        
<div className="fixed z-10 left-0 right-0 max-w-screen-xl mx-auto items-center justify-center">
<div className="navbar bg-black bg-opacity-30 text-white ">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 *:">
{links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
</div>

    );
};

export default Navbar;