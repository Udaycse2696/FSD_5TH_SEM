const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const div = document.getElementById("student");
const showstudents = ()=>{
   console.log(name, email, password, btn, div);
   div.innerText = `Name: ${name.value} Email: ${email.value} Password: ${password.value}`; 
   btn.addEventListener("click", showstudents);
};  