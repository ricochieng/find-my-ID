//Business Logic
function User (first, last, id, phone, email, address, code) {
  this.firstName=first;
  this.lastName=last;
  this.idNumber=id;
  this.phoneNumber=phone;
  this.email=email;
  this.address=address;
  this.postCode=code;
}
User.prototype.firstName = function() {
  return this.firstName;
}
User.prototype.lastName = function() {
  return this.lastName;
}
User.prototype.idNumber = function() {
  return this.idNumber;
}
User.prototype.phoneNumber = function() {
  return this.phoneNumber;
}
User.prototype.email = function() {
  return this.email;
}
User.prototype.address = function() {
  return this.address;
}
User.prototype.postCode = function() {
  return this.postCode;
}
//User interface Logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();
    var inputtedIDNumber = $("#new-id-number").val();
    var inputtedPhoneNumber= $("#new-phone-number").val();
    var inputtedEmail = $("#new-email").val();
    var inputtedAddress = $("#new-address").val();
    var inputtedPostCode = $("#new-post-code").val();
    var newUser = new User(inputtedFirstName, inputtedLastName, inputtedIDNumber, inputtedPhoneNumber, inputtedEmail, inputtedAddress, inputtedPostCode);

    /* $("#new-first-name").val("");
      $("#new-last-name").val("");
      $("#new-id-number").val("");
      $("#new-phone-number").val("");
      $("#new-email").val("");
      $("#new-address").val("");
      */
    $("#submit").last().click(function() {
      $("#show-user").show();
      $(".new-first-name").text(newUser.firstName);
      $(".new-last-name").text(newUser.lastName);
      $(".new-id-number").text(newUser.idNumber);
      $(".new-phone-number").text(newUser.phoneNumber);
      $(".new-email").text(newUser.email);
      $(".new-address").text(newUser.address);
      $(".new-post-code").text(newUser.postCode);

    });

console.log(inputtedPhoneNumber);
  });
});
