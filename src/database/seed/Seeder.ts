/**
 * Import Seeder's
 */
import SeedSpeciality from "./seeder's/Speciallitys";
import SeedUser from "./seeder's/Users";
import SeedRegion from "./seeder's/Regions";

/**
 * Init Seeder
 */
export default class Seeder {
	constructor() {
		try {
			SeedSpeciality();
			SeedUser();
			SeedRegion();
		} catch {
			console.error(`${__filename} err seeder's`);
		}
	}
}
