// * Wow library call //
new WOW().init();

// * back to top button //

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//* Email Contact section //

const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#sendEmail");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute(
        "href",
        `mailto:eliosotolopez@gmail.com?subject=name: ${form.get("name")}  email: ${form.get("email")}&body=${form.get("message")}`
    );
    $buttonMailto.click();
}
