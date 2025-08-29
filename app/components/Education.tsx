"use client";

export default function Education() {
    const educationList = [
        {
            degree: "B.Sc. in Science",
            institution: "Alexandria University",
            period: "2023 - Present",
            description:
                "Studying core Computer Science subjects including DS & Algorithms, OS, Database, and Software Engineering.",
            logo: "/alexandria.png",
        },
        {
            degree: "Cross Platform Mobile App Developer",
            institution: "DEPI",
            period: "2025",
            description:
                "Learned Dart, Flutter UI, Advanced flutter, state management, and Firebase integrations.",
            logo: "/DEPI.png",
        },
        {
            degree: "Mobile App Developer - Fake",
            institution: "Coursera",
            period: "2025",
            description:
                "Learned Dart, Flutter UI, Advanced flutter, state management, and Firebase integrations.",
            logo: "/Coursera.svg",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            {/* Header */}
            <div className="px-4 py-6 sm:py-8 text-center">
                <h2 className="text-3xl sm:text-5xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                        Education
                    </span>
                </h2>
            </div>

            {/* Education Timeline */}
            <div className="bg-brand-surface rounded-2xl sm:rounded-3xl shadow-xl border border-brand-border p-6 sm:p-10 space-y-10">
                {educationList.map((edu, index) => (
                    <div
                        key={index}
                        className="relative pl-4 sm:pl-8 border-l-4 border-brand-accent flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
                    >
                        {edu.logo && (
                            <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-white rounded-xl sm:rounded-2xl border border-brand-border shadow-sm overflow-hidden">
                                <img
                                    src={edu.logo}
                                    alt={edu.institution}
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>
                        )}

                        {/* Text Content */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-semibold text-brand-text">
                                {edu.degree}
                            </h3>
                            <p className="text-base sm:text-lg text-brand-accent font-medium">
                                {edu.institution} — {edu.period}
                            </p>
                            <p className="text-sm sm:text-base text-brand-subtext leading-relaxed mt-2">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
