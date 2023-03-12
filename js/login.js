document.getElementById('btn-submit').addEventListener('click', function () {
    const email = document.getElementById('in-email').value;
    const password = document.getElementById('in-password').value;

    if (email === 'nahid@gmail.com' && password === '1111') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please enter valid email and password');
    }
})

