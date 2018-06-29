const Vibrant = require("node-vibrant");
const getGr = require("./getGr.js");
const grFunc = require("./grFunc.js");



module.exports ={
	gr:(imgUrl)=>{
		return Vibrant.from(imgUrl).getPalette()
		  .then((palette) => {
		  	// ading for this value
		  	grFunc.init(palette);


		  	let data = {
		  		vibrant:grFunc.vibrantGr(),
		  		relevent:grFunc.releventGr(),
		  		getTextClr:grFunc.getTextClr
		  	}
		  	return data;
		  }).catch(e=>{
		  	let error = {error:"blocked by CORS policy or invalid url"}
		  	return error;
		  })
	},
	solid:(imgUrl)=>{
		return Vibrant.from(imgUrl).getPalette()
		  .then((palette) => {

		  	for(p in palette){
		  		if(palette[p]){
		  			palette[p].getHex();
		  		}
		  	}

		  	palette.getTextClr = grFunc.getTextClr;

		  	return palette;
		  }).catch(e=>{
		  	let error = {error:"blocked by CORS policy or invalid url"}
		  	return error;
		  })
	},
	Vibrant
}


