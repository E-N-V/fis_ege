import Specialty from "../../entity/Specialty";

export default async function SeedSpecialitys() {
	var data = new Specialty();
	data.id = 1;
	data.code = "07.02.01";
	data.name = "АРХИТЕКТУРА";
	data.cvalificacia = "АРХИТЕКТОР";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "2 года 10 месяцев";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 2;
	data.code = "08.02.01";
	data.name = "СТРОИТЕЛЬСТВО И ЭКСПЛУАТАЦИЯ ЗДАНИЙ И СООРУЖЕНИЙ";
	data.cvalificacia = "ТЕХНИК";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "2 года 10 месяцев";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 3;
	data.code = "08.02.01";
	data.name = "СТРОИТЕЛЬСТВО И ЭКСПЛУАТАЦИЯ ЗДАНИЙ И СООРУЖЕНИЙ";
	data.cvalificacia = "ТЕХНИК";
	data.forma_obychenia = "заочная";
	data.base_9 = "";
	data.base_11 = "2 года 10 месяцев";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 4;
	data.code = "08.02.04";
	data.name = "ВОДОСНАБЖЕНИЕ И ВОДООТВЕДЕНИЕ";
	data.cvalificacia = "ТЕХНИК";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 5;
	data.code = "09.02.03";
	data.name = "ПРОГРАММИРОВАНИЕ В КОМПЬЮТЕРНЫХ СИСТЕМАХ";
	data.cvalificacia = "ТЕХНИК— ПРОГРАММИСТ";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "2 года 10 месяцев";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 6;
	data.code = "15.02.13";
	data.name = "ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ СИСТЕМ ВЕНТИЛЯЦИИ И КОНДИЦИОНИРОВАНИЯ";
	data.cvalificacia = "ТЕХНИК— ПРОГРАММИСТ";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 7;
	data.code = "21.02.05";
	data.name = "ЗЕМЕЛЬНО-ИМУЩЕСТВЕННЫЕ ОТНОШЕНИЯ";
	data.cvalificacia = "СПЕЦИАЛИСТ ПО ЗЕМЕЛЬНО-­ИМУЩЕСТВЕННЫМ ОТНОШЕНИЯМ";
	data.forma_obychenia = "очная";
	data.base_9 = "2 года 10 месяцев";
	data.base_11 = "1 года 10 месяцев";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 8;
	data.code = "21.02.06";
	data.name = "ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОБЕСПЕЧЕНИЯ ГРАДОСТРОИТЕЛЬНОЙ ДЕЯТЕЛЬНОСТИ";
	data.cvalificacia = "ТЕХНИК";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "2 года 10 месяцев";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 9;
	data.code = "23.02.04";
	data.name = "ТЕХНИЧЕСКАЯ ЭКСПЛУАТАЦИЯ ПОДЪЕМНО-ТРАНСПОРТНЫХ, СТРОИТЕЛЬНЫХ, ДОРОЖНЫХ МАШИН И ОБОРУДОВАНИЯ";
	data.cvalificacia = "ТЕХНИК";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "2 года 10 месяцев";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 10;
	data.code = "54.02.01";
	data.name = "ДИЗАЙН";
	data.cvalificacia = "";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "";
	await Specialty.save(data);

	var data = new Specialty();
	data.id = 11;
	data.code = "08.02.03";
	data.name = "ПРОИЗВОДСТВО НЕМЕТАЛЛИЧЕСКИХ СТРОИТЕЛЬНЫХ ИЗДЕЛИЙ И КОНСТРУКЦИЙ";
	data.cvalificacia = "ТЕХНИК ";
	data.forma_obychenia = "очная";
	data.base_9 = "3 года 10 месяцев";
	data.base_11 = "2 года 10 месяцев";
	await Specialty.save(data);
}
