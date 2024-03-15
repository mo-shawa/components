import Image from 'next/image'
import Link from 'next/link'

import Logo from './logo.svg'

export default function NavBar() {
	return (
		<nav className="w-full fixed top-0 left-0">
			<div className="p-8 w-full max-w-[1200px] mx-auto flex items-center justify-between">
				<Link href="#">
					<Image src={Logo} alt="Coda Logo" width={60} height={20} />
				</Link>
			</div>
		</nav>
	)
}
