import NorthLineBank from "./bank.js";

const bnk = new NorthLineBank();
console.log(bnk.customers);

// bnk.login("234567100","110099");

const loginForm     = document.querySelector(".login-form");
const accountNumber = document.querySelector("#account-number");
const password      = document.querySelector("#password");

// check when the formis submitted
loginForm.addEventListener('submit',function(evt){
        evt.preventDefault();   // prevents the browser default behaviour when submitting a form 
        let accNo = accountNumber.value.trim();
        let paswd = password.value.trim();
        if( accNo && paswd) {
            bnk.login(accNo, paswd); //login the user
        }else{
            alert(" Please enter your correct information")
        }

})







