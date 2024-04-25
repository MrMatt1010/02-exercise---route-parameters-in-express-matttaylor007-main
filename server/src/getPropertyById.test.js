const getPropertyById = require("./getPropertyById");
const properties = [{ id: "a" }, { id: "b" }, { id: "c" }];

describe("getPropertyById", () => {
  it("should return a single property that matches the id passed in", () => {
    const result = getPropertyById(properties, "a");
    const expected = { id: "a" };

    expect(result).toEqual(expected);
  });
});
