import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import single from "../../../../public/assets/single.png";
import double from "../../../../public/assets/double.png";
import triple from "../../../../public/assets/triple.png";

const cardProps = [
	{
		head: "Single User",
		img: single,
		price: "$149",
		storage: "500 GB Storage",
		userProximity: "1 granted Usage",
		dataProximity: "send up to 2 GB",
	},
	{
		head: "Double User",
		img: double,
		price: "$149",
		storage: "500 GB Storage",
		userProximity: "2 granted Usage",
		dataProximity: "send up to 5 GB",
	},
	{
		head: "Triple User",
		img: triple,
		price: "$149",
		storage: "500 GB Storage",
		userProximity: "2 granted Usage",
		dataProximity: "send up to 5 GB",
	},
];

interface CardItem {
	head: string;
	img: StaticImageData;
	price: string;
	storage: string;
	userProximity: string;
	dataProximity: string;
}
const Cards = () => {
	return (
		<div className="w-full py-40 px-4 bg-white">
			<div className="max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8">
				{/* CARD BODY  */}
				{cardProps.map((prop: CardItem) => {
					return (
						<div
							key={prop.price}
							className={
								prop.head.toLowerCase() === "double user"
									? "w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 ease-in-out"
									: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 ease-in-out"
							}>
							<Image
								className="mx-auto -mt-12 bg-white w-20"
								src={prop.img}
								alt="single-person"
							/>
							<h2 className="text-2xl font-bold text-center py-8">
								{prop.head}
							</h2>
							<p className="text-center text-4xl font-bold">{prop.price}</p>
							<div className="text-center font-medium">
								<p className="py-2 border-b mx-20 mt-8">{prop.storage}</p>
								<p className="py-2 border-b mx-16">{prop.userProximity}r</p>
								<p className="py-2 border-b mx-12">{prop.dataProximity}</p>
							</div>
							<button
								className={
									prop.head.toLowerCase() === "double user"
										? "py-3 px-8 bg-black text-[#00fd9a] my-6 mx-auto font-medium rounded-md"
										: "py-3 px-8 bg-[#00fd9a] my-6 mx-auto font-medium rounded-md"
								}>
								Start Trial
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
