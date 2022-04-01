window.onload = function() {

    //menu

    let button = document.getElementById("menu-button");
    let button2 = document.getElementById("menu-button-on");
    let menu_button_display = document.getElementById("menu");
    let menu_button_on = document.getElementById("menu-button-on");
    let menu_display = document.getElementById("menu");
    let background = document.getElementById("background");
    let off = document.getElementById("off");
    let navigation = document.querySelector(".navigation");
    let navigationDesktop = document.querySelector(".navigation-desktop");
    let flexContainer = document.querySelector(".flex");

    button.addEventListener("click", function() {
        menu_button_display.style.display = "none";
        menu_display.style.display = "flex";
        menu_button_on.style.display = "block";
        background.style.backgroundColor = "#212327";
        off.style.display = "none";
        navigation.style.display = "none";
        navigationDesktop.style.display = "none";
        flexContainer.style.display = "none";
    })

    button2.addEventListener("click", function() {
        menu_button_display.style.display = "flex";
        menu_display.style.display = "none";
        menu_button_on.style.display = "none";
        background.style.backgroundColor = "#e1dfde";
        off.style.display = "block";

        if (window.innerWidth < 1024) {
        navigation.style.display = "block";
        } else {
            navigation.style.display = "none"; 
            navigationDesktop.style.display = "block";
            off.style.display = "none";
            flexContainer.style.display = "flex";
        }

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