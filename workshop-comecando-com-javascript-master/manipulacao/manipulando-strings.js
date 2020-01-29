var s = "The winter is coming. It's really coming!";
console.log(s.length);
console.log(s.indexOf('coming'));
console.log(s.lastIndexOf('coming'));
console.log(s.slice(4, 10));
console.log(s.slice(4, -8));
console.log(s.substr(4, 6));
console.log(s.replace("winter", "summer"));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.concat("?", "!"));
console.log(s.split(" "));

var starks = "Ned, Jon, Robb, Sansa, Bran, Arya, Rickon";
console.log(starks);
var vetorStarks = starks.split(",");
starks = "";
for (var c = 0; c < vetorStarks.length; c++) {
    starks += vetorStarks[c].trim();
    if (c < vetorStarks.length - 1) {
        starks += ",";
    }
}

console.log(starks);
