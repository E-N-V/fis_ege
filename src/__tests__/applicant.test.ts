import app from "../app";
import request from "supertest";
import {Request, Response} from "express"
import typescript from 'express'

describe("GET / - a simple api endpoint", () => {
    it("Hello API Request", async () => {
       request(app)
           .get('/sdsds')
           .set('Accept', 'application/json')
           // .expect('Content-Type', /json/)
           // .expect(200);
    });
});
