var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/"
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

// function check200(err, response, body) {
//   expect(response.statusCode).toBe(200);
//   done();
// }


describe("Express Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      // request.get(base_url,
      //   function(err, response, body) {
      //     expect(response.statusCode).toBe(200);
      //     expect(body).toBe("Hello world with MVC Structure");
      //     done();
      //   }
      // );

      supertest(app)
        .get('/')
        .set('Accept', 'text/html')
        .expect('Content-Type', /html/)
        .expect(200, done); // note that we're passing the done as parameter to the expect
    });
    it("returns status code 200 for /users/sabrina", function(done) {
      supertest(app)
        .get('/users/sabrina')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done); // note that we're passing the done as parameter to the expect
    });
    // it('returns status 404 when name is not found', function(done) {
    //   supertest(app)
    //     .get('/users/' + 'junius')
    //     .set('Accept', 'application/json')
    //     .expect('Content-Type', /json/)
    //     .end(function(err, res) {
    //     if (err) return done(err);
    //     done();
    //   });
    // });
    it("returns the correct data for /users/jonathan", function(done) {
      defs = {
          "name": "jonathan",
          "age": 27,
          "email": "jonathan@gmail.com",
          "image": "http://static1.squarespace.com/static/553a8716e4b0bada3c80ca6b/553a9655e4b03939abece18a/5731fc75f85082142b12b095/1462893710445/mayfourblocknature.jpg",
          "quote": "I don't know what to say"
      }
      supertest(app)
        .get('/users/jonathan')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          var userdata = JSON.parse(res.text);
          expect(userdata).to.deep.equal(defs)
        }) // note that we're passing the done as parameter to the expect
    });

  });

  describe("GET /about", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'about',
        function(err, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        }
      );
    });
  });

  describe("GET /contact", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'contact',
        function(err, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        }
      );
    });
  });
});
