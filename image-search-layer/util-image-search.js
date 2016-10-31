function imageSearch(str) {
    var output = {};
    var temp = getOffset(str);
    output.offset = temp.offset ? temp.offset : 10;
    output.searchTerms = searchTerms(temp.search);
    return output;
}

function searchTerms(str) {
    output = str.split(/\%\w{2}|\W/);
    return output;
}

function getOffset(str) {
    var output = {};
    const offsetVar = new RegExp(/\?offset\=/);
    if (str.match(offsetVar)){
        var tempArr = str.split(offsetVar);
        output.search = tempArr[0];
        output.offset = parseInt(tempArr[1]);
    }
    else {
        output.search = str;
    }
    return output;
}


//nodeJS
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            searchTerms,
            imageSearch,
            getOffset
        }
    }
}