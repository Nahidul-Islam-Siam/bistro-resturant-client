import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Component/SectionTitle";

import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit ,reset} = useForm()
    const onSubmit =async (data) =>{
        
        console.log(data)

        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            // now send the item data to the server with the image


            console.log(res.data);
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image:res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu', menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
// show success popup
reset()
Swal.fire({
    position: "top-end",
    icon: "success",
    title: `${data.name} is added to the database`,
    showConfirmButton: false,
    timer: 1500
  });
        }
       
        }
        console.log('With image url',res.data)
    }
  
    return (
        <div>
           <SectionTitle heading='Add an Items' subHeading="What's new?"></SectionTitle> 
           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
  
      <label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Recipe Name</span>
  
  </div>
  <input
  
   type="text" 
   placeholder="Recipe Name"
   {...register("name",{required:true})}
    className="input input-bordered w-full " />
  
</label>
{/* category */}
<div className="flex gap-6">
<label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Category*</span>
  
  </div>
  <select className="select select-bordered w-full " {...register("category",{required:true})}>
      <option disabled selected>Select a category</option>
        <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="dessert">Dessert</option>
        <option value="drinks">Drinks</option>
      </select>
  
</label>

{/* price */}
<label className="form-control w-full my-6">
  <div className="label">
    <span className="label-text">Price *</span>
  
  </div>
  <input
  
   type="number" 
   placeholder="price"
   {...register("price",{required:true})}
    className="input input-bordered w-full " />
  
</label>
{/* recipe details */}

</div>
<label className="form-control">
  <div className="label">
    <span className="label-text">Recipe Details</span>
   
  </div>
  <textarea  {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

</label>
    <div className="form-control w-full my-6">
    <input 
     {...register("image")}
    type="file" 
     className="file-input w-full max-w-xs" />
    </div>
     <button className="btn">Add Item <FaUtensils className="ml-4"/></button>
    </form>
           </div>
        </div>
    );
};

export default AddItems;