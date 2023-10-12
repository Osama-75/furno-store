import { useEffect, useState } from "react";
import { UserAuth } from "../../components/Firebase/Context";
import TopBar from "../../components/Navs&Bars/Nav";
import { db } from "../../components/Firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function CheckOut() {
    const [cartFurnos, setcartFurnos] = useState([]);
    const [bank, setBank] = useState(true);
    const [cash, setCash] = useState(false);
    const {user} = UserAuth();

    
    function bankTransfer() {
        setBank(true);
        setCash(false);
    }
    function cashdel() {
        setBank(false);
        setCash(true);
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setcartFurnos(doc.data()?.cartShows);
        });
    }, [user?.email]);

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
    return (
        <div className="checkout">
            <TopBar />
            <div className="title-shop">
                <div className="absolute top-0 left-0 w-full h-full z-3 bg-black/30"></div>
                <h1 className="z-10 text-white text-5xl font-cairo"> Check Out  </h1>
            </div>
            <div className="flex container" >
                <div className="w-3/5 my-10 text-left">
                    <h2  className="text-3xl py-5 font-cairo font-semibold"> Billing details</h2>
                    <form className="flex flex-col gap-6" >
                        <div className="flex  justify-between w-3/4">
                            <div>
                                <label className="block text-lg font-md text-gray-500 mb-3"  htmlFor="first"> First Name</label>
                                <input className="block p-5 rounded-md  w-full border-2" type="text" id="first" />
                            </div>
                            <div>
                                <label className="block text-lg font-md text-gray-500 mb-3"  htmlFor="last"> Last Name</label>
                                <input className="block p-5 rounded-md  w-full border-2" type="text" id="last" />
                            </div>
                        </div>
                        <div >
                            <label 
                                className="block text-lg font-md text-gray-500 mb-3" 
                                htmlFor="company">Company Name (Optiona)</label>
                            <input className="block p-5 rounded-md  w-3/4 border-2" type="text" id="company"/>
                        </div>
                        <div>
                            <label className="block text-lg font-md text-gray-500 mb-3">Country / Region</label>
                            <input className="block p-5 rounded-md  w-3/4 border-2"type="text" id="country"/>
                        </div>
                        <div>
                            <label className="block text-lg font-md text-gray-500 mb-3">Street address</label>
                            <input className="block p-5 rounded-md  w-3/4 border-2" type="text" id="address"/>
                        </div>
                        <div>
                            <label className="block text-lg font-md text-gray-500 mb-3">City / Town</label>
                            <input className="block p-5 rounded-md  w-3/4 border-2" type="text" id="city"/>
                        </div>
                        <div>
                            <label className="block text-lg font-md text-gray-500 mb-3">ZIP code</label>
                            <input className="block p-5 rounded-md  w-3/4 border-2" type="number" id="zip"/>
                        </div>
                        <div>
                            <label className="block text-lg font-md text-gray-500 mb-3">Phone</label>
                            <input className="block p-5 rounded-md  w-3/4 border-2" type="number" id="phone"/>
                        </div>
                        <div>
                            <label className="block text-lg font-md text-gray-500 mb-3">Email</label>
                            <input className="block p-5 rounded-md  w-3/4 border-2" type="email" id="email"/>
                        </div>
                        <input 
                            className="block p-5 rounded-md  w-3/4 border-2"
                            type="text" id="info" placeholder="Additional information"/>
                    </form>
                </div>
                <div className="w-2/5 py-20 " >
                    <div className="border-b-2">
                        <h2 className="text-2xl font-semibold flex justify-between mb-6" > 
                            <span> Product </span>
                            <span >Suptotel</span> 
                        </h2>
                        {cartFurnos.map((furno, key) => (
                            <h2 key={key} className="text-md font-medium text-gray-600 flex justify-between" > 
                                <span> {furno?.title} × {furno?.quantity} </span>
                                <span >{subTotel(furno)}</span> 
                            </h2>
                        ))}
                        <h2 className="text-lg font-semibold flex justify-between" > 
                            <span> Subtotel </span>
                            <span className=" text-gray-600 text-md font-medium">{totel - 5}</span> 
                        </h2>
                        <h2 className="text-xl font-semibold flex justify-between my-4 mb-8">
                            <span> Totel </span>
                            <span className=" text-[#dd8e34] text-2xl font-medium">{totel}</span> 
                        </h2>
                    </div>
                    <div className="my-10">
                        <p className="text-gray-600"> 
                            Make your Payment directly into our bank account. Please use your Order ID as the Payment
                            reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                        <button 
                            onClick={bankTransfer}
                            className= 'block mt-8 mb-5'
                        >
                            <FontAwesomeIcon className= { bank ? 'text-sky-500' : ''} icon={faCircleCheck} /> Direct Bank Transfer 
                        </button>
                        <button 
                            onClick={cashdel}
                            className="block  mb-8" 
                        > 
                            <FontAwesomeIcon className= { cash ? 'text-sky-500' : ''} icon={faCircleCheck} /> Cash On Deilvery 
                        </button>
                        <p className="text-gray-600 mb-8">
                            Your Personal data will be used to support your experience throughout this website, to manage 
                            access to your account
                        </p>
                        <button 
                            className=" border-2 border-slate-700 rounded-xl py-2 px-8 text-xl hover:bg-sky-500"  
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
<FontAwesomeIcon icon={faCircleCheck} />