const request = require("supertest");
const app = require("../app");

describe("Invalid url test", () => {
  test("record path is not valid", () => {
    const resp = request(app).post("/record").send({
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 3000,
    });
    expect(resp.statusCode).toBe(404);
    done();
  });
});

describe("Invalid request", () => {
  test("startDate is missing", () => {
    const resp = request(app).post("/records").send({
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 3000,
    });
    expect(resp.statusCode).toBe(400);
    done();
  });
  test("endDate is missing", () => {
    const resp = request(app).post("/records").send({
      startDate: "2016-01-26",
      minCount: 2700,
      maxCount: 3000,
    });
    expect(resp.statusCode).toBe(400);
    done();
  });
  test("minCount is missing", () => {
    const resp = request(app).post("/records").send({
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      maxCount: 3000,
    });
    expect(resp.statusCode).toBe(400);
    done();
  });
  test("maxCount is missing", () => {
    const resp = request(app).post("/records").send({
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 2700,
    });
    expect(resp.statusCode).toBe(400);
    done();
  });
  test("maxCount is a string", () => {
    const resp = request(app).post("/records").send({
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: "something",
    });
    expect(resp.statusCode).toBe(400);
    done();
  });
  test("minCount is a string", () => {
    const resp = request(app).post("/records").send({
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: "something",
      maxCount: 3000,
    });
    expect(resp.statusCode).toBe(400);
    done();
  });
});
