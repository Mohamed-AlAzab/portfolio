"use client";

import { Award, Star, Book } from "lucide-react";

export default function Achievements() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="px-6 py-8 text-center">
                <h2 className="text-4xl sm:text-6xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                        Achievements
                    </span>
                </h2>
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Award */}
                <div className="bg-brand-surface rounded-2xl shadow-lg border border-brand-border p-8 text-center hover:shadow-xl transition-all">
                    <Award className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-text mb-2">
                        Hackathon Winner
                    </h3>
                    <p className="text-brand-subtext">
                        1st place at Alexandria University Hackathon 2023 for 
                        developing a mobile solution that improves campus navigation.
                    </p>
                </div>

                {/* Recognition */}
                <div className="bg-brand-surface rounded-2xl shadow-lg border border-brand-border p-8 text-center hover:shadow-xl transition-all">
                    <Star className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-text mb-2">
                        Top Rated Freelancer
                    </h3>
                    <p className="text-brand-subtext">
                        Recognized on Upwork for delivering high-quality mobile apps 
                        with 5-star ratings from international clients.
                    </p>
                </div>

                {/* Publication */}
                <div className="bg-brand-surface rounded-2xl shadow-lg border border-brand-border p-8 text-center hover:shadow-xl transition-all">
                    <Book className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-text mb-2">
                        Research Publication
                    </h3>
                    <p className="text-brand-subtext">
                        Published a paper on cross-platform mobile development and 
                        performance optimization in student tech journal 2024.
                    </p>
                </div>
            </div>
        </section>
    );
}
