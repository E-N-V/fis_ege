import { join } from "path";
import dotenv from "dotenv";

dotenv.config({ path: join(__dirname, "..", ".env") });
export const { PORT, SEED } = process.env;
