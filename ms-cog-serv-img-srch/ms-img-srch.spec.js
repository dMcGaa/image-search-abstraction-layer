var assert = require('chai').assert;
var msCogImg = require('./ms-img-srch.js');

describe('ms-cog-serv-img-srch', () => {
    describe('msCogImgSrch', () => {
        var searchObj = {
            searchTerms: ['cat', 'mouse'],
            offset: 10
        };
        it('should exist', () => {
            assert.isFunction(msCogImg.searchForImages, 'not a function');
        });
        it('should return ', () => {
            // console.log(msCogImg.searchForImages(searchObj));
            assert.isOk(msCogImg.searchForImages(searchObj), 'does not return') ;
        });
    });
    describe('msCogQueryString', () => {
        it('should take search parameters and return a string', () => {
            var baseStr = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search';
            var arr = ['test', 'one', 'two'];
            var expectedString = String.prototype.concat(baseStr, '?q=', arr.join('%2520'));
            // console.log(msCogImg.getQueryString(arr));
            assert.isFunction(msCogImg.getQueryString);
            assert.equal(msCogImg.getQueryString(arr), expectedString);
        });
    });
});