function validatesign() {
    var email, emailerr, pass, passerr, weak, medium, strong, ph, pherr;
    email = document.getElementById("inputEmail");
    emailerr = document.getElementById("mailerr");
    pass = document.getElementById("inputPassword");
    passerr = document.getElementById("passworderr");
    ph = document.getElementById("inputph");
    pherr = document.getElementById("pherr");
    weak = document.getElementById("weak");
    strong = document.getElementById("strong");
    medium = document.getElementById("medium");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        emailerr.classList.remove("display");
        emailerr.classList.add("hide");
    } else {
        emailerr.classList.remove("hide");
        emailerr.classList.add("display");
    }
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(pass.value)) {
        passerr.classList.remove("display");
        passerr.classList.add("hide");
        if(pass.value.length < 10) {
            console.log('haiiii')
            weak.classList.add('display');
            weak.classList.remove("hide");
            medium.classList.remove("display");
            strong.classList.remove("display");
        } else if (pass.value.length < 12) {
            medium.classList.add('display');
            medium.classList.remove("hide");
            strong.classList.remove("display");
            weak.classList.remove("display");
        } else {
            strong.classList.add('display');
            strong.classList.remove("hide");
            weak.classList.remove("display");
            medium.classList.remove("display");
        }

    } else {
        passerr.classList.remove("hide");
        passerr.classList.add("display");
    }    

    if (/^\d{10}$/.test(ph.value)) {
        pherr.classList.remove("display");
        pherr.classList.add("hide");
    } else {
        pherr.classList.remove("hide");
        pherr.classList.add("display");
    }
  }
  function validatelogin() {
    var email, emailerr, pass, passerr;
    email = document.getElementById("inputEmail");
    emailerr = document.getElementById("mailerr");
    pass = document.getElementById("inputPassword");
    passerr = document.getElementById("passworderr");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        emailerr.classList.remove("display");
        emailerr.classList.add("hide");
    } else {
        emailerr.classList.remove("hide");
        emailerr.classList.add("display");
    }  
  }
