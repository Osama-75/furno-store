
import Footer from "../components/Navs&Bars/Footer";
import TopBar from "../components/Navs&Bars/Nav";
import Landing from "../components/Parts/Landing";
import OurCollection from "../components/Parts/OurCollection";
import OurProduct from "../components/Parts/OurProduct";

export default function Home() {
    return(
        <div>
            <TopBar />
            <Landing />
            <OurCollection  />
            <OurProduct />
            <Footer />
        </div>
    )
}