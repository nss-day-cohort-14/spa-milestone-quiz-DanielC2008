var usedCars = (function (modifyCars) {
	var inventory = [];
	var carEl = document.getElementById("carEl");


	//////////// SET UP AN XHR ///////////////
	modifyCars.loadCars = function (callback) {
		var parseCars = new XMLHttpRequest();
		parseCars.open("GET", "inventory.json");
		parseCars.send();

		parseCars.addEventListener("load", function() {
			inventory = JSON.parse(this.responseText).cars;
			callback(inventory);
		});

		parseCars.addEventListener("error", function() {
			alert("ERROR");
		});

	};

	//////////// GETTER FOR INVENTORY ///////////////
	modifyCars.getInventory = function (){
		return inventory;
	};

	////////// BUILD UP HTML ///////////////
	modifyCars.buildCar = function() {
		var newCar;
			////// CREATE EACH ELEMENT//////
			inventory.forEach(function (value, i) {
  			 var createCar = document.createElement('div'),
  			 carWrapper = document.createElement('ul'),
  			 carMake = document.createElement('li'),
         carModel = document.createElement('li'),
  			 carColor = document.createElement('li'),
  			 carYear = document.createElement('li'),
  			 carPrice = document.createElement('li'),
  			 carPurchased = document.createElement('li'),
  			 carDescription = document.createElement('li');
  			 ////// CLASSES/ID //////
  			 createCar.classList.add(`createCar`);
  			 createCar.classList.add('col-md-3');
  			 createCar.id = `createCar--${i}`;
  			 carMake.classList.add(`carMake`);
  			 carMake.id = `carMake--${i}`;
         carModel.classList.add(`carModel`);
         carModel.id = `carModel--${i}`;
         carColor.classList.add(`carColor`);
  			 carColor.id = `carColor--${i}`;
  			 carYear.classList.add(`carYear`);
  			 carYear.id = `carYear--${i}`;
   			 carPrice.classList.add(`carPrice`);
  			 carPrice.id = `carPrice--${i}`;
  			 carPurchased.classList.add(`carPurchased`);
  			 carPurchased.id = `carPurchased--${i}`;
  			 carDescription.classList.add(`carDescription`);
  			 carDescription.id = `carDescription--${i}`;
  			 ////// PRINT ARRAY //////
  			 carMake.innerText = `Make: ${value.make}`;
         carModel.innerText = `Model: ${value.model}`;
  			 carColor.innerText = `Color: ${value.color}`;
  			 carYear.innerText = `Year: ${value.year}`;
  			 carPrice.innerText = `Price: $${value.price}`;
         if (value.purchased === false) {
          carPurchased.innerText = "Available";
         }
         else {
          carPurchased.innerText = "Not Available";
         }
  			 carDescription.innerText = `${value.description}`;
  			 ////// APPEND ELEMENTS //////
  			 createCar.appendChild(carWrapper);
  			 carWrapper.appendChild(carMake);
         carWrapper.appendChild(carModel);
  			 carWrapper.appendChild(carColor);
  			 carWrapper.appendChild(carYear);
  			 carWrapper.appendChild(carPrice);
         carWrapper.appendChild(carPurchased); 
  			 carWrapper.appendChild(carDescription);
  			 newCar = createCar;
  			 
  			 carEl.appendChild(newCar);
  			 document.getElementById(`createCar--${i}`).addEventListener("click", usedCars.getId);
	  	});	
	};

	return modifyCars;
})(usedCars || {});
