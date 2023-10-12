import { useParams } from "react-router-dom";
import TopBar from "../../Navs&Bars/Nav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { detailes } from "./furno/detailes";
import "../Pices.css";
import { UserAuth } from "../../Firebase/Context";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from "../../Firebase/firebase";

export default function CardDetailes() {
    // const id = Number(window.location.pathname.replace("/shop/", ""));
    const { id } = useParams();
    const [actiChange, setActiChange] = useState(0);
    const [num, setNum] = useState(1);
    const [img, SetImg] = useState(detailes[id-1].img);
    const [img1, setImg1] = useState(detailes[id-1].img1);
    const [img2, setImg2] = useState(detailes[id-1].img2);
    const [img3, setImg3] = useState(detailes[id-1].img3);
    const [like, setLike] = useState(false);
    const {user} = UserAuth();
    const cartID = doc(db, 'users', `${user?.email}`);

    const cartShows = async (item) => {
        if (user?.email) {
          setLike(!like);
          await updateDoc(cartID, {
            cartShows: arrayUnion({
              id: item.id,
              title: item.title,
              img: item.img,
              price: item.price,
              quantity: num,
            }),
          });
        } else {
          alert('Please log in to save a movie');
        }
      };
    
    function incrNum() {
        return setNum((e) => e + 1);
        
    }
    function decrNum(param) {
        return setNum((e) => e - 1);
    }
    
    function changeImg1() {
        setImg1(img);
        SetImg(img1);
    }
    function changeImg2() {
        setImg2(img);
        SetImg(img2);
    }
    function changeImg3() {
        setImg3(img);
        SetImg(img3);
    }
    return (
        <>
        <TopBar />
        <div className="details flex align-middle gap-3 mt-32 max-lg:flex-col ">
            <div className="photoes flex justify-center w-3/5 text-center my-10 gap-10 
                            max-lg:w-full max-sm:flex-col max-sm:ml-8 max-lg:justify-start max-lg:ml-20 ">
                <div className="photo flex mr-14 flex-col relative max-md:mr-0 max-sm:flex-row max-sm:gap-3" >
                    <img onClick={changeImg1} 
                        className=" w-28 max-md:w-24 h-32  max-md:h-28 mb-8 max-sm:mb-3 rounded-md transition-all"  
                        src={img1} alt="" 
                    />
                    <img onClick={changeImg2}  
                        className=" w-28 max-md:w-24 h-32 max-md:h-28 mb-8 max-sm:mb-2  rounded-md transition-all" 
                        src={img2} alt="" 
                    />
                    <img onClick={changeImg3} 
                        className=" w-28 max-md:w-24 h-32 max-md:h-28 mb-8 max-sm:mb-2  rounded-md transition-all" 
                        src={img3} alt="" 
                    />
                </div>
                <img className="cover w-[25rem] max-md:w-[20rem] h-[28rem] max-md:h-[24rem] rounded-md " src={img} alt="" />
            </div>
            <div className="content w-2/5 my-6 text-start max-lg:w-full max-lg:ml-20 max-sm:ml-8">
                <h1 className="text-2xl font-cairo"> {detailes[id-1].title} </h1>
                <h3 className="mt-6 text-slate-500"> Price: {detailes[id-1].price} </h3>
                <div className="rev mt-6" >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <h3 className="inline text-slate-500"> | </h3>
                    <span className="text-slate-500"> {detailes[id-1].review} </span>
                    <h6 className="my-6 w-2/5"> {detailes[id-1].desc} </h6>
                    <h5 className="my-6 text-slate-500"> Size </h5>
                    <div className="size flex gap-3  my-6" >
                        <button 
                            className={`text-xl h-10 px-5  bg-slate-500 rounded-md transition-all  ${actiChange === 0 ? "act" : ""}`}
                            onClick={() => setActiChange(0)}
                        >  L  </button>
                        <button
                            className={`text-xl h-10 px-4 bg-slate-500 rounded-md transition-all  ${actiChange === 1 ? "act" : ""}`}
                            onClick={() => setActiChange(1)}
                        >  XL  </button>
                        <button 
                            className={`text-xl h-10 px-4 bg-slate-500 rounded-md transition-all  ${actiChange === 2 ? "act" : ""}`}
                            onClick={() => setActiChange(2)}
                        >  XS  </button>
                    </div>
                    <div className="flex py-8 gap-5" >
                        <div className=" border-2 border-slate-700 rounded-lg p-4" >
                            <button onClick={decrNum} className="text-lg mr-4" > - </button>
                            <span className="text-lg mr-4"> {num} </span>
                            <button onClick={incrNum} className="text-lg"> + </button>
                        </div>
                        <button 
                            onClick={ () => cartShows(detailes[id-1])}
                            className=" border-2 border-slate-700 rounded-lg p-4 text-xl hover:bg-sky-500" 
                        > 
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* <h1> {detailes[id-1].title} </h1> */}
        </>
    )
}