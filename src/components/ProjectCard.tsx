import React from "react";
import { Github, Globe } from "lucide-react";

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
	return (
		<div
			className={`flex flex-col md:flex-row ${
				reverse ? "md:flex-row-reverse" : ""
			} bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden`}
		>
			{/* Project Image */}
			<div className="w-full md:w-3/5">
				<img src={image} alt={title} className="w-full h-full object-cover" />
			</div>

			{/* Content Section */}
			<div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col">
				{/* Title */}
				<h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
					{title}
				</h3>

				{/* Description */}
				<p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

				{/* Tech Stack */}
				<div className="mb-6">
					<h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
						Tech Stack
					</h4>
					<div className="flex flex-wrap gap-2">
						{techStack.map((tech, index) => (
							<span
								key={index}
								className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 
                dark:text-gray-300 text-sm rounded-full"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 
              dark:text-gray-300 text-sm rounded-full"
						>
							{tag}
						</span>
					))}
				</div>

				{/* Action Buttons */}
				<div className="flex gap-4 mt-auto">
					{liveLink && (
						<a
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center px-4 py-2 bg-blue-600 
              text-white rounded-lg"
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
							className="flex items-center px-4 py-2 border border-gray-300
              text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg"
						>
							<Github className="w-4 h-4 mr-2" />
							Closed Source Project
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
