function populatePage () {
  // Loop over the inventory and populate the page
	usedCars.loadCars(usedCars.buildCar);
	usedCars.loadCars(usedCars.addStyle);

  // Now that the DOM is loaded, establish all the event listeners needed
	usedCars.activateEvents();

}
populatePage();










