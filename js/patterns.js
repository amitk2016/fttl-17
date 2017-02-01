//Patterns to use in validation 
	
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,50}$");

	var phonePattern = new	RegExp("^(?:[0-9]●?){6,14}[0-9]$");

	var emailPattern = new RegExp ("^[a-zA-Z0-9._-]*[@][a-zA-Z]*\.[a-zA-Z]{2,6}$");

	var cityPattern = new RegExp("^[a-zA-Z\s-]+$");