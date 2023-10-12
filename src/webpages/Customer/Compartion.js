import { useEffect, useState } from "react";
import { UserAuth } from "../../components/Firebase/Context";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../components/Firebase/firebase";
import TopBar from "../../components/Navs&Bars/Nav";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import Advantages from "../../components/Pices/Advantages";
import Footer from "../../components/Navs&Bars/Footer";

export default function Compartion() {
    const [furnos, setFurnos] = useState([]);
    const {user} = UserAuth();
    const nav = useNavigate();
    
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setFurnos(doc.data()?.savedShows);
        });
    }, [user?.email]);


    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = furnos.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }

    function reviewers(item) {
        const num = Math.round(10 * item?.review);
        return num;
    }

    return (
        <div>
            <TopBar />
            <div className="title-shop">
                <div className="absolute top-0 left-0 w-full h-full z-3 bg-black/30"></div>
                <h1 className="z-10 text-white text-5xl font-cairo"> Product Comparison  </h1>
            </div>
            <div className="container flex gap-5 my-10 " >
                <div className="text-3xl p-8 font-cairo max-sm:p-2 max-sm:text-lg ">
                    <p className="mb-4 "> Go To Product Page For More Products</p>
                    <Link to={"/shop"} className="text-xl border-b-4 max-sm:text-sm " > View More</Link>
                </div>
                <div className="flex flex-wrap gap-8 max-sm:overflow-x-scroll max-sm:flex-nowrap">
                    {furnos.map((item) => (
                        <div
                            key={item.id}
                            className=" h-[25rem] min-w-[240px] border-2"
                        >
                            <img
                                className="movie-img w-60 h-56" 
                                src={item?.img}
                                alt={item?.title}
                            />
                            <div className='movie-des'>
                                <p className='text-xl font-cairo font-medium my-2 text-orange-400'>{item?.title}</p>
                                <p className='text-lg'>{item?.price}</p>
                                <p className='text-lg mb-2'>{item?.review}  
                                    <span className="text-sm text-gray-500" > | {reviewers(item)} Customer review</span>
                                </p>
                                <div className="flex justify-between align-middle px-4" >
                                    <button 
                                        onClick={() => nav(`/shop/${item.id}`)}
                                        className="bg-[#dd8e34] rounded-md px-8 py-3 text-white  hover:bg-sky-500"  
                                    > 
                                        Add To Cart
                                    </button>
                                    <span
                                        onClick={()=> deleteShow(item.id)} 
                                        className='delete-movie'> <FontAwesomeIcon icon={faEraser} /> 
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Advantages />
            <Footer />
        </div>
    );
}
