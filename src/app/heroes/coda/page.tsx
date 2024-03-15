import NavBar from './navbar'

export default function CodaHero() {
	return (
		<main className="bg-[#ffe6c9] pt-24">
			<NavBar />
			<div
				id="hero"
				className="pt-16 px-8 mx-auto w-full space-y-12 max-w-[1200px]"
			>
				<div className="w-full md:w-3/4 flex flex-col gap-5">
					<h1 className="text-[4.2rem] leading-none tracking-tighter font-black text-[#212121]">
						Your all-in-one collaborative workspace.
					</h1>
					<p className="text-[#666666] text-[1.3rem]">
						Coda brings teams and tools together for a more organized work day.
					</p>
					<div className="flex gap-8">
						<button className="px-6 py-4 font-semibold text-xl tracking-tight bg-black rounded-xl text-white">
							Get started for free
						</button>
						<button className="px-6 tracking-tight py-4 font-semibold text-xl bg-[#fffbf7] rounded-xl text-[#444444] shadow-inner border hover:bg-[#f5f5f5]">
							Contact sales
						</button>
					</div>
				</div>
				<video
					autoPlay
					loop
					muted
					playsInline
					src="/components/coda/hero.mp4"
				/>
			</div>
		</main>
	)
}
