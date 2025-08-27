"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AppShowcase from "./components/AppShowcase";
import DevelopmentProcess from "./components/DevelopmentProcess";
import ContactSection from "./components/ContactSection";
import { Menu, X } from "lucide-react";

export default function MobileDevPortfolio() {
	const activeSection = "Home";
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled] = useState(false);

	const navItems = ["Home", "Skills", "Projects", "Process", "Contact"];

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string
	) => {
		e.preventDefault();
		setMenuOpen(false);
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden">
			{/* Floating AppBar */}
			<header className="fixed top-0 left-0 w-full z-50 bg-transparent">
				<div className="max-w-6xl mx-auto flex items-center justify-center px-6 py-3">
					<div
						className={`flex items-center justify-between px-4 py-3 bg-gray-900/90 w-full md:inline-flex md:bg-gray-900/80 md:backdrop-blur-md md:rounded-full md:shadow-xl md:px-6 md:py-3 md:justify-center md:w-auto md:mx-auto transform transition-all duration-500 ${isScrolled ? "scale-100 opacity-100" : "scale-95 opacity-90"}`}
					>
						{/* Desktop Nav */}
						<nav className="hidden md:flex space-x-8">
							{navItems.map((item) => (
								<a
									key={item}
									href={`#${item}`}
									onClick={(e) => handleNavClick(e, item)}
									className={`transition ${activeSection === item
											? "text-teal-400 font-semibold"
											: "text-white hover:text-teal-400"
										}`}
								>
									{item}
								</a>
							))}
						</nav>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-white"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{menuOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>

				</div>

				{menuOpen && (
					<div className="md:hidden mt-2 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 space-y-4 text-left mx-4">
						{navItems.map((item) => (
							<a
								key={item}
								href={`#${item}`}
								onClick={(e) => handleNavClick(e, item)}
								className={`block transition ${activeSection === item
									? "text-teal-400 font-semibold"
									: "text-white hover:text-teal-400"
									}`}
							>
								{item}
							</a>
						))}
					</div>
				)}
			</header>

			<main className="pt-0 scroll-smooth" style={{ scrollPaddingTop: "50px" }}>
				<section id="Home"><HeroSection /></section>
				<section id="Skills"><SkillsSection /></section>
				<section id="Projects"><AppShowcase /></section>
				<section id="Process"><DevelopmentProcess /></section>
				<section id="Contact"><ContactSection /></section>
			</main>
		</div>
	);
}
