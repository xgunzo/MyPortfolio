



    /*let sections = document.querySelectorAll(".section");
    let windowHeight = window.innerHeight;
    let navigation = document.querySelector(".navigation");
    let aboutContainer = document.getElementById("about-container");
    let sectionsDesktop = document.querySelectorAll(".section-desktop");
    let navigationDesktop = document.querySelector(".navigation-desktop");
    let windowHeightDesktop = window.innerHeight;

    
window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 1399px)").matches) {
    function reset() {
        for (let i = 0; i < navigation.children.length; i++) {
            navigation.children[i].classList.remove("selected");
        }
    }

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;

        sections.forEach(function(section, i) {

            if (section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
                reset();
                navigation.children[i].classList.add("selected");
            }

        })

    })

    document.querySelectorAll(".navigation li").forEach(function(item, i) {
        item.addEventListener("click", function() {
            window.scrollTo({
                top: i * windowHeight,
                behavior: "smooth"
            })
        })
    })
    } else if (window.matchMedia("(min-width: 1400px)").matches) {
        function reset() {
            for (let i = 0; i < navigationDesktop.children.length; i++) {
                navigationDesktop.children[i].classList.remove("selected");
            }
        }
    
        window.addEventListener("scroll", function() {
            let scrollTop = window.scrollY;
    
            sectionsDesktop.forEach(function(section, i) {
    
                if (section.offsetTop < scrollTop + windowHeightDesktop / 2 && scrollTop < section.offsetTop +  windowHeightDesktop / 2) {
                    reset();
                    navigationDesktop.children[i].classList.add("selected");
                }
    
            })
    
        })
    
        document.querySelectorAll(".navigation-desktop li").forEach(function(item, i) {
            item.addEventListener("click", function() {
                window.scrollTo({
                    top: i *  windowHeightDesktop,
                    behavior: "smooth"
                })
            })
        })
       
    }
    
})
*/
