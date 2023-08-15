"use client";
import React from "react";
import Image from "next/image";
import Laptop from "../../../../public/assets/laptop.jpg";

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1024px] grid mx-auto md:grid-cols-2">
				<Image
					className="mx-auto w-full my-4"
					src={Laptop}
					alt="laptop image"
				/>
				<div className="flex flex-col justify-center ">
					<p className="text-[#00df9a] uppercase font-bold  ">
						DATA ANALYTICS DAHSBOARD
					</p>
					<h1 className="capitalize md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						Manage Data analytics Centrally
					</h1>
					<p className="">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
						facilis distinctio doloribus tenetur in accusamus dolor quo?
						Doloremque repellat magni excepturi laboriosam, repellendus ipsa
						quae sit fuga veritatis, dolore error voluptatum est! Asperiores,
						minus delectus debitis autem aliquam ducimus architecto officia et
						sed cumque provident eveniet quos, recusandae necessitatibus
						officiis.
					</p>
					<button className="bg-black text-[#00df9a] rounded-md font-mediun my-6 md:mx-0 mx-auto px-6 py-3">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
