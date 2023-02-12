document.getElementById('btn-submit').addEventListener('click',function(){
    const email = document.getElementById('in-email').value;
    const password = document.getElementById('in-password').value;

    if(email === 'nahid@gmail.com' && password === '1111'){
        console.log('pass and email match!!')
    }
    else{
        console.log('enter correct pass and email')
    }
})