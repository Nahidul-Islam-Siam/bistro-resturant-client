import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const FoodCard = ({item}) => {
  const {name, image, price, recipe} = item
  const {user} = useContext(AuthContext)
  const handleAddToCart = food =>{
   if(user && user.email){
// TODO: send cart item to the database
   }else{
    Swal.fire({
      title: "Please login to add to the cart?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
   }
  }
   
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4">{price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
            onClick={()=>handleAddToCart(item)}
             className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mt-4">ADD CART</button>
          </div>
        </div>
      </div>
    ); 
};

export default FoodCard;