"use client";

import { Smartphone, Database, Paintbrush } from "lucide-react";

export default function Services() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="px-6 py-8 text-center">
                <h2 className="text-4xl sm:text-6xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-brand-accent via-brand-accent2 to-brand-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">
                        Offered Services
                    </span>
                </h2>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Service 1 */}
                <div className="bg-brand-surface rounded-2xl shadow-lg border border-brand-border p-8 text-center hover:shadow-xl transition-all">
                    <Smartphone className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-text mb-3">
                        Mobile App Development
                    </h3>
                    <p className="text-brand-subtext">
                        Cross-platform Flutter apps with clean architecture, BLoC 
                        state management, and responsive design.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-brand-surface rounded-2xl shadow-lg border border-brand-border p-8 text-center hover:shadow-xl transition-all">
                    <Database className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-text mb-3">
                        Backend & API Integration
                    </h3>
                    <p className="text-brand-subtext">
                        Firebase setup, authentication, Firestore, RESTful APIs, 
                        and local storage with Hive.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-brand-surface rounded-2xl shadow-lg border border-brand-border p-8 text-center hover:shadow-xl transition-all">
                    <Paintbrush className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-brand-text mb-3">
                        UI/UX Implementation
                    </h3>
                    <p className="text-brand-subtext">
                        Modern, responsive, and user-friendly app interfaces 
                        tailored to client needs with smooth animations.
                    </p>
                </div>
            </div>
        </section>
    );
}
