import express, { Application } from "express";
import { join } from "path";

export default class app {
	public app: Application;
	public port: number;

	constructor(appInit: { port: number; middleWares: any; routes: any }) {
		this.app = express();
		this.port = appInit.port;

		this.middlewares(appInit.middleWares);
		this.routes(appInit.routes);
		this.assets();
		this.template();
	}

	private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
		middleWares.forEach((middleWare) => {
			this.app.use(middleWare);
		});
	}

	private routes(routes: { forEach: (arg0: (route: any) => void) => void }) {
		routes.forEach((route) => {
			this.app.use(route);
		});
	}

	private assets() {
		this.app.use(express.static(join(__dirname, "public")));
		this.app.use(express.static(join(__dirname, "views")));
	}

	private template() {
		this.app.set("view engine", "pug");
	}

	public listen() {
		this.app.listen(this.port, async () => {
			console.log(`App listening on the port -> ${this.port} go it now`);
		});
	}
}