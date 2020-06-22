/**
 * Import Seeder's
 */
import SeedSpeciality from "./seeds/Speciallitys";
import SeedUser from "./seeds/Users";
import SeedRegion from "./seeds/Regions";

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
