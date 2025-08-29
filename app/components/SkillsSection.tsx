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
		color: 'from-brand-accent to-brand-accent2',
		borderColor: 'border-brand-accent/20',
		bgColor: 'bg-brand-accent/10',
		textColor: 'text-brand-accent'
	},
	backend: {
		title: 'Backend & Data Management',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
			</svg>
		),
		color: 'from-brand-accent to-brand-accent2',
		borderColor: 'border-brand-accent2/20',
		bgColor: 'bg-brand-accent2/10',
		textColor: 'text-brand-accent2'
	},
	tools: {
		title: 'Tools & Workflow',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
			</svg>
		),
		color: 'from-brand-accent to-brand-accent2',
		borderColor: 'border-brand-accent/20',
		bgColor: 'bg-brand-accent/10',
		textColor: 'text-brand-accent'
	},
	
};

const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
	const [showAll, setShowAll] = useState(false);

	const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>;

	// Filter + limit skills
	const filteredSkills = skills.filter(
		skill => activeCategory === null || skill.category === activeCategory
	);
	const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 4);

	return (
		<section className="py-16 md:py-20 relative overflow-hidden">
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-4xl sm:text-6xl md:text-4xl font-bold">
						<span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
							Technical Expertise
						</span>
					</h2>
					<p className="text-brand-subtext max-w-2xl mx-auto text-lg">
						Specialized in Flutter development with comprehensive mobile app development skills
					</p>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-3 mb-12">
					<button
						onClick={() => setActiveCategory(null)}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
							activeCategory === null
								? 'bg-white10 text-brand-text shadow-lg'
								: 'bg-brand-surface/50 text-brand-subtext hover:text-brand-text hover:bg-brand-border/50'
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
										: 'bg-brand-surface/50 text-brand-subtext hover:text-brand-text hover:bg-brand-border/50'
								}`}
							>
								{config.icon}
								{config.title}
							</button>
						);
					})}
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
					{visibleSkills.map((skill, index) => {
						const config = categoryConfig[skill.category as keyof typeof categoryConfig];
						const isHovered = hoveredSkill === skill.name;

						return (
							<div
								key={skill.name}
								className={`group relative bg-brand-bg/50 backdrop-blur-sm p-6 rounded-2xl border transition-all duration-500 hover:scale-105 ${
									isHovered ? `${config.borderColor} shadow-2xl` : 'border-brand-border/50 hover:border-brand-border/80'
								}`}
								style={{ animationDelay: `${index * 100}ms` }}
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
									<h3 className="text-xl font-bold text-brand-text">{skill.name}</h3>
								</div>

								{/* Skill Details */}
								<div className={`space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
									{skill.details?.map((detail, detailIndex) => (
										<div key={detailIndex} className="flex items-start gap-2 text-sm text-brand-text/80">
											<div className={`w-1.5 h-1.5 rounded-full ${config.bgColor} mt-2 flex-shrink-0`}></div>
											<span>{detail}</span>
										</div>
									))}
								</div>

								{/* Proficiency Level */}
								<div className="mt-4 pt-4 border-t border-brand-border/50">
									<div className="flex items-center justify-between">
										<span className="text-xs text-brand-subtext">Proficiency Level</span>
										<span className={`text-xs font-medium px-2 py-1 rounded ${
											skill.level >= 90 ? 'bg-brand-accent/20 text-brand-accent' :
											skill.level >= 80 ? 'bg-brand-accent/20 text-brand-accent' :
											'bg-brand-accent2/20 text-brand-accent2'
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

				{/* Toggle Button */}
				{filteredSkills.length > 4 && (
					<div className="text-center">
						<button
							onClick={() => setShowAll(!showAll)}
							className="px-6 py-2 rounded-full text-sm font-medium bg-brand-surface/70 text-brand-text hover:bg-brand-border/50 transition-all duration-300"
						>
							{showAll ? 'Show Less' : 'Show More'}
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default SkillsSection;