import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import * as Sentry from "@sentry/nextjs";

/* If customer id and ticket id is sent -> update the specific ticket for the customer.
 If the customer id is sent, but the ticketId is not sent, there are 2 scenarios:
 - the customerId doesnt't exist -> Info msg with back button
 - the customerId exists but is not active -> Info msg, we can update only if it does exist
 - if it exists, show a form for creating new ticket for the customer
 
 If the ticketId is sent, there are 2 case scenarios:
 - if the ticketId doesn't exist, show info msg 
 - if the ticketId exists, show form for updating the ticket for the specific customer*/

export default async function TicketFormPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	try {
		const { customerid, ticketid } = await searchParams;

		if (!customerid && !ticketid) {
			return (
				<h2 className="text-2xl mb-2">
					Ticket ID or Customer ID is required to load ticket form
					<BackButton title="Go Back" variant="secondary" />
				</h2>
			);
		}
		if (customerid && !ticketid) {
			// New Ticket
			const customer = await getCustomer(parseInt(customerid));
			if (!customer) {
				return (
					<h2 className="text-2xl mb-2">
						Customer with ID {customerid} not found
						<BackButton title="Go Back" variant="secondary" />
					</h2>
				);
			}

			if (!customer.active) {
				return (
					<>
						<h2 className="text-2xl mb-2">
							Customer with ID {customerid} is not active. We can only create
							tickets for active customers.
							<BackButton title="Go Back" variant="secondary" />
						</h2>
					</>
				);
			}

			// return ticket form for creating new ticket

			console.log(customer);

			return;
		}
		if (ticketid) {
			const ticket = await getTicket(parseInt(ticketid));

			if (!ticket) {
				return (
					<h2 className="text-2xl mb-2">
						Ticket with ID {ticketid} not found
						<BackButton title="Go Back" variant="secondary" />
					</h2>
				);
			}
			const consumer = await getCustomer(ticket.customerId);
			// return ticket form
			console.log(ticket);
			console.log(consumer);
			return;
		}
	} catch (error) {
		Sentry.captureException(error);
	}
	return <div>page</div>;
}
