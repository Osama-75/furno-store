import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pices.css";
import { faHandHoldingHeart, faHandsHoldingCircle, faHeadset, faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function Advantages() {
    return (
        <div className="bg-[#f9e6d0] py-12 max-xl:pl-14">
            <div className="advan-con container">
                <div className="flex align-middle  gap-5">
                    <FontAwesomeIcon className="text-4xl hover:text-[#48d9f3]" icon={faTrophy} />
                    <div >
                        <h3 className="font-bold"> High Quality</h3>
                        <p className=" text-zinc-500"> Crafted from top materials</p>
                    </div>
                </div>
                <div className="flex align-middle  gap-5">
                    <FontAwesomeIcon className="text-4xl hover:text-[#48d9f3]" icon={faHandsHoldingCircle} />
                    <div >
                        <h3 className="font-bold"> Warrant Protection </h3>
                        <p className=" text-zinc-500"> Over 2 years </p>
                    </div>
                </div >
                <div className="flex align-middle  gap-5">
                    <FontAwesomeIcon className="text-4xl hover:text-[#48d9f3]" icon={faHandHoldingHeart} />
                    <div >
                        <h3 className="font-bold"> Free Shoping</h3>
                        <p className=" text-zinc-500"> Order Over 100$ </p>
                    </div>
                </div>
                <div className="flex align-middle  gap-5">
                    <FontAwesomeIcon className="text-4xl hover:text-[#48d9f3]" icon={faHeadset} />
                    <div >
                        <h3 className="font-bold"> 24/7 Support</h3>
                        <p className=" text-zinc-500"> Dedicated Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}