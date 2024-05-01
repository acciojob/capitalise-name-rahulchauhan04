//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById('fname'); // Get the input element by ID
    inputField.addEventListener('blur', function() {   // Add event listener for the 'blur' event
        inputField.value = inputField.value.toUpperCase(); // Convert the text to uppercase
    });
});
