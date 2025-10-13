
  const contactBtn = document.querySelector(".contact-btn");
  const contactForm = document.getElementById("contactForm");

function asd()  {
  contactForm.style.display = contactForm.style.display === "block" ? "none" : "block";
};

function asd() {
   if (contactForm.style.display === "block") {
    
    
   }
}


function asd() {
  contactForm.style.display = contactForm.style.display === "block" ? "none" : "block";
}



// Üres függvények további fejlesztésekhez
function validateForm() {
  if (document.getElementById("name").value === "") {
    alert("Valamit kihagytál!");
    return false;
  }

  if (document.getElementById("email").value === "") {
    alert("Valamit kihagytál!");
    return false;
  }

  if (document.getElementById("message").value === "") {
    alert("Valamit kihagytál!");
    return false;
  }

  return true;
}

function sendMessage() {
  
  // üzenet küldés - erre egyébként FormSubmit-ot is használhatsz az egyszerűbb mint a JS
}
