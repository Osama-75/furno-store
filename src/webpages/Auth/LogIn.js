import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../components/Firebase/Context";
import LoadingPage from "../../components/Parts/Loading";


export default function Login() {
    const {user, logIn} = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [err, setErr] = useState("");
    const [loading, setLoading] =useState(false);
    const nav = useNavigate();
    // const nav = useNavigate();

    
    // handle submit
    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        try {  
                await logIn(email, password);
                nav("/");
            } catch (err) {
                setLoading(false);
                    setErr(err.message);
            }
    };


    return(
        <>
        {loading && <LoadingPage /> }
        <div className="dad h-screen">
            <div className="flex items-center p-8" >
                <img 
                    className="w-14 mr-3 ml-4 cursor-pointer"  
                    src= {require("../../components/Navs&Bars/Images/logo.png")}  alt="" 
                />
                <h3 className="font-cairo text-3xl font-bold text-sky-500 cursor-pointer">Furno</h3>
            </div>
            <div className="bson flex align-middle justify-center" >
                <form  onSubmit={submit}>
                    <div>
                        <h1 className="text-[#414A39] font-cairo text-left text-3xl"> Log in </h1>
                        <div className="form-cus  relative my-8">
                            <input 
                                className="block p-5 rounded-md bg-[#F7EEDD] border-2 border-transparent"
                                type="email" placeholder="Email..." required
                                id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="block absolute top-[-20] left-0 text-lg font-semibold text-slate-600 transition-all">
                                Email:
                            </label>
                        </div>
                        <div className="form-cus my-8 relative">
                            <input 
                                className="block p-5 rounded-md bg-[#F7EEDD] border-2 border-transparent"
                                type="password"  placeholder="Password..." required  minLength={8}
                                id="password"  value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="block absolute top-[-20] left-0 text-lg font-semibold text-slate-600 transition-all" >
                                Password:
                            </label>
                        </div>
                        {err ?  <p className="error">{err}</p> : null}
                        <div >
                            <button 
                                className="bg-[#dd8e34] rounded-md px-5 py-3 text-white  hover:bg-sky-500"  
                                type="submit">Login</button>
                        </div>
                        <span className="text-lg text-slate-500 mt-4 block" > Or New ? 
                            <Link className=" text-sky-500" to={"/signup"}> Sign Up</Link>
                        </span>
                        {/* <div className="h-12 bg-[#4285f4] rounded-sm cursor-pointer mt-5 relative">
                            <div className="absolute mt-0.25 ml-0.25 w-12 h-12 rounded-sm bg-[#fff] border-2">
                                <img 
                                    className="absolute w-10 h-10 ml-1 mt-1"
                                    src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
                                    alt="Sign in with google"
                                />
                            </div>
                            <p className="text-white absolute right-4 top-2">
                                <b>Sign in with google</b>
                            </p>
                        </div> */}
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}