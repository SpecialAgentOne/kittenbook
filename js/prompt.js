// Get the user`s name
var userName = prompt('Hello, what\'s your name?');
// Get the user`s phone number
var phoneNumber = prompt('Hello ' + userName + ', what\`s your phone number?');
// Create the phone number pattern
var phoneNumberPattern = /(?:1-)?\(?\d{3}[\-\)]\d{3}-d{4}/;
// Create a variable to store the output
var output = '<h1>Hello, ' + userName + '!</h1>';

// Check is the phone number valid
if (phoneNumberPattern.test(phoneNumber)) {
    // Success message, valid
    output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + ' viewed on: ' + kbValues.currentTime + '</p>';
} else {
    // No, number is not valid
    output = output + '<h2>That phone number is invalid: ' + phoneNumber;
}
// Inserting output to the webpage
document.body.innerHTML = output;

document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' + 
                        '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + 
                        ' accessed on: ' + kbValues.currentTime + '</p>';
// comment here