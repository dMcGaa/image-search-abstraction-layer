var assert = require('chai').assert;
var imageSearch = require('./util-image-search.js');

describe('imageSearch process: ', () => {
    // const START_INPUT = 'cats%20funny?offset=10';
    const ISAL_search = 'cats%20funny';
    const ISAL_offset = '?offset=10';
    const ISAL_Whole = String.prototype.concat(ISAL_search, ISAL_offset);
    describe('imageSearch', () => {
        it('should exist', () => {
            assert.isFunction(imageSearch.imageSearch, 'is not a function');
        });
        it('should return an object with an array of terms and an offset value', () => {
            const output = {
                searchTerms: ['cats', 'funny'],
                offset: 10
            };
            assert.deepEqual(imageSearch.imageSearch(ISAL_Whole), output, 'does not match');
        });
        describe('no offset given in search', () => {
            const output = {
                searchTerms: ['cats', 'funny'],
                offset: 10
            };
            it('should default to some offset value', () => {
                assert.deepEqual(imageSearch.imageSearch(ISAL_search), output, 'does not match');
            });
        });
    });
    describe('getOffest', () => {
        it('should exist', () => {
            assert.isFunction(imageSearch.getOffset, 'is not a function');
        });
        it('should take a string with an offset query and return an object with a search string and an offset variable', () => {
            const output = {
                search: 'cats%20funny',
                offset: 10
            };
            assert.deepEqual(imageSearch.getOffset(ISAL_Whole), output, 'does not match');
        });
    });
    describe('searchTerms', () => {
        it('should exist', function() {
            assert.isFunction(imageSearch.searchTerms, 'is not a function');
        });
        it('should take a string input and return an array of search terms', () => {
            const output = ['cats', 'funny']
            assert.deepEqual(imageSearch.searchTerms(ISAL_search), output, 'does not match');
        });
    });
});
