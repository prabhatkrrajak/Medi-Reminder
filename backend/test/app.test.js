import supertest from "supertest"
import {app} from "../server.js"

test("register the customer",async()=>{
    await request(app).post('/signup')
    .send({
        regData:{
            regEmail:"pp@gmail.com",
            regName:"Prabhat",
            regPassword:"123"
        }
    }).expect(200)
})