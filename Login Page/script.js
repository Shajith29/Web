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
if(email.value == "" || email.value == null){
    alert("Email cannot be null");
    return false;
}

else if(password.value.length < 6){
    document.getElementById("password-war").innerText = "Password must be atleast 6 characters in length"
    return false;
}


}