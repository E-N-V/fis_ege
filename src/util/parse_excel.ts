import { utils, writeFile } from "xlsx";
import { join } from "path";

export function parse(fileName: string) {
	let wb = utils.book_new();
	wb.SheetNames = ["Лист1"];
	wb.Sheets = {
		Лист1: {
			"!ref": "A1:A2",
			A1: { v: "test" },
		},
	};
	writeFile(wb, join(__dirname, "..", "database", "excel", fileName + ".xlsx"), { Props: { Author: "Miruki Team" } });
}
