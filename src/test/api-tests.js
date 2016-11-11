var supertest = require('supertest');
var should = require('should');

var request = supertest("http://localhost:8080");
describe('/devices tests', function () {
    it('should return 0 items', function (done) {
        request.get('/api/devices')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (res) {
                res.body.length.should.equal(0);
            })
        .end(done);
    });

    it('should return 200 OK', function (done) {
        request.get('/api/devices')
            .expect(200, done);
    });
    
    it('should return JSON', function (done) {
        request.get('/api/devices')
            .expect('Content-Type', /json/)
            .end(done);
    });

    it('should return CORS header', function(done) {
        request.get('/api/devices')
            .expect('Access-Control-Allow-Origin', '*')
            .end(done);
    });
});