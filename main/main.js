const Vibrant = require("node-vibrant");
const getGr = require("./getGr.js");


module.exports ={
	gr:(imgUrl)=>{
		return Vibrant.from(imgUrl).getPalette()
		  .then((palette) => {
		  	if(palette.Vibrant !== null){
		  		const clr =  getGr(palette.Vibrant._rgb);
		  		return clr;
		  	}else{
		  		for(p in palette){
		  			if(palette[p] !== null){
		  				const clr = getGr(palette[p]._rgb);
		  				return clr;
		  				break;
		  			}
		  		}
		  	}

		  })
	}
}


