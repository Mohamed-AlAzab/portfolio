"use client";

export default function Testimonials() {
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
            {/* Header */}
            <div className="px-6 py-8 text-center">
                <h2 className="text-4xl sm:text-6xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                        Testimonials
                    </span>
                </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-brand-surface rounded-2xl shadow-lg border border-brand-border p-8 hover:shadow-xl transition-all"
                    >
                        <p className="text-brand-subtext italic mb-4">
                            "{t.feedback}"
                        </p>
                        <h4 className="text-lg font-semibold text-brand-text">
                            {t.name}
                        </h4>
                        <p className="text-sm text-brand-accent">{t.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
