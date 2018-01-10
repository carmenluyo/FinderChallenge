/*
  main script for only runs every function
*/

searchForm();

var JSON_FILE = '/books_schema.json';
console.log(JSON_FILE);
$.each(JSON_FILE, function(i, v) {
    if (v.name == "Peter") {
        // found it...
        alert(v.age);
        return false; // stops the loop
    }

});