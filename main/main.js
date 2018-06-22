const Vibrant = require("node-vibrant");
const getGr = require("./getGr.js");


module.exports ={
	gr:(imgUrl)=>{

		Vibrant.from("test.jpg").getPalette()
		  .then((palette) => {
		  	console.log(getGr(palette.Vibrant._rgb))
		  })
	}
}


