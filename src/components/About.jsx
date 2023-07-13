import React from "react";

function About() {
	return (
		<div name="about" className="flex items-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
				</div>

				<p className="text-xl mt-12">
					As a student with an insatiable passion for coding and backend development, I am a relentless explorer of the digital landscape. Armed with a voracious appetite for knowledge, I dive deep into the realm of algorithms, data
					structures, and software architecture, hungry to unravel the secrets of efficient and powerful systems.
				</p>

				<br />

				<p className="text-xl">
					The backend is my sanctuary, where I harness the unseen forces that drive applications. I revel in the art of crafting scalable and robust systems, ensuring smooth operations behind the scenes. Databases, APIs, and server-side
					logic are my allies, and I wield them skillfully to breathe life into digital experiences.
				</p>
			</div>
		</div>
	);
}

export default About;
