import { NavLink, useNavigate } from "react-router-dom";
import "./Navs.css"
import { useEffect, useState } from "react";
import { UserAuth } from "../Firebase/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faCircleUser, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
    const nav = useNavigate();
    const [handleShow, setHandleShow] = useState(false);
    const [showBars, setShowBars] = useState(false);
    const {user, logOut} = UserAuth();

    function bars() {
        setShowBars(!showBars);
    }

    async function handelLogout() {
        try {  
                await logOut();
                nav("/login");
            } catch (err) {
                console.log(err);
            }
    };

    const transionNav = () => {
        if (window.scrollY > 100) {
            setHandleShow(true);
        } else {
            setHandleShow(false);
        }
    } 
    useEffect(() => {
        window.addEventListener("scroll", transionNav);
        return () => window.removeEventListener("scroll", transionNav);
    }, []);
    return(
        <div className={`top-bar ${handleShow && "nav-black"}`} >
            <div className="flex items-center w-1/3 max-xl:w-1/4" >
                <img onClick={() => nav("/") } className="w-14 mr-3 ml-4 cursor-pointer"  src= {require("./Images/logo.png")}  alt="" />
                <h3 onClick={() => nav("/")} className="font-cairo text-3xl font-bold text-sky-500 cursor-pointer">Furno</h3>
                <FontAwesomeIcon 
                    onClick={bars}
                    className="bar-link absolute top-8 right-8 opacity-0" icon={faBars} />
            </div>
            <div className={`right-side flex w-2/3 justify-between max-xl:w-3/4 ${showBars && "show-bar" }`}>
                <div className="home-link flex align-middle justify-between m-2">
                    <NavLink className="top-bar-link "  to={"/"}>Home</NavLink>
                    <NavLink className="top-bar-link " to={"/shop"} >Shop</NavLink>
                    <NavLink className="top-bar-link " to={"/about"}>About</NavLink>
                    <NavLink className="top-bar-link " to={"/contact"}>Contact</NavLink>
                </div>
                <div className="customer flex align-middle justify-between">
                    <NavLink className="top-bar-link " to={"/compartion"} > <FontAwesomeIcon icon={faHeart} /></NavLink>
                    <NavLink className="top-bar-link" to={"/Cart"} > <FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    <div className="top-bar-link">
                    {user?.email ? 
                        (<button onClick={handelLogout}> <FontAwesomeIcon className="mr-2" icon={faCircleUser} />Logout </button> ) : 
                        <NavLink to={"/login"}> <FontAwesomeIcon className="mr-2" icon={faCircleUser} /> Login</NavLink>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

