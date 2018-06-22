const Vibrant = require("node-vibrant");
const getGr = require("./getGr.js");


module.exports ={
	gr:(imgUrl)=>{
		return Vibrant.from(imgUrl).getPalette()
		  .then((palette) => {
		  	 const clr =  getGr(palette.Vibrant._rgb);
		  	 // console.log(clr);
		  	 return clr;
		  })
	}
}


