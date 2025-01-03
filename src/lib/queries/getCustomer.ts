import { db } from "@/db";
import { customers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getCustomer(id: number) {
	const customer = await db
		.select()
		.from(customers)
		.where(eq(customers.id, id));

	// return type is array
	return customer[0];
}
