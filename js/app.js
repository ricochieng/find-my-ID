//Business Logic
function User (first, last, id, phone, email, address, code) {
  this.firstName=first;
  this.lastName=last;
  this.idnumber=id;
  this.phonenumber=phone;
  this.email=email;
  this.address=address;
  this.code=code;
}
//User interface Logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedIDNumber = $("input#new-first-name").val();
    var inputtedPhoneNumber= $("input#new-phone-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedPostCode = $("input#new-post-code").val();

    var newUser = new User(inputtedFirstName, inputtedLastName, inputtedIDNumber, inputtedPhoneNumber, inputtedEmail, inputtedAddress, inputtedPostCode);
