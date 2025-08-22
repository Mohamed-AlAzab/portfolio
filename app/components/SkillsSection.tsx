'use client';

import { useState } from 'react';

interface Skill {
	name: string;
	level: number;
	category: string;
	details?: string[];
	icon?: string;
}

const skills: Skill[] = [
	{ 
		name: 'Flutter', 
		level: 87, 
		category: 'core',
		details: ['Cross-platform mobile development (iOS & Android)', 'Custom UI design & animations', 'Responsive layouts for mobile, tablet, and web'],
		icon: 'flutter'
	},
	{ 
		name: 'State Management', 
		level: 87, 
		category: 'core',
		details: ['Provider, Bloc, Cubit, Riverpod', 'Complex app architecture', 'Performance optimization'],
		icon: 'state'
	},
	{ 
		name: 'Firebase', 
		level: 87, 
		category: 'backend',
		details: ['Authentication & Firestore', 'Cloud Functions & Push Notifications', 'Remote Config & Analytics'],
		icon: 'firebase'
	},
	{ 
		name: 'API Integration', 
		level: 88, 
		category: 'backend',
		details: ['RESTful API integration', 'HTTP client optimization', 'Error handling & retry logic'],
		icon: 'api'
	},
	{ 
		name: 'Local Storage', 
		level: 85, 
		category: 'backend',
		details: ['Hive, SharedPreferences', 'SQLite database management', 'Offline-first architecture'],
		icon: 'database'
	},
	{ 
		name: 'Git & Version Control', 
		level: 87, 
		category: 'tools',
		details: ['GitHub/GitLab workflows', 'Branch management & code reviews', 'Collaborative development'],
		icon: 'git'
	},
	{ 
		name: 'Performance & Debugging', 
		level: 70, 
		category: 'tools',
		details: ['Flutter DevTools profiling', 'Memory leak detection', 'Build optimization'],
		icon: 'debug'
	},
	
	
];

const categoryConfig = {
	core: {
		title: 'Core Flutter Development',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
			</svg>
		),
		color: 'from-blue-500 to-cyan-500',
		borderColor: 'border-blue-500/20',
		bgColor: 'bg-blue-500/10',
		textColor: 'text-blue-400'
	},
	backend: {
		title: 'Backend & Data Management',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
			</svg>
		),
		color: 'from-purple-500 to-pink-500',
		borderColor: 'border-purple-500/20',
		bgColor: 'bg-purple-500/10',
		textColor: 'text-purple-400'
	},
	tools: {
		title: 'Tools & Workflow',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
			</svg>
		),
		color: 'from-emerald-500 to-teal-500',
		borderColor: 'border-emerald-500/20',
		bgColor: 'bg-emerald-500/10',
		textColor: 'text-emerald-400'
	},
	
};

const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>;

	return (
		<section className="py-16 md:py-20 relative overflow-hidden">			
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-4xl sm:text-6xl md:text-4xl font-bold">
						<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:100%] animate-gradient">
							Technical Expertise
						</span>
					</h2>
					
					<p className="text-gray-400 max-w-2xl mx-auto text-lg">
						Specialized in Flutter development with comprehensive mobile app development skills
					</p>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					<button
						onClick={() => setActiveCategory(null)}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
							activeCategory === null
								? 'bg-white/20 text-white shadow-lg'
								: 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
						}`}
					>
						All Skills
					</button>
					{categories.map((category) => {
						const config = categoryConfig[category];
						return (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
									activeCategory === category
										? `${config.bgColor} ${config.textColor} shadow-lg border ${config.borderColor}`
										: 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
								}`}
							>
								{config.icon}
								{config.title}
							</button>
						);
					})}
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					{skills
						.filter(skill => activeCategory === null || skill.category === activeCategory)
						.map((skill, index) => {
							const config = categoryConfig[skill.category as keyof typeof categoryConfig];
							const isHovered = hoveredSkill === skill.name;
							
							return (
								<div
									key={skill.name}
									className={`group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border transition-all duration-500 hover:scale-105 ${
										isHovered ? `${config.borderColor} shadow-2xl` : 'border-gray-700/50 hover:border-gray-600/50'
									}`}
									style={{
										animationDelay: `${index * 100}ms`
									}}
									onMouseEnter={() => setHoveredSkill(skill.name)}
									onMouseLeave={() => setHoveredSkill(null)}
								>
									{/* Category Badge */}
									<div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4 ${config.bgColor} ${config.textColor} border ${config.borderColor}`}>
										{config.icon}
										{config.title}
									</div>

									{/* Skill Header */}
									<div className="flex items-center justify-between mb-4">
										<h3 className="text-xl font-bold text-white">{skill.name}</h3>
										{/* <div className={`text-2xl font-bold ${config.textColor} transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
											{skill.level}%
										</div> */}
									</div>

									{/* Progress Bar */}
									{/* <div className="mb-4">
										<div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
											<div
												className={`h-full bg-gradient-to-r ${config.color} transform origin-left transition-all duration-1000 ease-out`}
												style={{ 
													width: activeCategory === null || activeCategory === skill.category ? `${skill.level}%` : '0%'
												}}
											></div>
										</div>
									</div> */}

									{/* Skill Details */}
									<div className={`space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
										{skill.details?.map((detail, detailIndex) => (
											<div key={detailIndex} className="flex items-start gap-2 text-sm text-gray-300">
												<div className={`w-1.5 h-1.5 rounded-full ${config.bgColor} mt-2 flex-shrink-0`}></div>
												<span>{detail}</span>
											</div>
										))}
									</div>

									{/* Proficiency Level */}
									<div className="mt-4 pt-4 border-t border-gray-700/50">
										<div className="flex items-center justify-between">
											<span className="text-xs text-gray-400">Proficiency Level</span>
											<span className={`text-xs font-medium px-2 py-1 rounded ${
												skill.level >= 90 ? 'bg-emerald-500/20 text-emerald-400' :
												skill.level >= 80 ? 'bg-blue-500/20 text-blue-400' :
												'bg-purple-500/20 text-purple-400'
											}`}>
												{skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
											</span>
										</div>
									</div>

									{/* Hover Glow Effect */}
									<div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${config.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
								</div>
							);
						})}
				</div>

				{/* Summary Stats */}
				{/* <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
					{[
						{ label: 'Total Skills', value: skills.length, color: 'text-blue-400' },
						{ label: 'Avg. Proficiency', value: `${Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%`, color: 'text-purple-400' },
						{ label: 'Expert Level', value: skills.filter(s => s.level >= 90).length, color: 'text-emerald-400' },
						{ label: 'Years Experience', value: '0', color: 'text-orange-400' }
					].map((stat, index) => (
						<div key={index} className="text-center p-3 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/50">
							<div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
							<div className="text-sm text-gray-400">{stat.label}</div>
						</div>
					))}
				</div> */}
			</div>

			<style jsx>{`
				@keyframes slideInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</section>
	);
};

export default SkillsSection;