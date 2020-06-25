
/**
 * Checks whether to hide the header when the user scrolls or not.
 */
window.onscroll = function() {
    hideHeader();
};

/**
 * Checks whether to hide the header when the file is ready or not.
 */
$(document).ready(hideHeader());

/**
 * Keeps track of the user's scrolling activity to hide or show header.
 */
function hideHeader() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("header").classList.add("hide");
    }
    else {
        document.querySelector("header").classList.remove("hide");
    }
}