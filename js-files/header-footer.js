document.getElementById('subscribe-link').addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;
    if (emailInput) {
        alert("Thank you for subscribing!");
        document.getElementById('email').value = ''; // Clear the input field
    } else {
        alert("Please enter a valid email address.");
    }
});