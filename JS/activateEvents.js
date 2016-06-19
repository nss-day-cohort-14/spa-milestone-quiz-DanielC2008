var usedCars = (function(modifyCars) {

	modifyCars.activateEvents = function() {
	 usedCars.getInput().addEventListener("keyup", usedCars.changeInput)
	 
	} 

	return modifyCars;
})(usedCars || {});