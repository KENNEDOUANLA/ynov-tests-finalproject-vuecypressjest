const request = require("supertest")
const app = require("./app")
// const cartModel = require("./models/cart.js")

describe("Tests API Requests", () => {
  // let thisDb = cartModel

  // // Before any tests run, clear the DB and run migrations with Sequelize sync()
  // beforeAll(async () => {
  //   await thisDb.sequelize.sync({ force: true })
  // })

  test("getCart should response the GET method with a 201", done => {
    request(app)
      .get("/cart/getCart")
      .then(response => {
        expect(response.statusCode).toBe(201)
        done()
      })
  })
  test("It should response the POST method with a 201", done => {
    const item = { name: "Perso 1", price:15, nbAddToCart:5, image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg" }
    request(app)
      .post("/cart/addProduct")
      .send({item: item})
      .then(response => {
        expect(response.statusCode).toBe(201)
        done()
      })
  })
  test("deleteProduct should response the POST method with a 201", done => {
    const id = { id: 1}
    request(app)
      .post("/cart/deleteProduct")
      .send(id)
      .then(response => {
        expect(response.statusCode).toBe(201)
        done()
      })
  })
})