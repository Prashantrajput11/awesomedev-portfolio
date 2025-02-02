import React, { useState } from "react";
import { ExternalLink, Github, Globe, ChevronRight } from "lucide-react";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	image: string;
	techStack: string[];
	liveLink?: string;
	sourceCode?: string;
	reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	tags,
	image,
	techStack,
	liveLink,
	sourceCode,
	reverse = false,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`group relative overflow-hidden transition-all duration-300 ease-in-out 
        transform hover:-translate-y-2 bg-white dark:bg-gray-800/80 rounded-xl shadow-xl 
        backdrop-blur-sm ${reverse ? "md:flex-row-reverse" : ""}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex flex-col md:flex-row items-stretch">
				{/* Project Image Section */}
				<div className="w-full md:w-1/2 relative">
					<div className="relative h-64 md:h-full overflow-hidden">
						<img
							src={image}
							alt={title}
							className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
						/>
						<div
							className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
              transition-opacity duration-300 ${
								isHovered ? "opacity-80" : "opacity-0"
							}`}
						/>
					</div>
				</div>

				{/* Content Section */}
				<div className="w-full md:w-1/2 p-6 md:p-8">
					{/* Title with animated underline */}
					<h3 className="relative text-2xl font-bold text-teal-700 dark:text-teal-400 mb-4 inline-block">
						{title}
						<span
							className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform origin-left 
              transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
						/>
					</h3>

					{/* Animated description */}
					<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
						{description}
					</p>

					{/* Tech Stack with hover effects */}
					<div className="mb-6">
						<h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-3 flex items-center">
							<ChevronRight className="w-4 h-4 mr-2" />
							Tech Stack
						</h4>
						<div className="flex flex-wrap gap-2">
							{techStack.map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 
                    dark:text-gray-300 text-sm rounded-full transition-all duration-300 
                    hover:bg-teal-100 hover:text-teal-700 dark:hover:bg-teal-800/30 
                    dark:hover:text-teal-400"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Tags with gradient backgrounds */}
					<div className="flex flex-wrap gap-2 mb-6">
						{tags.map((tag, index) => (
							<span
								key={index}
								className="px-3 py-1 bg-gradient-to-r from-teal-500/10 to-teal-500/20 
                  dark:from-teal-400/10 dark:to-teal-400/20 text-teal-700 dark:text-teal-400 
                  text-sm rounded-full border border-teal-500/20 dark:border-teal-400/20"
							>
								{tag}
							</span>
						))}
					</div>

					{/* Action Buttons */}
					<div className="flex space-x-4">
						{liveLink && (
							<a
								href={liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 
                  text-white rounded-lg transition-all duration-300 hover:from-teal-600 
                  hover:to-teal-700 hover:shadow-lg hover:shadow-teal-500/25"
							>
								<Globe className="w-4 h-4 mr-2" />
								View Live
							</a>
						)}
						{sourceCode && (
							<a
								href={sourceCode}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center px-4 py-2 border-2 border-teal-500 text-teal-600 
                  dark:text-teal-400 rounded-lg transition-all duration-300 
                  hover:bg-teal-500 hover:text-white hover:shadow-lg 
                  hover:shadow-teal-500/25"
							>
								<Github className="w-4 h-4 mr-2" />
								Source Code
							</a>
						)}
					</div>
				</div>
			</div>

			{/* Decorative elements */}
			<div
				className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/10 rounded-full 
        blur-2xl transition-all duration-500 group-hover:bg-teal-500/20"
			/>
			<div
				className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/10 rounded-full 
        blur-2xl transition-all duration-500 group-hover:bg-teal-500/20"
			/>
		</div>
	);
};

export default ProjectCard;
