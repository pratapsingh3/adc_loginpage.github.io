const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validateForm() {
  let x = document.forms["myForm"]["femail"].value;
  let y = document.forms["myForm"]["fpass"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  if (y == "") {
    alert("Password must be filled out");
    return false;
  }
}