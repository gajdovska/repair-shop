import React from "react";
import * as Sentry from "@sentry/nextjs";
import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	try {
		const { customerid } = await searchParams;

		if (customerid) {
			const customer = await getCustomer(parseInt(customerid));
			if (!customer) {
				return (
					<>
						<h2 className="text-2xl mb-2">
							Customer with ID {customerid} not found
							<BackButton title="Go Back" variant="secondary" />
						</h2>
					</>
				);
			}
			console.log(customer, "customer");
			// Put customer form component
		} else {
			// Adding a new customer form component if we are one the customers/form url
		}
	} catch (error) {
		Sentry.captureException(error);
	}
	return <div>page</div>;
}
