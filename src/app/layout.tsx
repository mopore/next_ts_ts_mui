import './globals.css'
import type { Metadata } from 'next'
import ThemeRegistry from '@/theme/ThemeRegistry'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import JniAppBar from '../components/JniAppBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<ThemeRegistry>
				<body className={inter.className}>
					<JniAppBar />
					{children}
					<footer>
						<Footer />
					</footer>
				</body>
			</ThemeRegistry>
		</html>
	)
}
