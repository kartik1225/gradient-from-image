const gradient = require('./gradients.json')


// scorce -- https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// rgbToHex
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
    let {r,g,b} = rgb;
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



const grds = [];

// gets clostest 
const getgr = (rgb)=>{

    gradient.map((d,i)=>{
      d.colors.map(e=>{
        grds.push({index:i,rgb:hexToRgb(e)})
      })
    })

    // algorithum
    const close = grds.map(d=>{
      if (d.rgb !== null){
        let r = d.rgb.r - rgb[0];
        let g = d.rgb.g - rgb[1];
        let b = d.rgb.b - rgb[2];
        let result = Math.sqrt(r*r + g*g + b*b)
        return result;
      }
    })

    var min = close.reduce((iMax, x, i, gradient) => x < gradient[iMax] ? i : iMax, 0);

      const matchClr = rgbToHex(grds[min].rgb).toUpperCase();

      // urrange to the matched hex first
      const final = []

      gradient[grds[min].index].colors.map(d=>{
        if(d === matchClr){
          final.unshift(d)
        }else{
          final.push(d)
        }
      })



      return final;
}

module.exports = getgr;

	

	  