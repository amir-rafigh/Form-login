const username = document.getElementById('username');
const password = document.getElementById('password');

username.addEventListener('click' , ()=>{
    username.classList.add('username_one')
})
username.addEventListener('blur'  , ()=>{
    username.classList.remove('username_one');
})

password.addEventListener('click' , ()=>{
    password.classList.add('password_one');
})
password.addEventListener('blur' , ()=>{
    password.classList.remove('password_one')
})