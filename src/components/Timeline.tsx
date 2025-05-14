import React from "react";

export const Timeline = () => {
	const experiences = [
		{
			title: "Indie Mobile Developer | Freelancer",
			company: "",
			period: "Jan 2025 - Present",
			description: [
				"Introduced interactive features like Likes, Comments, Polls, and Quizzes to increase retention and community interaction.",
				"Built a real-time one-on-one chat (v1) using Firebase; later collaborated with senior dev to implement a more scalable version using Socket.IO.",
				"Built an in-app feedback system to gather insights and improve user satisfaction.",
				"Integrated Google AdMob to drive ad revenue.",
				"Implemented Razorpay for smooth psychologist booking and payment handling.",
				"Enabled users to control interactions by implementing a comment-blocking feature for a safer space.",
				"Built a premium group feature enabling paid access to therapy groups, with secure sharing of guided solutions, documents, and images — helping monetize the app and support community healing.",
				"Implemented push notifications using Firebase and Notifee to improve user engagement with timely updates and alerts.",
				"Handled deployment for both iOS and Android, ensuring smooth and consistent app releases.",
				"Implemented React Query for data fetching with built-in caching to reduce redundant API calls and boost performance.",
			],
		},
		{
			title: "React Native Developer",
			company: "The Confession Boxx",
			period: "Jan 2024 - Sep 2024",
			description: [
				"Introduced interactive features like Likes, Comments, Polls, and Quizzes to increase retention and community interaction.",
				"Built a real-time one-on-one chat (v1) using Firebase; later collaborated with senior dev to implement a more scalable version using Socket.IO.",
				"Built an in-app feedback system to gather insights and improve user satisfaction.",
				"Integrated Google AdMob to drive ad revenue.",
				"Implemented Razorpay for smooth psychologist booking and payment handling.",
				"Enabled users to control interactions by implementing a comment-blocking feature for a safer space.",
				"Built a premium group feature enabling paid access to therapy groups, with secure sharing of guided solutions, documents, and images — helping monetize the app and support community healing.",
				"Implemented push notifications using Firebase and Notifee to improve user engagement with timely updates and alerts.",
				"Handled deployment for both iOS and Android, ensuring smooth and consistent app releases.",
				"Implemented React Query for data fetching with built-in caching to reduce redundant API calls and boost performance.",
			],
		},

		{
			title: "Software Developer",
			company: "RocketMedia Technologies",
			period: "Mar 2021 - Dec 2022",
			description: [
				"Built a customer-facing display for the food tech industry, improving UX and operational efficiency.",
				"Successfully launched a POS module (80+ screens), increasing order processing efficiency.",
				"Developed mobile and tablet food ordering apps, enhancing user accessibility.",
				"Implemented cash management features, improving financial accuracy.",
				"Automated day-closing activities, saving 15+ hours weekly in manual tracking.",
				"Led the design and development of 40+ screens for CFD, KDU, POS, KOT, and PRINTER, boosting store operations and customer service.",
				"Collaborated with designers to align the in-house component library with the brand's design guidelines and accessibility standards.",
			],
		},
		{
			title: "Associate Software Engineer",
			company: "NIIT Ltd",
			period: "Oct 2020 - Feb 2021",
			description: [
				"Developed online courses/LMS using Lectora tool for the client - Shell.",
			],
		},
	];

	return (
		<div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			{/* Timeline line - hidden on mobile, visible on md and up */}
			<div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-teal-200 dark:bg-teal-800 transform -translate-x-1/2" />

			{/* Mobile timeline line */}
			<div className="md:hidden absolute left-8 h-full w-0.5 bg-teal-200 dark:bg-teal-800" />

			<div className="space-y-8">
				{experiences.map((experience, index) => (
					<div
						key={index}
						className={`relative flex flex-col md:flex-row ${
							index % 2 === 0 ? "md:flex-row-reverse" : ""
						}`}
					>
						{/* Timeline dot - mobile position */}
						<div className="md:hidden absolute left-8 w-6 h-6 bg-teal-500 dark:bg-teal-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
							<div className="w-2 h-2 bg-white rounded-full" />
						</div>

						{/* Timeline dot - desktop position */}
						<div className="hidden md:flex absolute left-1/2 w-6 h-6 bg-teal-500 dark:bg-teal-400 rounded-full transform -translate-x-1/2 items-center justify-center">
							<div className="w-2 h-2 bg-white rounded-full" />
						</div>

						{/* Spacer div for desktop layout */}
						<div className="hidden md:block flex-1" />

						{/* Content container */}
						<div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
							<div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<div className="flex flex-col">
									<h3 className="text-xl font-bold text-teal-700 dark:text-teal-400">
										{experience.title}
									</h3>
									<p className="text-sm font-medium text-teal-600 dark:text-teal-500 mt-1">
										{experience.company}
									</p>
									<p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">
										{experience.period}
									</p>
									{/* <ul className="list-disc ml-4 space-y-2 text-gray-600 dark:text-gray-300">
										{experience.description.map((point, i) => (
											<li key={i} className="text-sm leading-relaxed">
												{point}
											</li>
										))}
									</ul> */}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
