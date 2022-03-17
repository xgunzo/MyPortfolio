window.onload = function() {

    //menu

    let button = document.getElementById("menu-button");
    let button2 = document.getElementById("menu-button-on");
    let menu_button_display = document.getElementById("menu");
    let menu_button_on = document.getElementById("menu-button-on");
    let menu_display = document.getElementById("menu");
    let background = document.getElementById("background");

    let off = document.getElementById("off");

    button.addEventListener("click", function() {
        menu_button_display.style.display = "none";
        menu_display.style.display = "flex";
        menu_button_on.style.display = "block";
        background.style.backgroundColor = "#212327";
        off.style.display = "none";
    })

    button2.addEventListener("click", function() {
        menu_button_display.style.display = "flex";
        menu_display.style.display = "none";
        menu_button_on.style.display = "none";
        background.style.backgroundColor = "#e1dfde";

        off.style.display = "block";
        })

    //arrow

    let arrow = document.getElementById("arrowdown");
    let image = document.getElementById("image");
    let counter = 0;

    image.addEventListener("click", function() {
     
        counter++;

        if(counter % 2 == 0) {
            image.src = "images/arrow-down.png";
            arrow.href = "#top";
            console.log("ARROW DOWN");
            console.log(image);
        } else if (counter % 2 !== 0) {
            image.src = "images/arrow-up.png";
            arrow.href = "#about";
            console.log("ARROW UP");
            console.log(image);
        }

        console.log(counter);

    })

}