var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

var app=require('.././server.js')
var request = require('request')
var expect = require('expect')

var base_url = "http://localhost:3000/tasklist"
describe('GET /tasklist', function() {
    it('should return status code 200', function(done) {
        request.get(base_url, function(err,response,body){
            expect(response.statusCode).toBe(200);
            done();
        })
    })
});

describe('GET /endtask', function() {
  it('should return status code 404', function(done) {
    var base_url = "http://localhost:3000/endtask"
      request.get(base_url, function(err,response,body){
          expect(response.statusCode).toBe(404);
          done();
      })
  })
});