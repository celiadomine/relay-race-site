document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting through the browser

    var form = event.target;
    var data = new FormData(form);

    fetch('https://formspree.io/f/mleqaqby', {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('responseMessage').style.display = 'block';
            document.getElementById('responseMessage').innerHTML = 'Thank you for your registration!';
            form.reset(); // Reset all form fields
        } else {
            document.getElementById('responseMessage').innerHTML = 'Oops! There was a problem with your submission.';
            document.getElementById('responseMessage').style.display = 'block';
        }
    })
    .catch((error) => {
        document.getElementById('responseMessage').innerHTML = 'Error: ' + error;
        document.getElementById('responseMessage').style.display = 'block';
    });
};