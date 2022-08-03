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
              done: expect.any(Boolean)
            }),
          ])
        );
      });
  });

  it("GET /api/todos/:id -> specific todo by ID", () => {

  });

  it("GET /api/todos/:id -> 404 if not found", () => {

  });

  it("POST /api/todos/ -> created todo", () => {

  });

  it("GET /api/todos -> validates request body", () => {
     
  });
});

