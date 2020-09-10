const supertest = require("supertest")
const server = require("../server")

test("GET /", async () => {
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to our API")
})

// test("a placeholder test", () => {
//     expect(2 + 2).toBe(4)
// })