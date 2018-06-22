const main = require("./main/main.js");

main.gr("https://picsum.photos/200/300?image=51").then(r=>{
	console.log(r);
});

