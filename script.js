document.getElementById("studentIdForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get the input value
    const studentId = document.getElementById("studentId").value;

    // Perform some validation or processing here
    // For this example, we'll just show an alert with the entered Student ID
    alert(`Student ID submitted: ${studentId}`);
});
