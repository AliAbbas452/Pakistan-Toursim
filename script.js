// ================= WEBSITE LOADED =================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Pakistan Tourism Website Loaded!");

});


// ================= CONTACT FORM =================

let contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been submitted successfully."
        );

        contactForm.reset();

    });

}