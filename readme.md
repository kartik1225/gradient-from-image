# Get Beatiful Gradiants from the Image

### Install with npm


	npm install gradient-from-image

## How to use? 

> note: currently only works with promises

#### Basic usage
```javascript
var grad = require("gradient-from-image")

const imgUrl = "https://picsum.photos/200/300?image=82";

grad.gr(imgUrl).then(gradient =>{
	// this will gives you array of gradients
	//change this is to element css el.background="` linear-gradient(${gradient})`"
	console.log(gradient);
});
```

## See live demo and full documentation.
[https://kartik1225.github.io/gradient-from-image-demo/](https://kartik1225.github.io/gradient-from-image-demo/#/)


## Modules that used in this pakage

* [node-vibrant](https://github.com/akfish/node-vibrant)
* [pick-a-good-color](https://github.com/colorjs/pick-a-good-color)
* [uiGradients](https://github.com/Ghosh/uiGradients)