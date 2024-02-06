let userfname = document.querySelector("#userfname")
let usersname = document.querySelector("#usersname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#btn-rg")
let logAlert =document.querySelector("#message-alert");

registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(userfname.value==="" || usersname.value==="" || email.value==="" || password.value===""){
        functionAlert();
        logAlert.innerHTML = 'Make sure to fill in all the data.';
    } else{
        localStorage.setItem("userfname" ,userfname.value);
        localStorage.setItem("usersname" ,usersname.value);
        localStorage.setItem("email" ,email.value);
        localStorage.setItem("password" ,password.value);

        setTimeout( () => {
            window.location = "login.html"
        },1000)
        
    }
})




