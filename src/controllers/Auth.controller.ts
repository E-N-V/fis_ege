import { Request, Response } from "express";
import { v4 } from "uuid";
import User from "../database/entity/User";

export const AuthGET = async (req: Request, res: Response): Promise<void> => {
	let value = v4();
	return res.status(200).render("auth", { value });
};

export const AuthPOST = async (req: Request, res: Response): Promise<void> => {
	let usr = new User();
	usr.login = req.body.username;
	usr.password = req.body.password;
	let userName = await User.findOne(usr);
	if (!userName) return res.redirect("/auth");
	userName.token = req.body.token;
	userName.save();
	return res
		.cookie("token", req.body.token, { path: "/", httpOnly: true, secure: false })
		.cookie("usr", `${userName.s_name} ${userName.f_name} ${userName.t_name}`, {
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
};
