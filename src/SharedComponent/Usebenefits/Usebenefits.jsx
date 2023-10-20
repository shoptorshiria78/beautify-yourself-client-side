import { FaAngellist } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

const Usebenefits = () => {
    return (
        <div className="my-6 flex flex-col lg:flex-row max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto">
            <div className=" w-11/10 lg:w-1/2">
                <img src="https://i.ibb.co/LdTc99n/benefit-real-img.jpg" alt="" />
            </div>
            <div className=" w-11/10 lg:w-1/2 ml-8 ">
                <div className=" flex-col items-center h-full">
                    <h1 className="text-3xl my-4 text-fuchsia-500 font-medium">Why We Are</h1>
                    <div className="flex ">
                        <FaAngellist className="text-6xl mr-3 text-fuchsia-500"></FaAngellist>
                        <div className="ml-3">
                            <p className="text-xl text-fuchsia-400 ">Quality Assurance</p>
                            <p className="text-sm text-fuchsia-300 ">Our products ensure consistent quality, backed by a reputation for excellence and rigorous quality control, providing reliable and safe solutions every time.</p>
                        </div>
                    </div>
                    <div className="flex ">
                        <GiArchiveResearch className="text-7xl mr-3 text-fuchsia-500"></GiArchiveResearch>
                        <div>
                            <p className="text-xl text-fuchsia-400 ">Innovation and Research</p>
                            <p className="text-sm text-fuchsia-300 ">Our invest in cutting-edge research, offering the latest innovations in skincare, technology, or fashion to keep you ahead of the curve.</p>
                        </div>
                    </div>
                    <div className="flex ">
                        <BsPeopleFill className="text-8xl mr-3 text-fuchsia-500"></BsPeopleFill>
                        <div>
                            <p className="text-xl text-fuchsia-400 ">Customer Support and Warranty</p>
                            <p className="text-sm text-fuchsia-300 ">Our products provide excellent customer service and warranties, ensuring peace of mind with reliable troubleshooting, replacements, or repairs for any unexpected issues.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Usebenefits;