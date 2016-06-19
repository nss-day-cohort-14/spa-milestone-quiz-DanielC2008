var usedCars = (function(modifyCars) {
	var cars = document.getElementsByClassName('createCar');
	var getInput = document.getElementById('changeDes');
	var clickedDiv;


 	modifyCars.addStyle = function(inventory) {
		inventory.forEach(function(value, i) {
			var currentCar = cars[i];
			var currentColor = value.color;
			currentCar.style.borderColor = value.color;
		})
	}

	//Function to change border and color and gain focus
	modifyCars.carClicked = function(clicked, color){
		getInput.value = "";
		for(i = 0; i < cars.length; i++) {
			cars[i].classList.remove("changeEl");
		}
		clicked.classList.add("changeEl");
		getInput.focus();
		clickedDiv = clicked;
	};

	modifyCars.getInput = function() {
		return getInput;
	}

	modifyCars.getClicked = function () {
		return clickedDiv;
	}


	return modifyCars;
})(usedCars || {});