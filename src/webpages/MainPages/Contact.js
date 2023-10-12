import TopBar from "../../components/Navs&Bars/Nav";
import { faClock, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Advantages from "../../components/Pices/Advantages";
import Footer from "../../components/Navs&Bars/Footer";



export default function Contact() {
    return (
        <div className="contact">
            <TopBar />
            <div className="title-shop">
                <div className="absolute top-0 left-0 w-full h-full z-3 bg-black/30"></div>
                <h1 className="z-10 text-white text-5xl font-cairo"> Contact </h1>
            </div>
            <div className="contact-head my-5 py-5 text-center">
                <h2 className="pt-12 mb-4 font-semibold font-cairo text-2xl"> Get In Touch With Us </h2>
                <p className="font-cairo text-sky-500 text-lg"> 
                    For More Information About Our Product & Services. Please Feel Free To Drop Us 
                </p>
                <p className="font-cairo text-sky-500 text-lg"> 
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate ! 
                </p>
            </div>


            <div className="container flex justify-center mb-12 max-lg:flex-col max-lg:mx-auto max-lg:gap-16">
                <div className=" w-1/3 pl-12 flex flex-col gap-10 max-lg:w-full" >
                    <div className="flex flex-col">
                        <div className="flex gap-5 text-lg font-cairo text-violet-600" >
                            <FontAwesomeIcon icon={faLocationDot} />
                            <h3> Address</h3>
                        </div>
                        <div className="text-sky-500">Egypt, Cairo,
                            <span className="block text-black"> Cairo Vestival Mall </span>
                            <span className="block text-black"> City Stars Mall </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-5 text-lg font-cairo text-violet-600" >
                            <FontAwesomeIcon  icon={faClock} />
                            <h3> Working Time </h3>
                        </div>
                        <div className="text-sky-500">Business Hours:
                            <span className="block text-black"> From 10:00 To 18:00 </span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-5 text-lg font-cairo text-violet-600">
                            <FontAwesomeIcon  icon={faPhoneVolume} />
                            <h3> Contact Us </h3>
                        </div>
                        <div  className="text-sky-500">Phones Numbers
                            <span className="block text-black">+20123456789</span>
                            <span className="block text-black">+20198765432</span>
                        </div>
                    </div>
                </div>
                <form className=" w-1/3 pr-12 max-lg:w-full max-lg:mx-14">
                    <div className="" >
                        <label className="block text-left text-violet-600 mb-5 max-lg:mr-20">Name:</label>
                        <input 
                            className="w-full border border-black h-14 mb-8 rounded-md pl-5 max-lg:w-1/2 max-sm:w-2/3"
                            type="text" placeholder="Name..." 
                            required id="name"
                        />
                    </div>
                    <div className="person" >
                        <label className="block text-left text-violet-600 mb-5">Email:</label>
                        <input 
                            className="w-full border border-black h-14 mb-8 rounded-md pl-5 max-lg:w-1/2 max-sm:w-2/3"
                            type="email" placeholder="Email..." 
                            required id="email"
                        />
                    </div>
                    <div className="person" >
                        <label className="block text-left text-violet-600 mb-5">Subject:</label>
                        <input 
                            className="w-full border border-black h-14 mb-8 rounded-md pl-5 max-lg:w-1/2 max-sm:w-2/3"
                            type="text" placeholder="This is an optional..." id="email"
                        />
                    </div>
                    <div className="message" >
                        <label className="block text-left text-violet-600 mb-5">Message:</label>
                        <input
                            className="w-full border border-black h-24 mb-8 rounded-md pl-5 max-lg:w-1/2 max-sm:w-2/3"
                            type="text" placeholder="Tell Us About Your Needs..." 
                            required id="message"
                        />
                    </div>
                    <div className="contact-bt" >
                        <button 
                            className="w-2/5 rounded-md bg-[#ffbe73] transition-all py-4 hover:bg-sky-500" 
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                    </form>
            </div>
            <Advantages />
            <Footer/>
        </div>
    );
}