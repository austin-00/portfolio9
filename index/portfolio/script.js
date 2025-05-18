document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop form from submitting

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Create an object with the data
        const submission = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toLocaleString()
        };

        // Retrieve existing messages or start a new array
        let submissions = JSON.parse(localStorage.getItem("contactMessages")) || [];

        // Add new message
        submissions.push(submission);

        // Save back to local storage
        localStorage.setItem("contactMessages", JSON.stringify(submissions));

        // Reset the form
        contactForm.reset();

        // Success message
        alert("Thank you! Your message has been saved.");
    });
});
