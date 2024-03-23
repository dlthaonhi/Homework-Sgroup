
// let userList = []
// var login_check = 0

const token = localStorage.getItem('userList')

data = JSON.parse(token)
console.log(data);

function register() {
    //check userList
    var userList = JSON.parse( localStorage.getItem('userList') )
    if (userList===null) {
        userList = []
    }

    const new_username = document.getElementById('new_username').value;
    const new_password = document.getElementById('new_password').value;

    register_check=0
    for (var i=0;i<data.length; i++) {
        if (data[i].username == new_username) {
            register_check = 1
            alert ("This username is taken. Try another.")
            console.log("taken");
            break
        }
    }

    if (register_check == 0) {
        const user = {
            username: new_username,
            password: new_password
        }
        userList.push(user)
        var json = JSON.stringify(userList)
        // console.log(json);
        // userList[userList.length+1] = user
        // var json = JSON.stringify(user)
        const save = localStorage.setItem('userList', json)
        // console.log(save);
        // redirectToLogin();
    }

}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", register);
});

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("open-login").addEventListener("click", redirectToLogin);
// });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login_page").addEventListener("click", redirectToLogin());
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("open-register").addEventListener("click", redirectToRegister);
});

function redirectToRegister() {
    // const token = localStorage.getItem("token");

    window.location.href = "index-register.html"

}

function redirectToLogin() {
    // const token = localStorage.getItem("token");

    // window.location.href = "index-login.html"
    console.log('omg');
    document.getElementById("open-login").style.display = 'block';
    document.getElementById("button").style.display = 'none';

}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    var check = {
    username : username,
    password : password
    }
    
    console.log(check);

    login_check = 0

    for (var i=0;i<data.length; i++) {
        if (data[i].username == check.username && data[i].password == check.password) {
            login_check = 1
            console.log("hihi");
            redirectToNewPage(login_check)
            // console.log("hihi");
        }
    } 
    
    if (login_check ==0) {
        for (var i=0;i<data.length; i++) {
            if (data[i].username != check.username || data[i].password != check.password) {
                login_check++;
                if (login_check > 0) {
                    if (i=data.length -1) {
                        login_check =0
                        alert ("Wrong username or password. Try again or register!")
                    }
                }
                
            }
        }
    }

    
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button-login").addEventListener("click", login);
});

function redirectToNewPage(login_check) {
    if (login_check == 1) {
        window.location.href = "./index-final.html"
        // alert ='Success'
    } 
    else {
        console.log("Token not found in storage");
        alert ("Token not found in storage")
    }
}