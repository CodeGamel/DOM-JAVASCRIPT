function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
    const submittedDataDiv = document.getElementById('submitted-data');

    errorMessage.textContent = '';

    if (!name || !email || !message) {
        errorMessage.textContent = 'Please fill out all fields.';
        return;
    }

    const userData = {
        name,
        email,
        message
    };

    submittedDataDiv.innerHTML = `
        <h2>Submitted Data:</h2>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Message:</strong> ${userData.message}</p>
    `;

    document.getElementById('user-form').reset();
}

document.getElementById('user-form').addEventListener('submit', handleFormSubmission);