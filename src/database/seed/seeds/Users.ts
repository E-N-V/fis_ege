import User from "../../entity/User";

export default async function SeedUsers() {
	var data = new User();
	data.id = 1;
	data.login = "root";
	data.password = "root";
	data.f_name = "root";
	data.s_name = "root";
	data.t_name = "root";
	data.token = "root";
	await User.save(data);

	var data = new User();
	data.id = 2;
	data.login = "Yrazmetova";
	data.password = "adm_Yrazmetova";
	data.f_name = "Наталья";
	data.s_name = "Уразметова";
	data.t_name = "Александровна";
	data.token = "root";
	await User.save(data);

	var data = new User();
	data.id = 3;
	data.login = "Zalesova";
	data.password = "adm_Zalesova";
	data.f_name = "Наталья";
	data.s_name = "Залесова";
	data.t_name = "Юрьевна";
	data.token = "root";
	await User.save(data);

	var data = new User();
	data.id = 4;
	data.login = "Fanievna";
	data.password = "adm_Fanievna";
	data.f_name = "Багия";
	data.s_name = "Урманова";
	data.t_name = "Фанавиевна";
	data.token = "test_token";
	await User.save(data);
}
