import "./Parts.css"

export default function Landing() {
    return (
        <div className="landing">
            <div className="absolute w-full h-full top-0 left-0 bg-slate-800/50 "></div>
            <div className="landing-text">
                <div className="max-w-lg">
                    <p className="text-lg text-zinc-950 font-medium">New Arrival</p>
                    <h1 className="land-head text-4xl font-cairo font-bold mb-4 ">
                        Discover Our<br />
                        New Collection
                    </h1>
                    <p className="para text-lg text-zinc-950 font-medium">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt
                        nibh pulvinar a. 
                    </p>
                    <button className="hover:bg-sky-500 hover:text-white" >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        
    )
}


