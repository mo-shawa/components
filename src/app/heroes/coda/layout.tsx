import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Coda',
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
