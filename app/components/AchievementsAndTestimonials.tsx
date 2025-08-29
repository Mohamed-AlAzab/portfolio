"use client";

import { Award, Star, Book } from "lucide-react";

export default function AchievementsAndTestimonials() {
    const achievements = [
        {
            icon: <Award className="w-8 h-8 text-brand-accent mx-auto mb-2" />,
            title: "Hackathon Winner",
            desc: "1st place at Alexandria University Hackathon 2023 for developing a campus navigation mobile solution."
        },
        {
            icon: <Star className="w-8 h-8 text-brand-accent mx-auto mb-2" />,
            title: "Top Rated Freelancer",
            desc: "Recognized on Upwork for delivering high-quality apps with 5-star ratings from global clients."
        },
        {
            icon: <Book className="w-8 h-8 text-brand-accent mx-auto mb-2" />,
            title: "Research Publication",
            desc: "Published a paper on cross-platform mobile performance optimization in 2024 student tech journal."
        }
    ];

    const testimonials = [
        {
            name: "John Smith",
            role: "Client — USA",
            feedback:
                "Working with you was a pleasure! The Flutter app exceeded my expectations — clean code, smooth animations, and delivered ahead of schedule."
        },
        {
            name: "Aisha Khan",
            role: "Client — UAE",
            feedback:
                "Very professional and communicative. The Firebase integration was seamless, and the app’s design was exactly what I envisioned."
        },
        {
            name: "Carlos Ramirez",
            role: "Client — Spain",
            feedback:
                "Your ability to understand requirements and turn them into a real product is outstanding. I’ll definitely hire you again!"
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* عنوان واحد */}
            <div className="px-6 py-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                        Achievements & Testimonials
                    </span>
                </h2>
            </div>

            {/* المحتوى */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Achievements */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {achievements.map((a, index) => (
                        <div
                            key={index}
                            className="bg-brand-surface rounded-xl shadow-md border border-brand-border p-6 text-center hover:shadow-lg transition-all"
                        >
                            {a.icon}
                            <h4 className="text-lg font-semibold text-brand-text mb-2">
                                {a.title}
                            </h4>
                            <p className="text-sm text-brand-subtext">
                                {a.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-brand-surface rounded-lg shadow-md border border-brand-border p-6 hover:shadow-lg transition-all"
                        >
                            <p className="text-brand-subtext italic mb-3 text-sm">
                                &quot;{t.feedback}&quot;
                            </p>
                            <h4 className="text-base font-semibold text-brand-text">
                                {t.name}
                            </h4>
                            <p className="text-xs text-brand-accent">{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
