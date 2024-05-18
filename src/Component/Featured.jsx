import SectionTitle from "./SectionTitle";
import featureImg from '../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading="check it out"
            heading="Featured Item"
            >

            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where can ii get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremque beatae optio ipsum aperiam alias voluptas ullam. Possimus voluptas quidem minus temporibus eaque, beatae deleniti magni et rerum natus in voluptates totam doloremque maxime nemo, dolores, obcaecati ullam iusto consequuntur! Nulla eius aliquid itaque non laboriosam enim, quibusdam minus accusantium.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;