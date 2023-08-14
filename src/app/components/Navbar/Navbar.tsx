"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className="text-white mx-auto h-24 px-2 max-w-[1024px] flex justify-between items-center ">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">
				Data-Finance.
			</h1>
			<ul className="hidden md:flex ">
				<li className="p-4">Home</li>
				<li className="p-4">Company</li>
				<li className="p-4">Resources</li>
				<li className="p-4">About</li>
				<li className="p-4">Contact</li>
			</ul>
			<div className="md:hidden" onClick={handleNav}>
				{!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
			</div>

			<div
				className={
					!nav
						? "fixed left-[-100%] "
						: "fixed left-0 h-full bg-[#000300] md:hidden top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500"
				}>
				<h1 className="w-full my-4 mx-2 text-3xl font-bold text-[#00df9a]">
					Data-Finance.
				</h1>
				<ul className="p-4 uppercase ">
					<li className="p-4 border-b border-gray-600">Home</li>
					<li className="p-4 border-b border-gray-600">Company</li>
					<li className="p-4 border-b border-gray-600">Resources</li>
					<li className="p-4 border-b border-gray-600">About</li>
					<li className="p-4">Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
