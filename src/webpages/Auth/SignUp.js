import { useState } from "react";
import './Auth.css';
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "../../components/Parts/Loading";
import { UserAuth } from "../../components/Firebase/Context";

export default function SighUp() {

    const {user, signUp} = UserAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [loading, setLoading] =useState(false);
    const nav = useNavigate();


    
    // handle submit
    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        try {  
                await signUp(email, password);
                nav("/");
            } catch (err) {
                setLoading(false);
                    setErr(err);
            }
    }

    return(
        <>
        {loading && <LoadingPage/> }
        <div className="papa bg-[#7FBDBA] h-screen pt-8">
                <div className="row" >
                    <form  onSubmit={submit}>
                        <div className="flex items-center" >
                            <img 
                                className="logo w-14 mr-3 ml-4 cursor-pointer"  
                                src= {require("../../components/Navs&Bars/Images/logo.png")}  alt="" 
                            />
                            <h3 className="logo-f font-cairo text-3xl font-bold text-sky-500 cursor-pointer">Furno</h3>
                        </div>
                        <h2 className="des absolute right-20 top-28 text-[#414A39] text-2xl"> DISCOVERING </h2>
                        <h3 className="fur absolute right-16 top-36 text-[#7FBDBA] text-xl"> Your Dream Furniture </h3>
                        <div className="w-3/4 ml-10 absolute top-28">
                            <h1 className="signup w-3/4 text-left mb-4 text-yellow-950 font-cairo text-3xl"> Sign Up
                                <span className="text-lg text-slate-500 log-in" > Or have accont ? 
                                    <Link className=" text-sky-500" to={"/login"}> Log in</Link>
                                </span>
                            </h1>
                            <div className="minpapa relative mb-10">
                                <input 
                                    className="block p-5 rounded-md bg-[#F7EEDD] w-1/2 border-2 border-transparent"
                                    id="name" type="text"  placeholder="Name..." 
                                    value={name} onChange={(e) => setName(e.target.value)} 
                                    required
                                />
                                <label 
                                    className="block absolute top-[-20] left-0 text-lg font-semibold text-slate-600 transition-all" 
                                    htmlFor="name"> Name: </label>
                            </div>
                        
                            <div className="minpapa relative my-10">
                                <input 
                                    className="block p-5 rounded-md bg-[#F7EEDD] w-1/2 border-2 border-transparent"
                                    id="email" type="email"  placeholder="Email..." 
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label
                                    className="block absolute top-[-20] left-0 text-lg font-semibold text-slate-600 transition-all"
                                    htmlFor="email"> Email: </label>
                            </div>

                            <div className="minpapa relative my-10">
                                <input 
                                    className="block p-5 rounded-md bg-[#F7EEDD] w-1/2 border-2 border-transparent"
                                    id="password" type="password"  placeholder="Password..." 
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    required minLength={8} 
                                />
                                <label 
                                    className="block absolute top-[-20] left-0 text-lg font-semibold text-slate-600 transition-all"
                                    htmlFor="password"> Password: </label>
                            </div>
                            <div className="btt w-1/2" >
                                <button 
                                    className="bg-[#dd8e34] rounded-md px-5 py-3 text-white  hover:bg-sky-500" 
                                    type="submit">Register</button>
                            </div>
                            {err !== ""  && (
                                <p className="error">{err}</p>
                            )}
                        </div>
                    </form>
                </div>
        </div>
        </>
    );
}