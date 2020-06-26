$(document).ready(function () {
    errorMsg = document.querySelector(".error div article .message").innerHTML;
    alert("errorMsg.innerHTML before for: " + errorMsg.innerHTML);

    for (let i = 0; i < errorMsg.length; i++) {
        let charKey = document.createElement("div");
        alert("character: " + errorMsg.charAt(i));
        charKey.innerHTML = errorMsg.charAt(i);
        charKey.classList.add("key");

        let container = document.querySelector(".error-container");
        container.appendChild(charKey);
        alert("charKey after: " + charKey.innerHTML);
    }
});