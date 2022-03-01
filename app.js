window.onload = function() {

    let button = document.getElementById("menu-button");
    let button2 = document.getElementById("menu-button-on")
    let menu_button_display = document.getElementById("menu");
    let menu_button_on = document.getElementById("menu-button-on");
    let menu_display = document.getElementById("menu");
    let background = document.getElementById("background");

    button.addEventListener("click", function() {
        menu_button_display.style.display = "none";
        menu_display.style.display = "flex";
        menu_button_on.style.display = "block";
        background.style.backgroundColor = "#121212";
    })

    button2.addEventListener("click", function() {
        menu_button_display.style.display = "flex";
        menu_display.style.display = "none";
        menu_button_on.style.display = "none";
        background.style.backgroundColor = "#e1dfde";
    })


}