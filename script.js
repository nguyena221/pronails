if (window.location.pathname.endsWith('index.html')) {

    // Array of image URLs for the background
    const images = [
        'images/side_view_shop.jpg',
        'images/soaps.jpg',
        'images/nails/bear_xmas_nails.jpg',
        'images/nails/uv_light.jpg',
        'images/nails/blue_french.jpg',
        'images/nails/gingerbread_nails.jpg',
        'images/nails/green_flake_nails.jpg',
        'images/nails/pink_nails.jpg',
        'images/nails/grad_christmas.jpeg',
        'images/nails/neongreen_xmas.jpg',
        'images/nails/peppermint_nails.jpg',
        'images/nails/pink_xmas_nails.jpg',
        'images/nails/red_chrome_nails.jpg',
        'images/nails/red_xmas_nails.jpg'
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