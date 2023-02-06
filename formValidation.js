const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const age = document.getElementById("age");

form.addEventListener("submit", e => {
	e.preventDefault();
	
	checkInputs();
});

const checkInputs = () => {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    const ageValue = age.value.trim();
	
	if(usernameValue === "") {
		setErrorFor(username, "Tu nombre de usuario no puede estar vacío");
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === "") {
		setErrorFor(email, "Tu nombre de email no puede estar vacío");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "No es un email valido");
	} else {
		setSuccessFor(email);
	}
    if(ageValue === "") {
		setErrorFor(age, "Debes especificar tu edad");
	} else if(ageValue < 0 || ageValue > 99) {
		setErrorFor(age, "Tu edad debe ser un numero entre 1 y 99");
	} else{
		setSuccessFor(age);
	}	
	if(passwordValue === "") {
		setErrorFor(password, "La contraseña no puede estar vacía");
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === "") {
		setErrorFor(password2, "La contraseña no puede estar vacía");
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, "Las contraseñas no coinciden");
	} else{
		setSuccessFor(password2);
	}
}

const setErrorFor = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

const setSuccessFor = (input) => {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}
	
const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}