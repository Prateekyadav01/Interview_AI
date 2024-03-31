



function validateSignup(){
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    

    if(confirm_password=== password){
        if(registerLocal()){
            alert("register is done successfully!!")
            return true;
        }
        else{
            alert("register is not done successfully!!")
            return false;
        }
    } else{
        alert("Passwords do not match!!")
        return false;
    }

}

let users = JSON.parse(localStorage.getItem('userList')) ? JSON.parse(localStorage.getItem('userList')):[];

function registerLocal(){
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    

    let newUser={
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
        confirm_password:confirm_password
    }
    let existingUser = users.some(user => user.email === newUser.email);
    if(existingUser){
        alert('Email already exists');
        return false;
    }
    else{
        users.push(newUser);
    }

    let newItem = JSON.stringify(users);
    localStorage.setItem('userList',newItem);
    return true;

}