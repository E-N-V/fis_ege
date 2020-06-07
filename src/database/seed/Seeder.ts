/**
 * Import Seeder's
 */
import SeedSpeciality from "./seeder's/Speciallitys";
import SeedUser from "./seeder's/Users";

/**
 * Init Seeder
 */
export default class Seeder {
	constructor() {
		try {
			SeedSpeciality();
			SeedUser();
		} catch {
			console.error(`${__filename} err seeder's`);
		}
	}
}
