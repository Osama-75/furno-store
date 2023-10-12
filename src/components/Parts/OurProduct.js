import { detailes } from "../Pices/Data/furno/detailes";
import { Link } from "react-router-dom";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Parts.css";

export default function OurProduct() {
    let subtot = [];
    
    for (let i = 0; i < 8 ; i++) {
        subtot.push (detailes[Math.floor(Math.random() * detailes.length-1)]) ;
    }
    const slideLeft = () => {
        var slider = document.getElementById('product-box');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('product-box');
        slider.scrollLeft = slider.scrollLeft + 500;
    }; 
    return (
        <div className="our-product relative">
                <h2 className="text-4xl font-cairo pt-8 "> Our Products</h2>
                <FontAwesomeIcon 
                        onClick={slideLeft}
                        className="arrow absolute cursor-pointer z-10 text-sky-500 text-4xl left-0 top-1/2 opacity-0" 
                        icon={faCircleArrowLeft} 
                />
                <div className="our-pro-cards text-center mx-10 flex gap-12 relative mt-12 flex-wrap" id="product-box">
                    {subtot.map((item, key) => (
                    <div className="cards-card my-6 " key={key}>
                        <img className=" min-w-[300px] Max-w-[300px] h-80 rounded-md"  src={item.img} alt="" />
                        <div>
                            <div className="h-28">
                                <h2 className="text-2xl font-cairo font-medium my-4 text-orange-400"> {item.title} </h2>
                                <p className="text-lg text-zinc-950 font-normal min-h-[40%] max-h-[40%]" > {item.desc} </p>
                                <div>
                                    <h2 className="font-cairo text-xl font-medium my-4 text-cyan-500 ">{item.price}</h2>
                                </div>
                            </div>
                            <div className="add-cart">
                                <Link to={`/shop/${item.id}`} className="add-cart-bt hover:bg-violet-600 text-white">Add to Cart </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <FontAwesomeIcon 
                    onClick={slideRight}
                    className="arrow absolute cursor-pointer z-10 text-sky-500 text-4xl right-0 top-1/2 opacity-0" 
                    icon={faCircleArrowRight} 
                />
        </div>
    )
}

// overflow-x-scroll scroll-smooth