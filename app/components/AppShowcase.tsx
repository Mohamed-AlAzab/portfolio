'use client';

interface App {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	platforms: string[];
	downloads?: string;
	rating?: number;
	icon: string;
}

const apps: App[] = [
	// {
	// 	id: 1,
	// 	name: 'Flutter Roadmap',
	// 	description: 'Comprehensive app for a complete filter roadmap with real-time workout monitoring',
	// 	technologies: ['Flutter', 'Firebase'],
	// 	platforms: ['iOS', 'Android'],
	// icon: '/note_logo.png'
	// },
	{
		id: 1,
		name: 'Note App',
		description: 'A simple and efficient note-taking application with offline storage using Hive. Supports creating, editing, and organizing notes with a smooth Flutter UI.',
		technologies: ['Flutter', 'Hive', 'Bloc'],
		platforms: ['iOS', 'Android'],
		icon: '/note_logo.png'
	},
	{
		id: 2,
		name: 'GPA Calculator',
		description: 'A mobile app for students to calculate and track their GPA. Allows adding courses, credits, and grades with instant GPA calculation and clean visualization.',
		technologies: ['Flutter'],
		platforms: ['iOS', 'Android'],
		icon: '/gpa_logo.png'
	},
];

const AppShowcase = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Apps</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{apps.map((app) => (
						<div
							key={app.id}
							className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1"
						>
							<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
								<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
									{/* App Icon */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0 relative">
										<div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
											<img
												src={app.icon}
												alt={app.name}
												className="w-full h-full object-contain"
											/>
										</div>
									</div>

									{/* App Info */}
									<div className="flex-grow w-full sm:w-auto">
										<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
											<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">
												{app.name}
											</h3>
											<span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
												{app.id === 1 ? "Featured" : "New"}
											</span>
										</div>
										<p className="text-gray-400 mb-4 text-center sm:text-left">
											{app.description}
										</p>

										{/* Technologies */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
											{app.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
												>
													{tech}
												</span>
											))}
										</div>

										{/* Stats */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400">
											{app.rating && (
												<div className="flex items-center gap-1.5">
													<svg
														className="w-4 h-4 text-yellow-400"
														viewBox="0 0 24 24"
														fill="currentColor"
													>
														<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
													</svg>
													<span>{app.rating}</span>
												</div>
											)}

											{app.downloads && (
												<div className="flex items-center gap-1.5">
													<svg
														className="w-4 h-4 text-blue-400"
														viewBox="0 0 24 24"
														fill="currentColor"
													>
														<path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" />
													</svg>
													<span>{app.downloads}</span>
												</div>
											)}

											<div className="flex items-center gap-1.5">
												<svg
													className="w-4 h-4 text-purple-400"
													viewBox="0 0 24 24"
													fill="currentColor"
												>
													<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
												</svg>
												<span>{app.platforms.join(" & ")}</span>
											</div>
										</div>

										{/* Install Buttons */}
										<div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
											{/* Android Button */}
											<a
												href=""
												className="px-4 py-2 rounded-full bg-green-600 text-white font-medium flex items-center gap-2 hover:bg-green-500 transition-colors"
											>
												{/* Add your Android icon here */}
												<span className="w-5 h-5 flex items-center justify-center">
													<img src="/android.svg" alt="Android" />
												</span>
												Install
											</a>

											{/* iOS Button */}
											<a
												href=""
												className="px-4 py-2 rounded-full bg-gray-800 text-white font-medium flex items-center gap-2 hover:bg-gray-700 transition-colors"
											>
												{/* Add your iOS icon here */}
												<span className="w-5 h-5 flex items-center justify-center">
													<img src="/apple.svg" alt="iOS" />
												</span>
												Install
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;
