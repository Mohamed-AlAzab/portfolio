"use client";

export default function WorkExperience() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="px-6 py-8 text-center">
                <h2 className="text-4xl sm:text-6xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                        Work Experience
                    </span>
                </h2>
            </div>

            {/* Timeline */}
            <div className="bg-brand-surface rounded-3xl shadow-xl border border-brand-border p-10 space-y-8">
                {/* Example Job */}
                <div className="relative pl-8 border-l-4 border-brand-accent">
                    <h3 className="text-2xl font-semibold text-brand-text">
                        Freelance Mobile Developer
                    </h3>
                    <p className="text-lg text-brand-accent font-medium">
                        Upwork & Fiverr — 2023 to Present
                    </p>
                    <p className="text-brand-subtext leading-relaxed mt-2">
                        Built cross-platform Flutter applications for clients worldwide. 
                        Delivered custom mobile apps with clean architecture, Firebase integration, 
                        and responsive UI/UX.
                    </p>
                </div>

                <div className="relative pl-8 border-l-4 border-brand-accent">
                    <h3 className="text-2xl font-semibold text-brand-text">
                        Internship — Mobile Developer
                    </h3>
                    <p className="text-lg text-brand-accent font-medium">
                        Tech Startup — Summer 2023
                    </p>
                    <p className="text-brand-subtext leading-relaxed mt-2">
                        Collaborated with a team to design and implement new features 
                        in an e-commerce app. Gained experience in agile workflows, 
                        version control, and teamwork in real projects.
                    </p>
                </div>
            </div>
        </section>
    );
}
