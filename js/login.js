let logemail =document.querySelector("#logemail");
let password =document.querySelector("#password");
let signin =document.querySelector("#sign-in");
let logAlert =document.querySelector("#message-alert");
// let logremember =document.querySelector("#logremember:checked").value;

let getemail = localStorage.getItem("email")
let getpassword = localStorage.getItem("password")

signin.addEventListener("click", function(){
    if(logemail.value === "" || password.value === ""){
        functionAlert();
        logAlert.innerHTML = 'Make sure to fill in all the data.';
    } else{
        if(getemail && getemail.trim() === logemail.value.trim() && getpassword === password.value){
            let x = "true"
            localStorage.setItem("xchec",x)
            setTimeout(() => {
                window.location ="index.html"
            }, 1000)
        }else{
        functionAlert();
        logAlert.innerHTML = 'Email or Password is not valid !';
        }
    }
})



