import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Mohamed AlAzab - Mobile Developer',
	description:
		'Welcome to my portfolio! I am a passionate mobile developer crafting beautiful and performant apps for iOS and Android. Specializing in cross-platform development, I create engaging mobile experiences that users love.',
	keywords: [
		'Mobile Developer',
		'iOS Developer',
		'Android Developer',
		// 'React Native',
		'Flutter',
		// 'Swift',
		// 'Kotlin',
		'Mobile Apps',
		'Cross-Platform Development',
		// 'Native Development',
		'Mobile UI/UX',
		'App Store',
		'Play Store',
		'Mobile Architecture',
		'Mohamed AlAzab',
	],
	authors: [{ name: 'Mohamed AlAzab' }],
	creator: 'Mohamed AlAzab',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
