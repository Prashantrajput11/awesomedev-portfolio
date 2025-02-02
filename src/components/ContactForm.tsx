import React from "react";
import { Mail } from "lucide-react";

export const ContactForm = () => {
	return (
		<div className="text-center space-y-4">
			<h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
				Let's Create Something Amazing Together
			</h2>

			<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
				Got an interesting project or idea? I'm just one email away.
			</p>

			<a
				href="mailto:prashanttanwar.work@gmail.com"
				className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
			>
				<Mail size={20} />
				prashanttanwar.work@gmail.com
			</a>
		</div>
	);
};
