$('.toggle').click(function(){
    $('.forms').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity:'toggle'
    }, "slow")
});

function ValidateForm(){
    var username= document.getElementById("username");
    var phoneNum= document.getElementById("phoneNum");
    var password= document.getElementById("password");
    var confirm_password= document.getElementById("confirm_password");
    if(username.value==""){
    username.className="wrong-input";
    username.nextElementSibling.innerHTML="Username can't be blank";        
    }
    else if(username.value.length < 3){
    username.className="wrong-input";
    username.nextElementSibling.innerHTML="Username can't be less than 3 letters";        
    }
    if(phoneNum.value.length<10){
     phoneNum.className="wrong-input";
     phoneNum.nextElementSibling.innerHTML="Contact number cannot be less than 10";
     
    }
    if(password.value.length<3){
     password.className="wrong-input";
     password.nextElementSibling.innerHTML="Password cannot be less than 6";
     
    }
    else if(password.value!=confirm_password.value){
     confirm_password.className="wrong-input";
     confirm_password.nextElementSibling.innerHTML="Password does not match";
     
    }
    return false;
 }