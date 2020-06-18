import { utils, writeFile } from "xlsx";
import { join } from "path";
import Applicant from "../database/entity/Applicant";

export async function parse_excel(fileName: string, data: Applicant[] | undefined): Promise<boolean> {
	if (!data) return false;
	let wb = utils.book_new();
	wb.SheetNames = ["Лист1"];
	wb.Sheets = {
		Лист1: {},
	};
	wb.Sheets["Лист1"] = utils.json_to_sheet(data);
	writeFile(wb, join(__dirname, "..", "database", "excel", fileName + ".xlsx"));
	return true;
}
