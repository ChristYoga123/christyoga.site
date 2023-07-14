import React from "react";
// Import your Portfolio Image
import GitHubCalendar from "react-github-calendar";

function Portfolio() {
	const portfolios = [
		{
			id: 1,
			src: "...",
		},

		{
			id: 2,
			src: "...",
		},

		{
			id: 3,
			src: "...",
		},

		{
			id: 4,
			src: "...",
		},

		{
			id: 5,
			src: "...",
		},

		{
			id: 6,
			src: "...",
		},
	];
	return (
		<>
			<div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen flex items-center">
				<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
					<div className="pb-8">
						<p className="text-4xl font-bold inline border-b-4 boder-gray-500">Portfolio</p>
						<p className="py-6">Check out some of my project right here</p>
					</div>

					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
						{portfolios.map((portfolio) => (
							<div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg">
								<img src={portfolio.src} alt="" className="rounded-md duration-200 hover:scale-105" />
								<div className="flex items-center justify-center">
									<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
									<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
								</div>
							</div>
						))}
					</div>

					<div className="mt-20 mb-52 md:mb-0 flex justify-center">
						<GitHubCalendar username="christyoga123" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
