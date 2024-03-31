let user = JSON.parse(localStorage.getItem('userList'));

console.log(user);



function checkLogin(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let exist = user.some((user) => user.email === email && user.password === password);
    console.log(exist);
    if(exist){
            window.location.href = '../src/index.html';
            return true;
    } else{
        alert('Login is not succeesfully');
        return false;
    }
}