const lables = document.querySelectorAll('.form-control label')
lables.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,index) => `<span style = "transition-delay: ${index * 80}ms">${letter}</span>`)
    .join('')
})


function validateForm(){  
const email = document.getElementById('email');
const password = document.getElementById('password');
let emailVal = email.value;
let atposition = emailVal.indexOf("@");
let dotposition = emailVal.lastIndexOf(".");
if(atposition < 1 || dotposition < atposition +2 || dotposition + 2 >= emailVal.length){
    document.getElementById("email-war").innerText = "Please Enter a valid Email";
    return false;
}

 if(password.value.length < 6){
    document.getElementById("password-war").innerText = "Password must be atleast 6 characters in length"
    return false;
}


}