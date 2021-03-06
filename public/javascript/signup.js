async function signupFormHander(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'}
            
        });

        // check the response status
        if(response.ok) {
            document.location.replace('/progressions');
        } else {
            alert(response.statusText)
        }
    } else {
        const errorDiv = document.querySelector('#error-div');
        errorDiv.textContent = 'Please put a username, email and password'
    }
}

document.querySelector('.signup').addEventListener('submit', signupFormHander);

