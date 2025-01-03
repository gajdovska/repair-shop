import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from ".";

// migrate the code to neon, to apply the changes
const main = async () => {
	try {
		await migrate(db, { migrationsFolder: "src/db/migrations" });
		console.log("migrations completed");
	} catch (error) {
		console.error("Error during migration", error);
		process.exit(1);
	}
};

main();
