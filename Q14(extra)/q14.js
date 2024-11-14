let nav = document.getElementsByTagName('nav')[0];
document.body.style.marginTop = nav.clientHeight + 20;

const msgBox = document.getElementById('msg');
const overlay = document.getElementById('overlay');
msgBox.style.display = 'none';
overlay.style.display = 'none';

let saveUserID, savePassword;

document.getElementById('signupBtn').addEventListener('click', () => {
    let userID = document.getElementById('userID').value.trim();
    let pass = document.getElementById('pass').value.trim();
    let confirmPass = document.getElementById('confirmPass').value.trim();

    if (userID === "" || pass === "" || confirmPass === "") {
        msgBox.style.display = 'flex';
        overlay.style.display = 'block';
        document.getElementById('message').innerText = 'All fields must be filled';
    } else if (pass !== confirmPass) {
        msgBox.style.display = 'flex';
        overlay.style.display = 'block';
        document.getElementById('message').innerText = 'Passwords do not match';
    } else if (pass.length <= 4) {
        msgBox.style.display = 'flex';
        overlay.style.display = 'block';
        document.getElementById('message').innerText = 'Password should be more than 4 characters';
    }
    else {
        saveUserID = userID;
        savePassword = pass;
        msgBox.style.display = 'flex';
        overlay.style.display = 'block';
        document.getElementById('message').innerText = 'Registration Successful';
        document.getElementById('userID').value = "";
        document.getElementById('pass').value = "";
        document.getElementById('confirmPass').value = "";
    }
});

document.getElementById('loginBtn').addEventListener('click', () => {
    let userID = document.getElementById('loginUserID').value.trim();
    let pass = document.getElementById('loginPass').value.trim();

    if (userID === "" || pass === "") {
        msgBox.style.display = 'flex';
        overlay.style.display = 'block';
        document.getElementById('message').innerText = 'All fields must be filled';
    } else if (userID !== saveUserID || pass !== savePassword) {
        msgBox.style.display = 'flex';
        overlay.style.display = 'block';
        document.getElementById('message').innerText = 'Invalid credentials';
        document.getElementById('loginUserID').value = "";
        document.getElementById('loginPass').value = "";
    } else {
        msgBox.style.display = 'flex';
        overlay.style.display = 'block';
        document.getElementById('message').innerText = 'Login Successful';
    }
});

document.querySelector('.cross').addEventListener('click', () => {
    msgBox.style.display = 'none';
    overlay.style.display = 'none';
});

const signUp = document.getElementById('signUp');
const login = document.getElementById('login');

login.style.opacity = '0.2';
login.style.filter = 'blur(3px)';
signUp.classList.add('animate');
signUp.addEventListener('click', () => {
    login.style.opacity = '0.2';
    signUp.style.opacity = '1';
    login.style.filter = 'blur(3px)';
    signUp.style.filter = 'blur(0)';
    signUp.classList.add('animate');
    login.classList.remove('animate');

});
login.addEventListener('click', () => {
    signUp.style.opacity = '0.2';
    login.style.opacity = '1';
    signUp.style.filter = 'blur(3px)';
    login.style.filter = 'blur(0)';
    login.classList.add('animate');
    signUp.classList.remove('animate');
});








