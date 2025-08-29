"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Profile } from "../constant";

export default function AboutUs() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* Header Section */}
            <div className="px-6 py-8 text-center">
                <h2 className="text-4xl sm:text-6xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                        About Me
                    </span>
                </h2>
            </div>

            <div className="bg-brand-surface rounded-3xl shadow-xl border border-brand-border overflow-hidden">
                {/* Main Content */}
                <div className="p-10 flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Image */}
                    <div className="relative flex-shrink-0">
                        <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-border">
                            <img
                                src="/image.JPG"
                                alt="Profile Photo"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Professional Content */}
                    <div className="flex-1 space-y-8">
                        {/* Name and Title */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-4xl font-bold text-brand-text mb-3">
                                {Profile.creator}
                            </h3>
                            <p className="text-xl text-brand-accent font-semibold mb-2">
                                Student @ Faculty of Computer Science - Alexandria University
                            </p>
                        </div>
                        
                        {/* Professional Summary */}
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-brand-text border-b-2 border-brand-accent/20 pb-2">
                                Professional Summary
                            </h4>
                            <p className="text-brand-subtext leading-relaxed text-lg">
                                I’m a Computer Science student at Alexandria University with a 
                                passion for building modern mobile applications. My journey into 
                                development started with simple apps, but quickly grew into a 
                                love for creating products that genuinely connect with people.
                            </p>
                            <p className="text-brand-subtext leading-relaxed text-lg">
                                Skilled in Flutter, Firebase, Hive, and BLoC, I focus on building 
                                clean, scalable, and responsive apps with seamless user experiences. 
                                What sets me apart is my ability to blend technical precision with 
                                creative problem-solving — I don’t just write code, I craft experiences.
                            </p>
                        </div>

                        {/* Social + Resume */}
                        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 pt-0">
                            {/* Social Icons */}
                            <div className="flex gap-6">
                                <a href={Profile.github} target="_blank" className="text-brand-text hover:text-brand-accent transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href={Profile.linkedIn} target="_blank" className="text-brand-text hover:text-brand-accent transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href={Profile.email} className="text-brand-text hover:text-brand-accent transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                            {/* Resume Button */}
                            <a
                                href={Profile.cvUrl}
                                target="_blank"
                                className="px-6 py-3 bg-gradient-to-r from-brand-accent to-brand-accent2 text-white font-medium rounded-xl shadow-md hover:opacity-90 transition-all"
                            >
                                View CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
