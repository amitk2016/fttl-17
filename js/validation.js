// Find the form..............

var bookingForm = document.querySelector('#submit-form');

//Get references to the input fields

	var nameInput = document.querySelector('#full-name');
	var nameMessage = document.querySelector('#full-name-message');
	var emailInput = document.querySelector('#email');
	var emailMessage = document.querySelector('#email-message');
	var phoneInput = document.querySelector('#phone');
	var phoneMessage = document.querySelector('#phone-message');
	var cityInput = document.querySelector('#city');
	var cityMessage = document.querySelector('#city-message');
	


	// Count how many errors there are
	var totalErrros = 0 ;

	nameInput.onblur = function(){
		
		if (namePattern.test(this.value)) {
			// Hide any existing messages
			nameMessage.innerHTML ='';
		}
		else{
			nameMessage.innerHTML ='Name is invalid';
			// alert('Name is Invalid');
			totalErrros++;
		}

	}

	phoneInput.onblur = function(){
		if (phonePattern.test(this.value)) {
			phoneMessage.innerHTML ='';
		}
		else{
			phoneMessage.innerHTML = 'Phone Number is not valid';
			totalErrros++
		}	
	}

	emailInput.onblur = function(){
		
		if (emailPattern.test(this.value)) {
			// Hide any existing messages
			emailMessage.innerHTML ='';
		}
		else{
			emailMessage.innerHTML ='Email is not valid';
			// alert('Name is Invalid');
			totalErrros++;
		}

	}

	cityInput.onblur = function(){
		
		if (cityPattern.test(this.value)) {
			// Hide any existing messages
			cityMessage.innerHTML ='';
		}
		else{
			cityMessage.innerHTML ='City name is not valid';
			// alert('Name is Invalid');
			totalErrros++;
		}

	}


	var flightOptions = document.querySelectorAll("[name=flights-select]")
	var flightsMessage = document.querySelector('#flights-message');
	var flightsInput = document.querySelector("[name=flights]");

	flightsInput.onblur = function(){

	if (flightsInput.value == 0) {
		flightsMessage.innerHTML = 'Please select an Option';

	}

	else{
		flightsMessage.innerHTML = '';
		totalErrros++;
	}

}



	var planesInput = document.querySelector("[name = planes]");
	var planesMessage = document.querySelector('#planes-message');

	planesInput.onblur = function(){

	if (planesInput.value == 0) {
		planesMessage.innerHTML = 'Please select an Option';

	}

	else{
		planesMessage.innerHTML = '';
		totalErrros++;
	}

}
	
	var flightslengthInput = document.querySelector('#flights-length');
	var flightslengthMessage = document.querySelector("#flights-length-message");


	flightslengthInput.onblur = function(){

	if (this.value == 0) {
		flightslengthMessage.innerHTML ='Please select an Option';

	}

	else{
		flightslengthMessage.innerHTML='';
		totalErrros++;
	}

}

	var originMessage = document.querySelector('#origin-message');
	var originInput = document.querySelector("[name=origin]");

	originInput.onblur = function(){

	if (this.value == 0) {
		originMessage.innerHTML = 'Please select an Option';

	}

	else{
		originMessage.innerHTML = '';
		totalErrros++;
	}

}
var originMessage = document.querySelector('#origin-message');
	var originInput = document.querySelector("[name=origin]");

	originInput.onblur = function(){

	if (this.value == 0) {
		originMessage.innerHTML = 'Please select an Option';

	}

	else{
		originMessage.innerHTML = '';
		totalErrros++;
	}

}

	var destinationMessage = document.querySelector('#destination-message');
	var destinationInput = document.querySelector("[name=destination]");

	destinationInput.onblur = function(){

	if (this.value == 0) {
		destinationMessage.innerHTML = 'Please select an Option';

	}

	else{
		destinationMessage.innerHTML = '';
		totalErrros++;
	}

}






// // Wait for the user to submit the form
bookingForm.onsubmit = function(event) {

	
	if (totalErrros >0) {


	// Stop the form from submitting 

	event.preventDefault();
	}

}








