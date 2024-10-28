let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showNextImage() {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');
    
    // Calculate the next index
    currentIndex = (currentIndex + 1) % images.length;
    
    // Add the 'active' class to the next image
    images[currentIndex].classList.add('active');

    // Set CSS transform to slide images
    for (let i = 0; i < images.length; i++) {
        if (i === currentIndex) {
            images[i].style.transform = 'translateX(0)'; // Move to center
        } else if (i === (currentIndex - 1 + images.length) % images.length) {
            images[i].style.transform = 'translateX(-100%)'; // Move to left
        } else {
            images[i].style.transform = 'translateX(100%)'; // Move to right
        }
    }
}

// Initial setup
showNextImage(); // Show the first image
setInterval(showNextImage, 3000); // Change image every 3 seconds
