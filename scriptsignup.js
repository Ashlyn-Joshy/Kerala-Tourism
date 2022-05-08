var email=document.getElementById("inputEmail4");
var pwd=document.getElementById("inputPassword4");
var pho=document.getElementById("inputphoneno");

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
function phone(){
    var phoneno = /^\d{10}$/;
    if(inputphoneno.value.match(phoneno)){
      return true;
    }
    else
    {
        alert("phone number must br 10 digits");
        return false;
    }
}