var usedCars = (function(modifyCars) {
	var cars = document.getElementsByClassName('createCar')

 	modifyCars.addBackground = function(inventory) {
		inventory.forEach(function(value, i) {
			var currentCar = cars[i];
			var currentColor = value.color;
			currentCar.setAttribute(`style`, `border: 6px solid ${currentColor}`);
			console.log(currentColor);


		})
	}

	


	return modifyCars;
})(usedCars || {});