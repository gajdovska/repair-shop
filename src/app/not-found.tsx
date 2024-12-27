import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Page not found",
};

export default function NotFound() {
	return (
		<div className="px-2 w-full">
			<div className="mx-auto items-center flex-col my-auto py-4 flex gap-10  justify-center text-center">
				<h2 className="text-6xl">Page Not Found</h2>
				<Button asChild>
					<Link href="/home">Return Home</Link>
				</Button>
			</div>
		</div>
	);
}
