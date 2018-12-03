$('.toggle').click(function () {
    $('.forms').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow")
});

function ValidateForm() {
    var username = document.getElementById("username");
    var phoneNum = document.getElementById("phoneNum");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    removeMessage();
    var valid = true;
    if (username.value === "") {
        username.className = "wrong-input";
        username.nextElementSibling.innerHTML = "Username can't be blank";
        valid = false;
    }
    else if (username.value.length < 3) {
        username.className = "wrong-input";
        username.nextElementSibling.innerHTML = "Username can't be less than 3 letters";
        valid = false;
    }

    if (phoneNum.value.length < 7) {
        phoneNum.className = "wrong-input";
        phoneNum.nextElementSibling.innerHTML = "Contact number cannot be less than 7";
        valid = false;
    }
    if (password.value.length < 6) {
        password.className = "wrong-input";
        password.nextElementSibling.innerHTML = "Password cannot be less than 6";
        valid = false;
    }
    if (password.value !== confirm_password.value) {
        confirm_password.className = "wrong-input";
        confirm_password.nextElementSibling.innerHTML = "Password does not match";
        valid = false;
    }

    return valid;

}
function removeMessage() {
    const errorinput = document.querySelectorAll(".wrong-input");
    [].forEach.call(errorinput, function (el) {
        el.classList.remove("wrong-input");
    });

    const errorpara = document.querySelectorAll(".error");
    [].forEach.call(errorpara, function (el) {
        el.innerHTML = "";
    });
}