import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collectionbox } from "../Pices/Maps/collectionbox";
import { useNavigate } from "react-router-dom";

export default function OurCollection() {
        const nav = useNavigate();
        const slideLeft = () => {
                var slider = document.getElementById('collection-box');
                slider.scrollLeft = slider.scrollLeft - 500;
        };
        const slideRight = () => {
                var slider = document.getElementById('collection-box');
                slider.scrollLeft = slider.scrollLeft + 500;
        };
    return (
        <div className="our-collection relative">
                <h2 className="text-4xl font-cairo pt-8 "> Our Collection</h2>
                <FontAwesomeIcon 
                        onClick={slideLeft}
                        className="absolute cursor-pointer z-10 text-sky-500 text-4xl left-0 top-1/2 " 
                        icon={faCircleArrowLeft} 
                />

                <div className="mx-10 flex gap-12 relative mt-10 overflow-x-scroll scroll-smooth " id='collection-box' >
                        {collectionbox.map((colec, key) => (
                                <div key={key} className="our-collection-box" >
                                        <img 
                                                className=" min-h-[360px] min-w-[300px] Max-w-[300px] max-h-[360px]" 
                                                src={colec.img} alt={colec.title} 
                                        />
                                        <h3> {colec.title} </h3>
                                        <button onClick={() => nav("/shop")}  className="px-5 mb-3">More</button>
                                </div>
                        ))}
                </div>
                <FontAwesomeIcon 
                    onClick={slideRight}
                    className="absolute cursor-pointer z-10 text-sky-500 text-4xl right-0 top-1/2" 
                    icon={faCircleArrowRight} 
                />
        </div>
    )
}