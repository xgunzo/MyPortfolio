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
        aboutContainer.style.display = "";
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

    //scroll-bar

    let scroll1 = document.getElementById("scroll1");
    let scroll2 = document.getElementById("scroll2");
    let scroll3 = document.getElementById("scroll3");
    let s1 = document.getElementById("s1");
    let s2 = document.getElementById("s2");
    let s3 = document.getElementById("s3");
    let aboutContainer = document.getElementById("about-container");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    aboutContainer.addEventListener("scroll", function() {
        if(isInViewport(s1) === true) {
            scroll1.style.backgroundColor= "scale(1.3)";
        } else if ( isInViewport(s2) === true) {
            scroll2.style.transform = "scale(1.3)";
        } else if ( isInViewport(s3) === true) {
            scroll3.style.transform = "scale(1.3)";
        }
    })

   

}