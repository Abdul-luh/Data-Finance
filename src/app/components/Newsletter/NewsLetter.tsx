import React from "react";

const NewsLetter = () => {
	return (
		<div className="w-full py-16 text-white">
			<div className="max-w-[1024px] mx-auto grid lg:grid-cols-3 px-4 ">
				<div className="lg:col-span-2 py-4">
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						Want tips & tricks to optimize your flow
					</h1>
					<p>sign up to our newsletter to stay up to date</p>
				</div>
				<div className="my-4">
					<div className="flex flex-col justify-between items-center w-full sm:flex-row">
						<input
							className="px-3 py-2 flex text-black w-full rounded-md "
							type="email"
							placeholder="Enter Email"
						/>
						<button className="bg-[#00df9a] text-black font-medium rounded-md my-6 sm:ml-4 py-2 w-[200px] px-6">
							Notify Me
						</button>
					</div>
					<p>
						We care about the protection of your data. Read our{" "}
						<span className="text-[#00df9a]">Privacy Policy</span>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
