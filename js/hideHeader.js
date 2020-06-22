/**
 * Keeps track of the user's scrolling activity to hide or show header.
 */
window.onscroll = function() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("header").classList.add("hide");
    }
    else {
        document.querySelector("header").classList.remove("hide");
    }
};