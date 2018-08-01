const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

//#1
  describe("GET /", () => {

//#2
    it("should return status code 200", (done) => {

//#3
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);

//#4
        done();
      });
    });

  });

  describe("GET /macro", () => {

    //#2
        it("should return status code 200", (done) => {
    
    //#3
          request.get(base + 'Macro' , (err, res, body) => {
            expect(res.statusCode).toBe(200);
    
    //#4
            done();
          });
        });
    
      });
            it("should return polo", (done) => {
              request.get(base, (err, res, body) => {
                expect(body).toBe('polo');
        
                done();
              });
            });
        
          });