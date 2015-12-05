var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");
var random = Math.random();

// UNIT test begin
describe("REST API unit test.",function(){
    it("should return all products",function(done){
        // Test Get All Products
        server
            .get("/api/products")
            .expect("Content-type",/json/)
            .expect(200) // This is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.body.result.should.equal(true);
                done();
            });

    });

    it("should return insert product",function(done){
        // Insert Product
        server
            .post("/api/products")
            .send({title : "This is title"+random, description : "This is description", price : 3000})
            .expect("Content-type",/json/)
            .expect(200) // This is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.body.result.should.equal(true);
                done();
            });

    });

    it("should return error insert product with duplicate data",function(done){
        // Insert Product With Duplicate Data
        server
            .post("/api/products")
            .send({title : "This is title"+random, description : "This is description", price : 3000})
            .expect("Content-type",/json/)
            .expect(200) // This is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.body.result.should.equal(false);
                done();
            });

    });

    it("should return error insert product with duplicate data",function(done){
        // Insert Product With Duplicate Data
        server
            .post("/api/products")
            .send({title : "This is title"+random, description : "This is description", price : 3000})
            .expect("Content-type",/json/)
            .expect(200) // This is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.body.result.should.equal(false);
                done();
            });

    });

});