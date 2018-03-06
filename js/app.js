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
//User interface Logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedIDNumber = $("input#new-id-number").val();
    var inputtedPhoneNumber= $("input#new-phone-number").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedPostCode = $("input#new-post-code").val();

    var newUser = new User(inputtedFirstName, inputtedLastName, inputtedIDNumber, inputtedPhoneNumber, inputtedEmail, inputtedAddress, inputtedPostCode);
    $("p#show-user").append("<p><span class='new-first-name'>" + newUser.firstName + "</span></p>");
    $("p#show-user").append("<p><span class='new-last-name'>" + newUser.lastName + "</span></p>");
    $("p#show-user").append("<p><span class='new-id-number'>" + newUser.idNumber + "</span></p>");
    $("p#show-user").append("<p><span class='new-phone-number'>" + newUser.phoneNumber + "</span></p>");
    $("p#show-user").append("<p><span class='new-email'>" + newUser.email + "</span></p>");
    $("p#show-user").append("<p><span class='new-address'>" + newUser.address + "</span></p>");
    $("p#show-user").append("<p><span class='new-post-code'>" + newUser.postCode + "</span></p>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-id-number").val("");
    $("input#new-phone-number").val("");
    $("input#new-email").val("");
    $("input#new-address").val("");
    $("input#new-post-code").val("");

  });
});
