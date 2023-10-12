import { Link } from "react-router-dom";
import "./Parts.css";
export default function Err404({role}) {
    return (
        <section className="page_404 py-20 px-0 bg-[#fff]">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-12 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center text-2xl text-[#fff] "> 404 </h1>
                            </div>
                            <div className="contant_box__404">
                                <h3 className="text-xl"> Look like you are lost</h3>
                                <p> This page is not avaiable! </p>
                                <Link to={"/"} className="link_404 text-[#fff] py-3 px-5 bg-[#39ac31] my-5 mx-0 inline-block ">
                                    Go to Home 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
