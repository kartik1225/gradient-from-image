const getGr = require("./getGr.js");
const avgColor = require('./avgColor.js');
const pick = require('pick-a-good-color');


module.exports = {
	init:(palette )=>{
		this.palette = palette;
	},
	vibrantGr:()=>{
		const palette = this.palette;

  		if(palette.Vibrant !== null){
  			return getGr(palette.Vibrant._rgb);
  		}else{
  			for(p in palette){
  				if(palette[p] !== null){
  					return getGr(palette[p]._rgb);
  					break;
  				}
  			}
  		}

  	},
  	relevantGr:()=>{
  		const palette = this.palette;

	  	let clrs = [];

	  	for(p in palette){
	  		

  			if(palette[p] !== null){
  				const clr = palette[p].getPopulation();

  				clrs.push({clr,palette:palette[p]});
  			}else{
  				clrs.push({clr:0,palette:palette[p]});
  			}

	  	}

		 let popNum = [];

		 clrs.map(d=>{
		 	popNum.push(d.clr);
		 })

		 // gets maximum value from array
		 var i = popNum.indexOf(Math.max(...popNum));
		 let pop = getGr(clrs[i].palette._rgb);

		return pop
  	},
  	getTextClr:(grad)=>{
  	

		const colors = [];
  				
		for(p in this.palette){
			if(this.palette[p]){
				colors.push(this.palette[p].getHex());
			}
	  	}

	  	let options = {
	  		contrast:5,
	  		background:grad
	  	}
		const goodColor = pick(colors, options)

		return goodColor;
  	}
}