

    let sections = document.querySelectorAll(".section");
    let windowHeight = window.innerHeight;
    let navigation = document.querySelector(".navigation");
    let aboutContainer = document.getElementById("about-container");

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
