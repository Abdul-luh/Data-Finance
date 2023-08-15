import React from "react";
import Typed from "react-typed";

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center font-bold">
				<p className="uppercase p-2 text-[#00fd9a]  ">
					Growing with data Ananlytics
				</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6">
					Grow with data.
				</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-5xl sm:text-4xl text-xl">
						Fast, flexible financing for
					</p>
					<Typed
						className="md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 text-gray-500"
						strings={["BTB", "BTC", "SASS"]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className="md:text-2xl text-xl text-gray-500 font bold ">
					monitor your data analytics to increase revenue for BTB, BTC, & SASS
					platforms.
				</p>

				<button className="bg-[#00df9a] rounded-md font-mediun my-6 mx-auto px-6 py-3 text-black">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
