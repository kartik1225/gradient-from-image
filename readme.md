# Get Beatiful Gradiants from the Image

### Install with npm


> npm install gradient-from-image

## How to use? 

	note: currently oly works with promisies

#### Javascript
```javascript
	import grad from "gradient-from-image"

	// you can specify path from localy or from url

	const imgUrl = "https://picsum.photos/200/300?image=82";

	grad.gr().then(gradient =>{
		// this will gives you array of gradients
		//change this is to element css el.background="` linear-gradient(${gradient})`"

		console.log(gradient);
	});
```

## Modules that used in this pakage

* vibrant.js
