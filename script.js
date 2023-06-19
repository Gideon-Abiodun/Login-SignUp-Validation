// Login validation

const userNameLoginError = document.getElementById("username-error");
const passwordLoginError = document.getElementById("password-error");
const submitLoginError = document.getElementById("submit-error-login");
const resetLogin = document.getElementById("reset-login");
// calling the sign in fuctions.

// Username function.

function validateUserName() {
  event.preventDefault();
  const userName = document.getElementById("contact-username").value;

  if (userName.length == 0) {
    userNameLoginError.innerHTML = "**Enter your username";
    return false;
  }
  if (userName.length <= 4 || userName.length > 10) {
    userNameLoginError.innerHTML =
      "**Username must be between 4 and 10 character";
    return false;
  }
  if (!userName.match(/^[a-zA-Z0-9]+$/)) {
    userNameLoginError.innerHTML =
      "**Invalid username (special character not allowed!)";
    return false;
  }
  console.log(userName);

  userNameLoginError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

// Password function.

function validatePassword() {
  // event.preventDefault();
  const password = document.getElementById("contact-password").value;

  if (password.length == "") {
    passwordLoginError.innerHTML = "**Enter your password";
    return false;
  }
  if (password.length <= 6) {
    passwordLoginError.innerHTML = "**length must be atleast 8 characters";
    return false;
  }
  if (password.length > 12) {
    passwordLoginError.innerHTML = "**length cannot be morethan 12 characters";
    return false;
  }
  // console.log(password);

  passwordLoginError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
password = "";

// submit Login

function validateLogin() {
  // event.preventDefault();
  if (!validateUserName() || !validatePassword()) {
    submitLoginError.style.display = "block";
    submitLoginError.innerHTML = "**Please fix error";
    setTimeout(function () {
      submitLoginError.style.display = "none";
    }, 3000);
    return true;
  } else {
    // Modal validation\
    const modalPop = document.getElementById('modal-overlay');
    modalPop.style.display = 'block';
    popup.classList.add("open-popup");
    setTimeout (function () {
      // modalPop.style.display = 'none';
      window.location.href = "https://github.com/Gideon-Abiodun";
    }, 3000);
    return; 
    // alert("Successfully Logged in!");
  }
}
resetLogin.reset();
// console.log(submitLoginError);




// Sign Up validation

const userNameSignUpError = document.getElementById("signup-username_error");
const emailError = document.getElementById("email-error");
const passwordSignUpError = document.getElementById("signup-password_error");
const submitSignUpError = document.getElementById("signup-submit_error");

// validate name.

function signUpUser() {
  event.preventDefault();
  const signUpUserName = document.getElementById(
    "contact-usernaname-one"
  ).value;

  if (signUpUserName.length === 0) {
    userNameSignUpError.innerHTML = "**Enter your Username";
    return false;
  }
  if (signUpUserName.length <= 5) {
    userNameSignUpError.innerHTML = "**Must be atleast 5 characters";
    return false;
  }
  if (signUpUserName.length > 12) {
    userNameSignUpError.innerHTML = "**Cannot be morethan 12 characters";
    return false;
  }
  if (!signUpUserName.match(/^[a-zA-Z0-9]+$/)) {
    userNameSignUpError.innerHTML = "**Fill the correct username";
    return false;
  }
  userNameSignUpError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

// validate Email Address.

function validateEmail() {
  const email = document.getElementById("contact-email").value;

  if (email.length === 0) {
    emailError.innerHTML = "**Enter your Email";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "**Invalid Email";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

// validate Password

function signUpPassword() {
  const signUppassword = document.getElementById("contact-password-one").value;

  if (signUppassword.length == "") {
    passwordSignUpError.innerHTML = "**Enter your password!";
    return false;
  }
  if (signUppassword.length <= 6) {
    passwordSignUpError.innerHTML = "**Must be atleast 8 characters";
    return false;
  }
  if (signUppassword.length > 12) {
    passwordSignUpError.innerHTML = "**Cannot be morethan 12 characters";
    return false;
  }
  // console.log(password);

  passwordSignUpError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}


// test success message






// submit signup

function validateSignUp() {
  if (!signUpUser() || !validateEmail() || !signUpPassword()) {
    // alert('Please fix error');
    submitSignUpError.style.display = "block";
    submitSignUpError.innerHTML = " **Please fix error";
    setTimeout(function () {
      submitSignUpError.style.display = "none";
    }, 3000);
    return false;
  } else {
    // modal 2
    const modalPop = document.getElementById('modal-overlay');
    modalPop.style.display = 'block';
    popup.classList.add("open-popup");
    setTimeout (function () {
    window.location.href = "https://github.com/Gideon-Abiodun";
    }, 5000);
    return; 
    // alert("Successfully Sign Up!");
    // window.location.href = "https://www.google.com";
  }
}
resetLogin.reset();


// Animation (transition from login to signup)

const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Hide/Show password 

const eyeIcon = document.getElementById('eyes-closed');
const passText = document.getElementById('contact-password');

eyeIcon.onclick = function(){
  if(passText.type === "password") {
    passText.type = "text";
    eyeIcon.style.color = "grey";
    eyeIcon.style.textDecoration = "none";
  }else {
    passText.type = "password";
    eyeIcon.style.color = "#333";
    eyeIcon.style.textDecoration = "line-through";
    // eyeIcon.src = "./img/eye-close.png";
    // eyeIcon = '<i class="fas fa-eye-slash"></i>';
  }
}

// For Sign Up
const eyeIconSignUp = document.getElementById('eyes-closed-signup');
const passSignUp = document.getElementById('contact-password-one');

eyeIconSignUp.onclick = function(){
  if(passSignUp.type === "password") {
    passSignUp.type = "text";
    eyeIconSignUp.style.color = "grey";
    eyeIconSignUp.style.textDecoration = "none";
  }else {
    passSignUp.type = "password";
    eyeIconSignUp.style.color = "#333";
    eyeIconSignUp.style.textDecoration = "line-through";
    // eyeIcon.src = "./img/eye-close.png";
    // eyeIcon = '<i class="fas fa-eye-slash"></i>';
  }
}













/* validation of the form.

// Sign up form validation.

function validation() {
    var username = document.getElementById('Username').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;

    if (username == "") {
        document.getElementById("Username").innerHTML = " ** Please fill the username field!";
        return false;
    }
    if (username.length <= 5 || username.length > 18) {
        document.getElementById("Username").innerHTML = " ** Username lenght must be between 5 and 18!";
        return false;
    }
    if (!isNaN(username)) {
        document.getElementById("Username").innerHTML = " ** Only character are allowed!";
        return false;
    }

    // Email validation
    if (email == "") {
        document.getElementById("Email").innerHTML = " ** Please fill the Email field!";
        return false;
    }
    if (email.indexOf("@") <= 0) {
        document.getElementById("Email").innerHTML = " ** Invalid Email!";
        return false;
    }
    if (email.charAt(email.length - 4) != "." &&
        email.charAt(email.length - 3) != "." ) {
            document.getElementById("Email").innerHTML = " ** Invalid Email!";
            return false;
        }

    // Password validation
    if (password == "") {
        document.getElementById("Password").innerHTML = " ** Please fill the Password field!";
        return false;
    }
    if (password.length <= 5 || password.length > 18) {
        document.getElementById("Password").innerHTML = " ** Password lenght must be between 5 and 18!";
        return false;
    }
}

    /* Login validation.
    function validation(){
        var username = document.getElementById("Username").value;
        var password = document.getElementById("Password").value;

        if(username == "") {
            document.getElementById("Username").innerHTML = " ** Please fill in your username.";
            return false;
        }
        if (username.length <= 5 || username.length > 18) {
            document.getElementById("Username").innerHTML = " ** Username lenght must be between 5 and 18!";
            return false;
        }
        if (!isNaN(username)) {
            document.getElementById("Username").innerHTML = " ** Only character are allowed!";
            return false;
        }

        // Password validation

        if (password == "") {
            document.getElementById("Password").innerHTML = " ** Please fill the Password field!";
            return false;
        }
        if (password.length <= 5 || password.length > 18) {
            document.getElementById("Password").innerHTML = " ** Password lenght must be between 5 and 18!";
            return false;
        }
    }*/
