import React, { useState } from "react";
import {
	Sun,
	Moon,
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	Menu,
	X,
} from "lucide-react";
import { Timeline } from "./components/Timeline";
import BSHImage from "./assets/BSH.png";

import { ContactForm } from "./components/ContactForm";
import {
	FaReact,
	FaNodeJs,
	FaExpressJs,
	FaGitAlt,
	FaHtml5,
	FaCss3Alt,
	FaJs,
} from "react-icons/fa";
import {
	SiTypescript,
	SiRedux,
	SiTailwindcss,
	SiFirebase,
	SiSupabase,
	SiPostgresql,
} from "react-icons/si";
import ProjectCard from "./components/ProjectCard";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDarkMode = () => setDarkMode(!darkMode);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<div className={`${darkMode ? "dark" : ""}`}>
			<div className="min-h-screen bg-teal-50 dark:bg-gray-900 transition-colors duration-300">
				{/* Navigation */}
				<nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<span className="text-2xl font-bold text-teal-700 dark:text-teal-400">
								The Awesome Dev
							</span>

							<div className="hidden md:flex items-center space-x-8">
								<a
									href="#home"
									className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
								>
									Home
								</a>
								<a
									href="#about"
									className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
								>
									About
								</a>
								<a
									href="#experience"
									className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
								>
									Experience
								</a>
								<a
									href="#projects"
									className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
								>
									Projects
								</a>
								<a
									href="#contact"
									className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
								>
									Contact
								</a>
								<button
									onClick={toggleDarkMode}
									className="p-2 rounded-lg bg-teal-100 dark:bg-teal-800/30 text-teal-700 dark:text-teal-400"
								>
									{darkMode ? <Sun size={20} /> : <Moon size={20} />}
								</button>
							</div>

							<div className="md:hidden flex items-center">
								<button
									onClick={toggleMenu}
									className="text-teal-600 dark:text-teal-400"
								>
									{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
								</button>
							</div>
						</div>
					</div>

					{/* Mobile menu */}
					{isMenuOpen && (
						<div className="md:hidden bg-white dark:bg-gray-800 p-4">
							<div className="flex flex-col space-y-4">
								<a href="#home" className="text-teal-600 dark:text-teal-400">
									Home
								</a>
								<a href="#about" className="text-teal-600 dark:text-teal-400">
									About
								</a>
								<a
									href="#experience"
									className="text-teal-600 dark:text-teal-400"
								>
									Experience
								</a>
								<a
									href="#projects"
									className="text-teal-600 dark:text-teal-400"
								>
									Projects
								</a>
								<a href="#contact" className="text-teal-600 dark:text-teal-400">
									Contact
								</a>
								<button
									onClick={toggleDarkMode}
									className="p-2 rounded-lg bg-teal-100 dark:bg-teal-800/30 text-teal-700 dark:text-teal-400 w-fit"
								>
									{darkMode ? <Sun size={20} /> : <Moon size={20} />}
								</button>
							</div>
						</div>
					)}
				</nav>

				{/* Hero Section */}
				<section id="home" className="pt-32 pb-20 px-4">
					<div className="max-w-7xl mx-auto">
						<div className="text-center">
							<h1 className="text-5xl md:text-6xl font-bold text-teal-800 dark:text-teal-400 mb-6">
								Mobile App Developer
							</h1>
							<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
								Crafting exceptional mobile experiences with cutting-edge
								technology and user-centered design.
							</p>
							<div className="flex justify-center space-x-4">
								<a
									href="#contact"
									className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
								>
									Get in Touch
								</a>
								<a
									href="#projects"
									className="px-8 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
								>
									View Projects
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* About Section */}
				{/* About Section */}
				<section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
					<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
						{/* Profile Image */}
						<div className="flex justify-center">
							<img
								src="https://pbs.twimg.com/profile_images/1911455918727819264/DROKBaP5_400x400.jpg" // Replace with your actual image path
								alt="Prashant Tanwar"
								className="w-64 h-64 object-cover rounded-full border-4 border-teal-500 shadow-lg"
							/>
						</div>

						{/* About Content */}
						<div>
							<h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 mb-6">
								About Me
							</h2>
							<p className="text-gray-600 dark:text-gray-300 mb-4">
								I'm a passionate <strong>React Native Developer</strong> with{" "}
								<strong>3 years</strong> of experience building innovative and
								user-friendly mobile applications. I specialize in crafting
								scalable, high-performance apps with a strong focus on UX.
							</p>
							<p className="text-gray-600 dark:text-gray-300">
								My expertise spans <strong>React Native</strong>,{" "}
								<strong>Firebase</strong>,<strong>Tanstack Query</strong>,{" "}
								<strong>Supabase</strong>, <strong>Redux</strong>,
								<strong>TypeScript</strong>, and other modern technologies. I am
								dedicated to writing clean, maintainable code and love solving
								complex technical challenges.
							</p>
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section id="skills" className="py-20 px-4 bg-teal-50 dark:bg-gray-800">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 text-center mb-8">
							My Skills
						</h2>
						<div className="flex flex-wrap justify-center gap-4">
							{[
								{
									name: "React Native",
									icon: <FaReact className="text-blue-500" />,
								},
								{
									name: "React.js",
									icon: <FaReact className="text-blue-500" />,
								},
								{
									name: "TypeScript",
									icon: <SiTypescript className="text-blue-600" />,
								},
								{
									name: "JavaScript",
									icon: <FaJs className="text-yellow-500" />,
								},
								{
									name: "Redux Toolkit",
									icon: <SiRedux className="text-purple-600" />,
								},
								{
									name: "Zustand",
									icon: <SiRedux className="text-purple-600" />,
								},
								{
									name: "Firebase",
									icon: <SiFirebase className="text-orange-500" />,
								},
								{
									name: "Supabase",
									icon: <SiSupabase className="text-green-500" />,
								},
								{
									name: "Tailwind CSS",
									icon: <SiTailwindcss className="text-teal-500" />,
								},
								{
									name: "PostgreSQL",
									icon: <SiPostgresql className="text-blue-700" />,
								},
								{
									name: "Node.js",
									icon: <FaNodeJs className="text-green-600" />,
								},
								{
									name: "Express.js",
									icon: <FaNodeJs className="text-green-600" />,
								},
								{
									name: "Git & GitHub",
									icon: <FaGitAlt className="text-red-500" />,
								},
							].map((skill, index) => (
								<div
									key={index}
									className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-md hover:shadow-lg transition duration-200"
								>
									<span className="text-2xl">{skill.icon}</span>
									<span className="text-gray-800 dark:text-gray-200 font-medium">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* Experience Section */}
				<section id="experience" className="py-20 px-4">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 mb-12">
							Experience
						</h2>
						<Timeline />
					</div>
				</section>

				{/* Projects Section */}
				{/* Projects Section */}
				<section id="projects" className="py-20 bg-white dark:bg-gray-900 px-4">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 text-center mb-12">
							Featured Projects
						</h2>

						<div className="space-y-12">
							<ProjectCard
								title="Mental Health App"
								description="A mobile app for mental health assessment and AI Therapy."
								tags={["React Native", "Firebase", "Supabase", "AI"]}
								image={BSHImage} // Replace with your actual image path
								techStack={[
									"React Native",
									"Firebase",
									"Supabase",
									"TypeScript",
								]}
								liveLink="https://play.google.com/store/apps/details?id=com.superhappy&pcampaignid=web_share"
								sourceCode="https://github.com/yourrepo"
							/>

							<ProjectCard
								title="E-commerce Mobile App"
								description="A modern mobile shopping app with real-time inventory and secure payments."
								tags={["React Native", "Redux Toolkit", "Stripe"]}
								image="/simulator2.png" // Replace with your actual image path
								techStack={[
									"React Native",
									"Redux Toolkit",
									"Stripe API",
									"Firebase",
								]}
								liveLink="https://yourshop.com"
								sourceCode="https://github.com/yourrepo"
								reverse // Image on the right
							/>

							<ProjectCard
								title="Social Media App"
								description="A social networking app with real-time messaging and content sharing."
								tags={["React Native", "Firebase", "Node.js"]}
								image="/simulator3.png" // Replace with your actual image path
								techStack={["React Native", "Firebase", "Node.js", "Socket.io"]}
								liveLink="https://socialapp.com"
								sourceCode="https://github.com/yourrepo"
							/>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-20 px-4">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-3xl font-bold text-teal-800 dark:text-teal-400 mb-12">
							Get in Touch
						</h2>
						<div className="grid md:grid-cols-2 gap-12">
							<div>
								<p className="text-gray-600 dark:text-gray-300 mb-8">
									I'm always interested in hearing about new projects and
									opportunities. Feel free to reach out through the form or my
									social media profiles.
								</p>
								<div className="flex space-x-6">
									<a
										href="https://github.com/Prashantrajput11"
										className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
									>
										<Github size={24} />
									</a>
									<a
										href="https://www.linkedin.com/in/prashantreactnative/"
										className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
									>
										<Linkedin size={24} />
									</a>
									<a
										href="#"
										className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
									>
										<Mail size={24} />
									</a>
								</div>
							</div>
							<ContactForm />
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-white/50 dark:bg-gray-800/50 py-8">
					<div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
						<p>
							© {new Date().getFullYear()} Prashant Tanwar. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
