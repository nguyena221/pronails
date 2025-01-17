document.addEventListener("DOMContentLoaded", () => {
    // Load footer
    fetch('../html/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer');
            }
            return response.text();
        })
        .then(footerHTML => {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });

    // Load header
    const headerPlaceholder = document.getElementById("header-placeholder");
    fetch("../html/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header HTML");
            }
            return response.text();
        })
        .then(data => {
            headerPlaceholder.innerHTML = data;

            // Update main page title dynamically
            const pageTitles = {
                "index.html": "Pro Nails",
                "about.html": "About",
                "menu.html": "Menu",
                "contacts.html": "Contacts",
                // Add more pages as needed
            };

            const path = window.location.pathname;
            const fileName = path.substring(path.lastIndexOf("/") + 1) || "index.html";
            const mainpgTitle = document.querySelector(".mainpg_title");
            if (mainpgTitle && pageTitles[fileName]) {
                mainpgTitle.textContent = pageTitles[fileName];
            }
        })
        .catch(error => {
            console.error("Error loading header:", error);
        });

    // Background slideshow
    const images = [
        '../images/header-background/index-slideshow/side_view_shop.jpg',
        '../images/header-background/index-slideshow/soaps.jpg',
        '../images/header-background/index-slideshow/bear_xmas_nails.jpg',
        '../images/header-background/index-slideshow/uv_light.jpg',
        '../images/header-background/index-slideshow/christmas_nail(2).jpg',
        '../images/header-background/index-slideshow/blue_french.jpg',
        '../images/header-background/index-slideshow/gingerbread_nails.jpg',
        '../images/header-background/index-slideshow/green_flake_nails.jpg',
        '../images/header-background/index-slideshow/pink_nails.jpg',
        '../images/header-background/index-slideshow/grad_christmas.jpeg',
        '../images/header-background/index-slideshow/neongreen_xmas.jpg',
        '../images/header-background/index-slideshow/peppermint_nails.jpg',
        '../images/header-background/index-slideshow/pink_xmas_nails.jpg',
        '../images/header-background/index-slideshow/red_chrome_nails.jpg',
        '../images/header-background/index-slideshow/red_xmas_nails.jpg'
    ];

    let currentIndex = 0;

    function changeBackground() {
        const frontDiv = document.querySelector('.front');
        if (frontDiv) {
            frontDiv.style.backgroundImage = `url(${images[currentIndex]})`;
        }
    }

    function startSlideshow() {
        changeBackground();
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            changeBackground();
        }, 5000);
    }

    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        startSlideshow();
    }
});