var usedCars = (function(modifyCars) {
	var getContainer = document.getElementById("carEl");
	var getButton = document.getElementById("button");

	modifyCars.activateEvents = function() {
	 var getInput = document.getElementById('changeDes');
	 getInput.addEventListener("keyup", usedCars.changeInput)
	} 

	modifyCars.getId = function() {
		var clicked = event.currentTarget;
		var color = "thistle";
		usedCars.carClicked(clicked, color);
	}
	modifyCars.changeInput = function() {
		var clicked = usedCars.getClicked();
  	if (event.keyCode === 13) {
  		usedCars.getInput().value = " ";
		}
		else {
			var changeCar = clicked.getElementsByClassName('carDescription')[0];
			changeCar.innerHTML = usedCars.getInput().value;
		}


	}


	return modifyCars;
})(usedCars || {});