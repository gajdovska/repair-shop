"use client";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";

type Props = {
	title: string;
	className?: string;
	variant?:
		| "default"
		| "destructive"
		| "ghost"
		| "outline"
		| "secondary"
		| "link"
		| null
		| undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton = ({ title, variant, className, ...props }: Props) => {
	const router = useRouter();
	return (
		<Button
			variant={variant}
			className={className}
			onClick={() => router.back()}
			title={title}
		>
			{title}
		</Button>
	);
};

export default BackButton;
