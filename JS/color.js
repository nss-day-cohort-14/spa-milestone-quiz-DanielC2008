var usedCars = (function(modifyCars) {
	var cars = document.getElementsByClassName('createCar');
	var getInput = document.getElementById('changeDes');
	var clickedDiv;


	// Adding colored border to match car
 	modifyCars.addStyle = function(inventory) {
		inventory.forEach(function(value, i) {
			var currentCar = cars[i];
			var currentColor = value.color;
			currentCar.style.borderColor = value.color;
		})
	}
	// Gather clicked container and color and pass to carClicked
	modifyCars.getId = function() {
		var clicked = event.currentTarget;
		var color = "thistle";
		usedCars.carClicked(clicked, color);
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
	// input changes the clicked car div description
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

	modifyCars.getInput = function() {
		return getInput;
	}

	modifyCars.getClicked = function () {
		return clickedDiv;
	}


	return modifyCars;
})(usedCars || {});