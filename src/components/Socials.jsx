import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
function Social() {
	const socials = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/christianus-yoga-wibisono-60389a165/",
			style: "rounded-tr-md",
		},

		{
			id: 2,
			child: (
				<>
					Github <FaGithub size={30} />
				</>
			),
			href: "https://github.com/ChristYoga123",
		},

		{
			id: 3,
			child: (
				<>
					Mail <MdOutlineMail size={30} />
				</>
			),
			href: "mailto:christianuswibisono@gmail.com",
		},

		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: "/CV_Christianus-Yoga-Wibisono.pdf",
			style: "rounded-br-md",
			download: true,
		},
	];
	return (
		<>
			<div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
				<ul>
					{socials.map((social) => (
						<li className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-0 duration-300 ${social.style}`}>
							<a href={social.href} className="flex justify-between items-center w-full text-white" download={social.download} target="_blank">
								{social.child}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Social;
