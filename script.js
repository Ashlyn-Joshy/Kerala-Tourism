var email=document.getElementById("exampleInputEmail1");
var pwd=document.getElementById("exampleInputPassword1");

function validation(){
    var regexp=/^([A-Za-z0-9/.-]+)@([A-Za-z0-9/-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        return true;
    }
    else{
        alert("enter email in proper format")
        return false;
    }

}
function passw(){
    var passw= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (passw.test(pwd.value)){
        return true;
    }
    else{
        alert("password between 8 to 15 characters, which should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
        return false;
    }
}