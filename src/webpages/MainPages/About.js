import { Link } from "react-router-dom";
import TopBar from "../../components/Navs&Bars/Nav";
import about1 from "./images/About01.jpg";
import about2 from "./images/about2.jpg";
import './mainpages.css';
import Advantages from "../../components/Pices/Advantages";
import Footer from "../../components/Navs&Bars/Footer";


export default function About() {
    return (
        <div className="about">
            <TopBar />
            <div className="title-shop">
                <div className="absolute top-0 left-0 w-full h-full z-3 bg-black/30"></div>
                <h1 className="z-10 text-white text-5xl font-cairo"> About Us </h1>
            </div>
            <div className=" text-center pt-14 font-cairo">
                <h2 className="text-2xl"> A brand built on the love of craftmanship, </h2>
                <h2 className="text-2xl"> quality and outstanding customer service </h2>
            </div>
            <div className="mt-14 pt-14 flex max-lg:flex-col" >
                <div className="about-serve-info w-1/2 p-24 max-xl:p-8 max-lg:w-full " >
                    <h4 className="mb-10"> From a studio in london a global brand with over 400 outlets </h4>
                    <p className="mb-10"> When we started Furno, the idea was simple. Make high quality furniture 
                        affordable for the mass market.
                    </p>
                    <p className="mb-10"> Handmade, and lovingly crafted furniture and homeware is what we live,
                        breathe and design so our branches become the hotbed for the Egyption
                        interior design community.
                    </p>
                    <Link to={"/contact"} className="bg-[#dd8e34] rounded-md px-5 py-3 text-white mt-10 hover:bg-sky-500"> 
                        Get In Touch
                    </Link>
                </div>
                <div className="w-1/2 max-lg:w-full" >
                    <img className="max-w-full" src={about1} alt="About Us" />
                </div>
            </div>
            <div className="mt-14 pt-14 flex max-lg:flex-col" >
                <div className="w-1/2 max-lg:w-full" >
                    <img className="max-w-full" src={about2} alt="About Us" />
                </div>
                <div className="about-serve-info w-1/2 p-24 max-xl:p-10 max-lg:w-full" >
                    <h4 className="mb-10"> Our service isn't just personal, it's actually hyper personally exquisite </h4>
                    <p className="mb-10"> When we started Furno, the idea was simple. Make high quality furniture 
                        affordable for the mass market.
                    </p>
                    <p className="mb-10"> Handmade, and lovingly crafted furniture and homeware is what we live,
                        breathe and design so our branches become the hotbed for the Egyption
                        interior design community.
                    </p>
                    <Link to={"/contact"} className="bg-[#dd8e34] rounded-md px-5 py-3 text-white mt-10 hover:bg-sky-500"> 
                        Get In Touch
                    </Link>
                </div>
            </div>
            <h4 className="pb-10 text-center pt-14 font-cairo text-2xl text-sky-500"> What makes our brand different </h4>
            <Advantages />
            <Footer />
        </div>
        
    );
}