const main = require("./main/main.js");

main.gr("test.jpg").then(r=>{
	console.log(r.getTextClr(r.vibrant[1]));
});

