"use client";
import React from "react";
import {
	FaFacebookSquare,
	FaDribbbleSquare,
	FaTwitterSquare,
	FaGithubSquare,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="max-w-[1024px] grid lg:grid-cols-3 py-16 gap-8 text-gray-300 px-4 mx-auto">
			<div className="">
				<h1 className="w-full text-3xl font-bold text-[#00df9a]">
					Data-Finance.
				</h1>
				<p className="py-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui
					velit molestiae debitis veritatis facere! Quasi possimus, obcaecati
					distinctio quos tenetur aliquid dolorem et, quaerat nulla temporibus
					quisquam ut veritatis dolore beatae, magni repellendus ad.
				</p>
				<div className="flex justify-between w-3/4 ">
					<FaFacebookSquare className="cursor-pointer" size={20} />
					<FaInstagram className="cursor-pointer" size={20} />
					<FaTwitterSquare className="cursor-pointer" size={20} />
					<FaGithubSquare className="cursor-pointer" size={20} />
					<FaDribbbleSquare className="cursor-pointer" size={20} />
				</div>
			</div>
			<div className="flex py-4 justify-between lg:col-span-2 ">
				<div>
					<h6 className="font-medium text-gray-400">Solutions</h6>
					<ul>
						<li className="py-2 cursor-pointer text-sm">Analytics</li>
						<li className="py-2 cursor-pointer text-sm">Marketing</li>
						<li className="py-2 cursor-pointer text-sm">Commerce</li>
						<li className="py-2 cursor-pointer text-sm">Insight</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Support</h6>
					<ul>
						<li className="py-2 cursor-pointer text-sm">Pricing</li>
						<li className="py-2 cursor-pointer text-sm">Documentation</li>
						<li className="py-2 cursor-pointer text-sm">Guideline</li>
						<li className="py-2 cursor-pointer text-sm">API Status</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Company</h6>
					<ul>
						<li className="py-2 cursor-pointer text-sm">About</li>
						<li className="py-2 cursor-pointer text-sm">Blog</li>
						<li className="py-2 cursor-pointer text-sm">Jobs</li>
						<li className="py-2 cursor-pointer text-sm">Press</li>
						<li className="py-2 cursor-pointer text-sm">Careers</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Legal</h6>
					<ul>
						<li className="py-2 cursor-pointer text-sm">Claim</li>
						<li className="py-2 cursor-pointer text-sm">Policy</li>
						<li className="py-2 cursor-pointer text-sm">Term</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
