import NorthLineBank from "./bank.js";
import { createInitials, showMetricAndHistory } from "./common.js";

//  dashbard.html script
const avatar         = document.querySelector(".avatar");
const accountName    = document.querySelector(".account-name");


const bk = new NorthLineBank();

let loggedInUser = bk.getLoggedInUser();
console.log( "user logged in ", loggedInUser);

// show the duser details on the UI
accountName.innerHTML = loggedInUser.name;
avatar.innerHTML      = createInitials(loggedInUser.name);

showMetricAndHistory(loggedInUser);



// logpout User 
document.querySelector(".logout-link").addEventListener('click',function(evt){
    evt.preventDefault();
    sessionStorage.clear();
    // redirect back to the login page
    window.location.href = '../index.html';
})