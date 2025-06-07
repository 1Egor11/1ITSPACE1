document.addEventListener("DOMContentLoaded", () => {
    // Инициализация темы из куки
    // Инициализация темы из куки
    const savedTheme = getCookie('theme') || 'dark'; // По умолчанию dark
    document.body.classList.add(savedTheme + '-theme');

    // Горизонтальный скролл для карточек планет
    const container = document.querySelector(".planet-card-container");
    if (container) {
        container.addEventListener("wheel", (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    // Бургер-меню
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

    // Закрытие по ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.key === "Esc") {
            if (sideMenu.classList.contains("active")) {
                sideMenu.classList.remove("active");
                burgerMenu.classList.remove("active");
            }
            const moonMenu = document.querySelector('.moon-menu.active');
            if (moonMenu) {
                moonMenu.classList.remove('active');
            }
        }
    });

    // Обработчик для поиска
    const searchIcon = document.querySelector(".icon-img[alt='Поиск']");
    if (searchIcon && vueApp) {
        searchIcon.addEventListener("click", () => {
            if (sideMenu.classList.contains("active")) {
                sideMenu.classList.remove("active");
                burgerMenu.classList.remove("active");
            }
        });
    }

    // Переключение темы
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Обработчик для кнопки "Спутники"
    document.querySelectorAll('.moon-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const moonMenu = this.closest('.moon-btn-container').querySelector('.moon-menu');
          document.querySelectorAll('.moon-menu').forEach(menu => {
            if (menu !== moonMenu) menu.classList.remove('active');
          });
          moonMenu.classList.toggle('active');
        });
      });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.moon-btn') && !e.target.closest('.moon-menu')) {
            document.querySelectorAll('.moon-menu').forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });
    // Функции для работы с темой
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');
        setCookie('theme', body.classList.contains('light-theme') ? 'light' : 'dark', 365);
    }

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }
});