window.addEventListener("load", function() {
const form = document.getElementById('contactForm');
form.addEventListener("submit", function(e) {
		e.preventDefault();
		const data = new FormData(form);
		const action = e.target.action;
		console.log("hello");
		fetch(action, {
			method: 'POST',
			body: data,
		})
		.then(() => {
			// alert("Success!");
			formSubmitted();
		})
	});
});

//most of below is new logic to verify that a name + email + message are valid before submitting the contact form
//on typing in the message textbox, call verifyForm(); if it returns true, call toggleSubmitButton(true)
function verifyForm(){
	return (verifyName() && verifyEmail() && verifyMessage());
}

function verifyName(){
	var isValid = false;
	
	return isValid;
}

function verifyEmail(){
	var isValid = false;
	
	return isValid;	
}

function verifyMessage(){
	var isValid = false;
	
	return isValid;
}

function toggleSubmitButton(isActive){

}

function formSubmitted(){
	$("#formContainer").hide();
	$("#formSuccessMessage").show();
}