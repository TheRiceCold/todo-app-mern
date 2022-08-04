import request from "supertest";
import app from "./app";

describe("Todos API", () => {
  it("GET /api/todos -> array todos", () => {
    return request(app)
      .get("/api/todos")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              title: expect.any(String),
              isCompleted: expect.any(Boolean)
            })
          ])
        );
      });
  });

  it("POST /api/todos/ -> created todo", () => {
    return request(app)
      .post("/api/todos")
      .send({
        title: "some todo idk",
        description: "some description idk"
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then(response => {
        expect(response.body).toEqual(
          expect.objectContaining({
            title: "some todo idk",
            description: "some description idk",
            isCompleted: false
          })
        )
      })
  });
});

