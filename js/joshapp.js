var form = document.querySelector("#form");
var input = document.querySelector("#input");
var error = document.querySelector("#error");
input.addEventListener("keypress", function(event) { //listen for keyboard press event
  error.style.display = 'none';
  //Note: event.which is an ascii representation of the keyboard key. numbers are between 48 and 57
  //Note: "this" refers to the "input" element
  if (event.which < 48 || event.which > 57 || this.value.toString().length >= 8) {
    event.preventDefault();
  }
});
form.onsubmit = function() { //listen for form submitting event
  if (input.value.toString().length != 8) {
    error.style.display = 'block';
    return false; //return false to prevent form from submitting
  } else error.style.display = 'none';
  return true;
};