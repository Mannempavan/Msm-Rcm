document.addEventListener("DOMContentLoaded", function () {

    /* SERVICES SLIDER */

    const serviceSlider = document.getElementById("serviceSlider");

    if (serviceSlider) {

        let currentIndex = 0;
        const itemsPerPage = 3;
        const items = document.querySelectorAll(".service-item");
        const totalItems = items.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const dotsContainer = document.getElementById("sliderDots");

        if (dotsContainer) {
            dotsContainer.innerHTML = "";

            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement("span");
                dot.addEventListener("click", () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        function moveSlide(direction) {
            currentIndex += direction;

            if (currentIndex < 0) currentIndex = 0;
            if (currentIndex >= totalPages) currentIndex = totalPages - 1;

            updateSlider();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function updateSlider() {

            let startIndex = currentIndex * itemsPerPage;

            if (startIndex + itemsPerPage > totalItems) {
                startIndex = totalItems - itemsPerPage;
            }

            const movePercent = (startIndex / itemsPerPage) * 100;
            serviceSlider.style.transform = `translateX(-${movePercent}%)`;

            if (dotsContainer) {
                dotsContainer.querySelectorAll("span")
                    .forEach((dot, i) => {
                        dot.classList.toggle("active", i === currentIndex);
                    });
            }
        }

        // expose to HTML buttons
        window.moveSlide = moveSlide;

        updateSlider();
    }

    /* CLIENT LOGO SLIDER */

    const logoTrack = document.getElementById("logoTrack");

    if (logoTrack) {

        let currentIndexs = 0;
        const itemsPerPages = 5;
        const logos = document.querySelectorAll(".logo-item");
        const totalItems = logos.length;
        const totalPages = Math.ceil(totalItems / itemsPerPages);
        const dotsContainers = document.getElementById("sliderDotss");

        if (dotsContainers) {
            dotsContainers.innerHTML = "";

            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement("span");
                dot.addEventListener("click", () => goToSlides(i));
                dotsContainers.appendChild(dot);
            }
        }

        function moveSlides(direction) {
            currentIndexs += direction;

            if (currentIndexs < 0) currentIndexs = 0;
            if (currentIndexs >= totalPages) currentIndexs = totalPages - 1;

            updateSliders();
        }

        function goToSlides(index) {
            currentIndexs = index;
            updateSliders();
        }

        function updateSliders() {

            let startIndex = currentIndexs * itemsPerPages;

            if (startIndex + itemsPerPages > totalItems) {
                startIndex = totalItems - itemsPerPages;
            }

            const movePercent = (startIndex / itemsPerPages) * 100;
            logoTrack.style.transform = `translateX(-${movePercent}%)`;

            if (dotsContainers) {
                dotsContainers.querySelectorAll("span")
                    .forEach((dot, i) => {
                        dot.classList.toggle("active", i === currentIndexs);
                    });
            }
        }

        // expose to HTML buttons
        window.moveSlides = moveSlides;

        updateSliders();
    }

    /* LOADER PROGRESS BAR */

    const loader = document.getElementById("loader");

    if (loader) {
        let width = 0;
        const loadInterval = setInterval(() => {
            width += 10;
            loader.style.width = width + "%";
            if (width >= 100) clearInterval(loadInterval);
        }, 100);
    }

    /* NAVBAR SHADOW ON SCROLL */

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("shadow", window.scrollY > 50);
        });
    }

    /* SMOOTH SCROLL */

    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {

            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* CLOSE MOBILE MENU AFTER CLICK */

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('.navbar-collapse');
            if (menu && menu.classList.contains('show')) {
                new bootstrap.Collapse(menu).toggle();
            }
        });
    });

    /* AOS ANIMATION INIT */

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

});