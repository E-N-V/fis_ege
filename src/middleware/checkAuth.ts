import { Request, Response } from "express";
import User from "../database/entity/User";

const checkAuthMiddleware = async (req: Request, res: Response, next: any) => {
	if (req.cookies.token) {
		let usr = new User();
		usr.token = req.cookies.token;
		let token = await User.findOne(usr, { select: ["token"] });
		if (token) return next();
		else {
			return res.clearCookie("usr").clearCookie("token").redirect("/auth");
		}
	}
	if (!/^(stylesheet|scripts|images)/im.test(req.url.split("/")[1])) {
		if (req.url != "/auth") if (!req.cookies.usr) return res.redirect("/auth");
	}
	return next();
};
export default checkAuthMiddleware;
