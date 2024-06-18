// Retrieve the input field element
let inputField = document.getElementById('inputField');

// Add an event listener to the form that submits an event
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting if the input value is not alphanumeric
    event.preventDefault();

    // Implement a function that validates the input using a regular expression for alphanumeric input
    function validateinputField() {
        let inputValue = inputField.value
        let regex = /^[a-zA-Z0-9]*$/;

        if (!regex.test(inputValue)) {
            // Display an error message if the input value is not alphanumeric
            alert('Invalid entry! Please enter an alphanumeric value.');
            return false;
        }
        return true;
    }

    // Validate the input field
    if (validateinputField()) {
        // Display a confirmation if the input is valid and 'submits' the form
        alert('Form submitted successfully!');
        document.getElementById('myForm').submit();
    }

});
