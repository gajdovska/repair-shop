import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="bg-gradient-to-r from-gray-900 to-gray-500 min-h-screen">
			<main className=" flex items-center  text-center justify-center max-w-5xl mx-auto h-dvh">
				<div className="flex flex-col gap-6 p-12 mx-auto text-white ">
					<h1 className="flex font-poppins tracking-tighter py-4 px-2 flex-col items-center justify-center text-4xl gradient-title font-extrabold sm:text-6xl lg:text-8xl text-gradient">
						Dan&apos;s Computer <br />
						Repair Shop
					</h1>
					<div className="flex text-center justify-center items-center gap-5">
						<Button size="xl" variant="destructive">
							Check
						</Button>
						<Button size="xl" variant="secondary">
							Sign up
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
