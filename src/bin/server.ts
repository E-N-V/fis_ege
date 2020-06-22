import App from "../app";

/**
 * Import middleware
 */
import * as bodyParser from "body-parser";
import loggerMiddleware from "../middleware/logger";
import cookieParser from "cookie-parser";
import checkAuthMiddleware from "../middleware/checkAuth";

const arrMiddlewares: any = [
	bodyParser.json(),
	bodyParser.urlencoded({ extended: true }),
	cookieParser(),
	loggerMiddleware,
	checkAuthMiddleware,
];

/**
 * Import routes
 */
import HomeRouter from "../routes/home.route";
import AuthRouter from "../routes/auth.route";
import ApplicantRouter from "../routes/applicant.route";
import SearchRouter from "../routes/search.route";
import { join } from "path";
import { parse_excel } from "../util/parse_excel";
import Applicant from "../database/entity/Applicant";

const arrRoutes: any = [HomeRouter, AuthRouter, ApplicantRouter, SearchRouter];

/**
 * Init Web-site
 */
const app = new App({
	port: Number(process.env.PORT) || 3000,
	routes: arrRoutes,
	middleWares: arrMiddlewares,
});

/**
 * Start web-site
 */
app.listen();

/**
 * Script backup db
 */
setInterval(async ()=>{
	let applicant = await Applicant.find({relations: ["admission", "request"]})
	let nameFile = `Приемная коммисия ${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
	await parse_excel(nameFile, applicant, "backup");
}, 3600000)