import express, { Application } from "express";
import { join } from "path";
import { createConnection } from "typeorm";

export default class app {
	public app: Application;
	public port: number;

	constructor(appInit: { port: number; middleWares: any; routes: any }) {
		this.app = express();
		this.port = appInit.port;

		this.db_connect();
		this.middlewares(appInit.middleWares);
		this.routes(appInit.routes);
		this.assets();
		this.template();
	}

	private middlewares(middleWares: any) {
		for (const middleWare of middleWares) this.app.use(middleWare);
	}

	private routes(routes: any) {
		for (const route of routes) this.app.use(route);
	}

	private assets() {
		this.app.use(express.static(join(__dirname, "public")));
		this.app.use(express.static(join(__dirname, "views")));
	}

	private template() {
		this.app.set("view engine", "pug");
	}

	private async db_connect() {
		await createConnection()
			.then(() => console.log("Database connected."))
			.catch((err) => console.error(err));
	}

	public listen() {
		this.app.listen(this.port, async () => {
			console.log(`App listening on the port -> ${this.port} go it now`);
		});
	}
}
