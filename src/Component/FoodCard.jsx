import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const location = useLocation;

  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // TODO: send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      }
      axiosSecure
      .post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      // console.log(food)
    } 
    else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //  sent the user to the login page
          navigate("/login", { state: { from: location?.pathname || "/" } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4">
        {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mt-4"
          >
            ADD CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
