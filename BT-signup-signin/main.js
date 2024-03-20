
// let userList = []
// var login_check = 0
function register() {
    var userList = JSON.parse( localStorage.getItem('userList') )
    if (userList===null) {
        userList = []
    }
    console.log('hehe');

    const new_username = document.getElementById('new_username').value;
    const new_password = document.getElementById('new_password').value;

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
    redirectToLogin();
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", register);
});

function redirectToLogin() {
    // const token = localStorage.getItem("token");

    window.location.href = "index-login.html"

}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var check = {
        username : username,
        password : password
    }
    console.log(check);
    const token = localStorage.getItem('userList')

    data = JSON.parse(token)
    console.log(data);
    login_check = 0

    for (var i=0;i<data.length; i++) {
        if (data[i].username == check.username && data[i].password == check.password) {
            login_check = 1
            break
        }
    } 
    redirectToNewPage(login_check)
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