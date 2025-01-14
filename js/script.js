if (window.location.pathname.endsWith('index.html')) {

    // Array of image URLs for the background
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

    let currentIndex = 0; // Index to track the current image

    // Function to change background image of the front div
    function changeBackground() {
        const frontDiv = document.querySelector('.front');
        frontDiv.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    // Function to handle slide change with arrows
    function changeSlide(direction) {
        currentIndex += direction;

        // Loop through images array (wrap around if out of bounds)
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        changeBackground(); // Update the background image
    }

    // Automatically change the background image every 5 seconds
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Reset to the first image if the last image is reached
        }
        changeBackground();
    }, 5000); // Change every 5 seconds

    // Initial background setup
    changeBackground();
    
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('footer.html')
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
});
