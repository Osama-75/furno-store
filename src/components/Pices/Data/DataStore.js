import { useState } from "react";
import { Link } from "react-router-dom";
import { faHeart, faLessThanEqual, faCircleArrowRight, faCircleArrowLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { content } from "./furno/contentstore";
import { storebtn } from "../Maps/datastorebtn";
import "../Pices.css";
import { UserAuth } from "../../Firebase/Context";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from "../../Firebase/firebase";


export default function DataShop() {
    const [activeContentIndex, setActiveContentIndex] = useState(0);
    const [showCats, setShowCats] = useState(false);
    const [like, setLike] = useState(false);
    const {user} = UserAuth();
    const furnID = doc(db, 'users', `${user?.email}`);

    function cats() {
        setShowCats(!showCats);
    }

    const saveShow = async (item) => {
        if (user?.email) {
          setLike(!like);
          await updateDoc(furnID, {
            savedShows: arrayUnion({
              id: item.id,
              title: item.title,
              img: item.img,
              price: item.price,
              review: item.review,
            }),
          });
        } else {
          alert('Please log in to save a movie');
        }
      };

    const slideLeft = () => {
        var slider = document.getElementById('tab-content');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('tab-content');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <div className=" relative" id="tabs">
            <p 
                onClick={cats}
                className="filter-icon px-2 py-4 w-full bg-[#f9e6d0] cursor-pointer"
            >
                Filter <FontAwesomeIcon icon={faFilter} />
            </p>
            <menu 
                className={`menu flex align-middle justify-center gap-8 px-2 py-4 w-full bg-[#f9e6d0] max-xl:gap-5 
                ${showCats && "show-catagory" }`} 
            > 
                {storebtn.map((btn, key) => (
                    <button  key={key}
                        className=  {   
                                        `py py-3 px-4 rounded-md bg-[#e7d9ca] cursor-pointer 
                                        transition-all hover:text-white hover:bg-violet-500 
                                        ${activeContentIndex === `${btn.id}` ? "active" : "" }`
                                    }
                        onClick={() => setActiveContentIndex(`${btn.id}`)}
                    >{btn.title}</button>
                ))}
            </menu>
            
            <div className="relative" >
                <FontAwesomeIcon 
                    onClick={slideLeft}
                    className="absolute cursor-pointer z-10 text-sky-500 text-4xl left-0 top-1/3" 
                    icon={faCircleArrowLeft} 
                />
                <div className="cards  mx-10 flex gap-12 relative mt-12 overflow-x-scroll scroll-smooth" id={'tab-content'} >
                    {content[activeContentIndex].map((item, key) => (
                    <div className="cards-card my-6 " key={key}>
                        <img className=" h-80 min-w-full max-w-full rounded-md"  src={item.img} alt="" />
                        <div>
                            <div className="h-28">
                                <h2 className="text-2xl font-cairo font-medium my-2 text-orange-400"> {item.title} </h2>
                                <p className="text-lg text-zinc-950 font-normal min-h-[40%] max-h-[40%]" > {item.desc} </p>
                                <div>
                                    <h2 className="font-cairo text-xl font-medium mt-3 text-cyan-500 ">{item.price}</h2>
                                </div>
                            </div>
                            <div className="add-cart">
                                <Link to={`${item.id}`} className="add-cart-bt hover:bg-violet-600 hover:text-white">Add to Cart </Link>
                                <div className="flex gap-3 mt-2">
                                    <div
                                        onClick={ () => saveShow(item)}
                                        className=  "text-orange-400 hover:text-violet-500"
                                    >
                                        <FontAwesomeIcon icon={faLessThanEqual} /> Compare
                                    </div>
                                    <p
                                        onClick={ () => saveShow(item)}
                                        className=" text-orange-400 hover:text-violet-500"
                                    >
                                        <FontAwesomeIcon  icon={faHeart} /> Like
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <FontAwesomeIcon 
                    onClick={slideRight}
                    className="absolute cursor-pointer z-10 text-sky-500 text-4xl right-0 top-1/3" 
                    icon={faCircleArrowRight} 
                />
            </div>
        </div>
    );
}


