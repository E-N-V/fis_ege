import { Request, Response } from "express";
import { v4 } from "uuid";
import User from "../database/entity/User";

export const AuthGET = async (req: Request, res: Response): Promise<void> => {
	let value = v4();
	return res.status(200).render("auth", { value });
};

export const AuthPOST = async (req: Request, res: Response): Promise<void> => {
	let usr = await User.findOne({
		where: { login: req.body.username, password: req.body.password },
	});
	if (!usr) return res.redirect("/auth");
	if (/(test_token|root)/im.test(usr.token)) {
		usr.token = req.body.token;
		usr.save();
		return res
			.cookie("token", req.body.token, { path: "/", httpOnly: true, secure: false })
			.cookie("usr", `${usr.s_name} ${usr.f_name} ${usr.t_name}`, {
				path: "/",
				httpOnly: true,
				expires: new Date(
					new Date().getFullYear(),
					new Date().getMonth(),
					new Date().getDate(),
					new Date().getHours() + 1,
					new Date().getMinutes(),
					new Date().getSeconds()
				),
			})
			.redirect("/");
	} else {
		return res.render("auth", {err: "Пользователь уже авторизирован."});
	}
};
