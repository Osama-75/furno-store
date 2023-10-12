import { Link } from "react-router-dom";
import TopBar from "../../components/Navs&Bars/Nav";
import { UserAuth } from "../../components/Firebase/Context";
import { useEffect, useState } from "react";
import { db } from "../../components/Firebase/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import Advantages from "../../components/Pices/Advantages";
import Footer from "../../components/Navs&Bars/Footer";

export default function Cart() {
    const [cartFurnos, setcartFurnos] = useState([]);
    const {user} = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setcartFurnos(doc.data()?.cartShows);
        });
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = cartFurnos.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                cartShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }

    function subTotel(furno) {
        const sub  = parseInt(furno?.price) * furno?.quantity;
        return sub ;
    }
    let subtot = [];
    
    for (let i = 0; i < cartFurnos.length; i++) {
        subtot.push ( parseInt(cartFurnos[i]?.price) * cartFurnos[i]?.quantity) ;
    }
    let totel = subtot.reduce(function (acc, curr) {
        return acc + curr ;
    },5)
    console.log(totel);

    return (
        <div>
            <TopBar />
            <div className="title-shop">
                <div className="absolute top-0 left-0 w-full h-full z-3 bg-black/30"></div>
                <h1 className="z-10 text-white text-5xl font-cairo"> Cart  </h1>
            </div>
            <div className="flex gap-8 container my-10 max-xl:flex-col">
                <div className="w-3/4 max-xl:w-full ">
                    <div className="text-lg font-semibold">
                        <div className="text-left flex gap-5 bg-[#f9e6d0] p-4">
                            <p className="w-5/12">Product</p>
                            <p className="w-2/12">Price</p>
                            <p className="w-2/12">Quantity</p>
                            <p className="w-3/12">Subtotel</p>
                        </div>
                    </div>
                    <div>
                        {cartFurnos.map((furno, key) => (
                            <div key={key} className=" flex text-left gap-5 mt-10 align-middle">
                                <p className="flex w-5/12 gap-5 max-lg:flex-col ">                            
                                    <img
                                        className="movie-img max-w-[120px] max-h-[100px] min-w-[120px] rounded-md " 
                                        src={furno?.img}
                                        alt={furno?.title}
                                    />
                                    <span className=" text-gray-600">{furno?.title}</span>
                                </p>
                                <p className="w-2/12  text-gray-600">{furno?.price}</p>
                                <p className="w-2/12">
                                    <span className=" w-fit h-fit px-3 border-2 border-gray-500 rounded-md">{furno?.quantity}</span>
                                </p>
                                <p className="w-3/12 text-lg font-medium">{subTotel(furno)} $
                                    <span
                                        onClick={()=> deleteShow(furno.id)} 
                                        className='text-[#dd8e34] ml-8 cursor-pointer'> <FontAwesomeIcon icon={faEraser} /> 
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/4 px-14 bg-[#f9e6d0] h-[300px] max-xl:w-1/2 max-sm:w-full" >
                    <h1 className="text-4xl p-5 font-cairo font-semibold">Cart Totels</h1>
                    <h2 className="text-lg font-semibold flex justify-between" > 
                        <span> Subtotel </span>
                        <span className="ml-10 text-gray-600 text-md font-medium">{totel - 5}</span> 
                    </h2>
                    <h2 className="text-xl font-semibold flex justify-between my-4 mb-8">
                        <span> Totel </span>
                        <span className="ml-10 text-[#dd8e34] text-2xl font-medium">{totel}</span> 
                    </h2>
                    <Link 
                        to={"/checkout"}
                        className=" border-2 border-slate-700 rounded-xl py-2 px-8 text-xl hover:bg-sky-500"  
                    >
                        Check Out
                    </Link>
                </div>
            </div>
            <Advantages />
            <Footer />
        </div>
    )
}