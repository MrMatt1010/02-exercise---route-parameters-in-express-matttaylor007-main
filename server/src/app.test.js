const request = require("supertest");
const app = require("./app");
const properties = require("./properties.json");

describe("app", () => {
  it("GET /properties should retrieve a list of properties", async () => {
    await request(app)
      .get("/properties")
      .expect((res) => {
        expect(res.body).toEqual(properties);
      })
      .expect(200);
  });

  it("GET /properties/1 should retrieve property with the id 1", async () => {
    const expected = {
      id: "1",
      askingPrice: "$891822.26",
      description:
        "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
      address: "8 Shasta Pass",
      title: "A Beauty on Shasta",
      img: "https://placeimg.com/640/480/arch",
    };

    await request(app)
      .get("/properties/1")
      .expect((res) => {
        expect(res.body).toEqual(expected);
      })
      .expect(200);
  });

  it("GET /properties/bad-id should respond with a 404 status code", async () => {
    await request(app).get("/properties/bad-id").expect(404);
  });
});
