
const avgcolor = (color1,color2)=>{
	    var avg  = function(a,b){ return (a+b)/2; },

	        t16  = function(c){ return parseInt((''+c).replace('#',''),16) },
	        hex  = function(c){ var t = (c>>0).toString(16);
	                           return t.length == 2 ? t : '0' + t },
	        hex1 = t16(color1),
	        hex2 = t16(color2),
	        r    = function(hex){ return hex >> 16 & 0xFF},
	        g    = function(hex){ return hex >> 8 & 0xFF},
	        b    = function(hex){ return hex & 0xFF},
	        res  = '#' + hex(avg(r(hex1),r(hex2))) 
	                   + hex(avg(g(hex1),g(hex2))) 
	                   + hex(avg(b(hex1),b(hex2)));
	    return res;
}

module.exports = avgcolor;