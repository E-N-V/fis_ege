import { utils, readFile } from "xlsx";
import { join } from "path";
import { existsSync } from "fs";

export function parse(fileName: string) {
	if (existsSync(join(__dirname, "..", "database", "excel", fileName + ".xlsx"))) {
        let data = readFile(join(__dirname, "..", "database", "excel", fileName + ".xlsx"));
        let sheet = data.Sheets['База данных']
        console.log(sheet)
	}
}
