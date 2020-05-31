import request from "supertest";
import app from "../app";
import HomeRouter from "../routes/home.route";
import AuthRouter from "../routes/auth.route";
import ApplicantRouter from "../routes/applicant.route";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import loggerMiddleware from "../middleware/logger";
// Попробовал добавить app, все равно не работает :с
// const arrRoutes: any = [HomeRouter, AuthRouter, ApplicantRouter];
//
// const arrMiddlewares: any = [bodyParser.json(), bodyParser.urlencoded({ extended: true }), cookieParser(), loggerMiddleware];
//
// const app = new App({
//     port: Number(process.env.PORT) || 3000,
//     routes: arrRoutes,
//     middleWares: arrMiddlewares,
// });

// TODO: Сделать тесты

it("Hello", async () => {
    request(app)
        .get('localhost:3000/test')
        .expect('Hello test')
        .expect(200)
        .end()
});

