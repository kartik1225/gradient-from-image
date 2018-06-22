const Vibrant = require("node-vibrant");


Vibrant.from('test.jpg').getPalette()
  .then((palette) => console.log(palette))


// ejs testing tempalte