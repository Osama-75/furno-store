import Footer from "../../components/Navs&Bars/Footer";
import TopBar from "../../components/Navs&Bars/Nav";
import Advantages from "../../components/Pices/Advantages";
import DataShop from "../../components/Pices/Data/DataStore";
import "./mainpages.css";

export default function Shop() {
    return (
        <>
            <TopBar  />
            <div className="shop">
                <div className="title-shop">
                    <div className="absolute top-0 left-0 w-full h-full z-3 bg-black/30 "></div>
                    <h1 className="z-10 text-white text-5xl font-cairo"> Shop </h1>
                </div>
                <div className="catigory mb-5">
                    <DataShop  />
                </div>
                <div className="Advantages">
                    <Advantages />
                </div>
            </div>
            <Footer />
            
        </>
    )
}
