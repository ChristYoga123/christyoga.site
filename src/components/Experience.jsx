import React from "react";
// Import Your Programming Language
import html from "/experience/html.png";
import css from "/experience/css.png";
import js from "/experience/js.png";
import php from "/experience/php.png";
import laravel from "/experience/laravel.png";
import nodejs from "/experience/nodejs.png";
import golang from "/experience/golang.png";

function Experience() {
	const techs = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},

		{
			id: 2,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},

		{
			id: 3,
			src: js,
			title: "JavaScript",
			style: "shadow-yellow-500",
		},

		{
			id: 4,
			src: php,
			title: "PHP",
			style: "shadow-purple-500",
		},

		{
			id: 5,
			src: laravel,
			title: "Laravel",
			style: "shadow-red-500",
		},

		{
			id: 6,
			src: nodejs,
			title: "NodeJs",
			style: "shadow-green-500",
		},

		{
			id: 7,
			src: golang,
			title: "Golang",
			style: "shadow-blue-300",
		},
	];
	return (
		<div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
					<p className="py-6">These are the tech stacks I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mb-52 md:mb-0">
					{techs.map((tech) => (
						<div key={tech.id} className={`shadow-md hover-scale-105 duration-200 py-2 rounded-lg ${tech.style}`}>
							<img src={tech.src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{tech.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Experience;
