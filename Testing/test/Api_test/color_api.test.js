var request = require('request');
var expect = require('chai').expect;

describe("Color Api fetching", function(){
    test("Red", function(success){
        request.get({url:"https://demo.reactstorefront.io/api/p/1?color='Red'"},function(err, res, body){
            var obj=JSON.parse(body)
            console.log(obj);
            
            expect(res.statusCode).to.equal(200)
            expect(obj.pageData.title).to.equal("Product 1")
            success()
        })
    })
})