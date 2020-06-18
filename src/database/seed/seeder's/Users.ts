import User from "../../entity/User";

export default async function SeedUsers() {
	var data = new User();
	data.id = 1;
	data.login = "Egor";
	data.password = "123456";
	data.f_name = "Егор";
	data.s_name = "Леонтьев";
	data.t_name = "Константинович";
	data.token = "test_token";
	await User.save(data);

	var data = new User();
	data.id = 2;
	data.login = "root";
	data.password = "root";
	data.f_name = "root";
	data.s_name = "root";
	data.t_name = "root";
	data.token = "root";
	await User.save(data);
}
