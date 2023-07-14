import React, { useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import Yoga from "/Yoga.png";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
function Hero() {
	const [textColor, setTextColor] = useState("red");
	return (
		<>
			<div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
				<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
					<div className="flex flex-col justify-center h-full text-white">
						<h2 className="text-4xl sm:text-7xl font-bold">
							I am a{" "}
							<span style={{ color: textColor }}>
								<TypeAnimation
									sequence={[
										"Software Developer",
										1000,
										() => {
											setTextColor("red");
										},
										"Back End Developer",
										1000,
										() => {
											setTextColor("blue");
										},
									]}
									wrapper="span"
									speed={30}
									repeat={Infinity}
								></TypeAnimation>
							</span>
						</h2>
						<p className="text-gray-500 py-4 max-w-md">
							I am the coding maverick, the dark knight of backend development. I bring software to life from the shadows. I craft intricate systems that dance with data, effortlessly powering the complex machinery of the digital world.
						</p>

						<div>
							<Link to="portfolio" smooth duration={500} className="w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group cursor-pointer">
								Portfolio
								<span className="group-hover:rotate-90 duration-300">
									<MdOutlineChevronRight size={25} className="ml-1" />
								</span>
							</Link>
						</div>
					</div>

					<div>
						<img src={Yoga} className="rounded-2xl mx-auto w-2/3 md:w-[650px] -mt-32 sm:mt-0" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
