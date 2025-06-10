document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".planet-card-container");

    if (container) {
        container.addEventListener("wheel", (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    const burgerMenu = document.getElementById('burgerMenu');
    const sideMenu = document.getElementById('sideMenu');
    const vueApp = document.querySelector("#app")?.__vue__; 


    burgerMenu.addEventListener('click', () => {
        const isOpen = sideMenu.classList.toggle('active');
        burgerMenu.classList.toggle('active');


        if (isOpen && vueApp?.searchVisible) {
            vueApp.searchVisible = false;
        }
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.key === "Esc") {
            if (sideMenu.classList.contains("active")) {
                sideMenu.classList.remove("active");
                burgerMenu.classList.remove("active");
            }
        }
    });


    const searchIcon = document.querySelector(".icon-img[alt='Поиск']");
    if (searchIcon && vueApp) {
        searchIcon.addEventListener("click", () => {
            if (sideMenu.classList.contains("active")) {
                sideMenu.classList.remove("active");
                burgerMenu.classList.remove("active");
            }
        });
    }
});