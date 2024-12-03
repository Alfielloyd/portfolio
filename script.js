console.log('script is working')

document.querySelectorAll('.video-carousel video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset to the beginning
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".video-container video");
    let expandedVideo = null;

    videos.forEach((video) => {
        video.addEventListener("mouseenter", () => {
            // Pause the currently expanded video if exists
            if (expandedVideo && expandedVideo !== video) {
                expandedVideo.pause();
                expandedVideo.classList.remove("expanded-video");
            }

            // Expand and play the hovered video
            expandedVideo = video;
            video.classList.add("expanded-video");
            video.play();
        });

        video.addEventListener("mouseleave", () => {
            // Pause the video when the mouse leaves
            video.pause();
            video.classList.remove("expanded-video");
        });
    });
});

/* document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const items = document.querySelectorAll(".carousel-item");

    let currentIndex = 0; // Tracks the current index
    const visibleItems = 1; // Number of visible items at a time
    const totalItems = items.length;
    const itemWidth = 100 / visibleItems; // Percentage width of each item
    let autoCycleTimer; // Timer for automatic cycling

    // ** Update Carousel Position **
    function updateCarousel() {
        const offset = -(currentIndex * itemWidth); // Calculate horizontal offset
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // ** Previous Button Functionality **
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - visibleItems;
        updateCarousel();
        resetAutoCycle();
    });

    // ** Next Button Functionality **
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < totalItems - visibleItems) ? currentIndex + 1 : 0;
        updateCarousel();
        resetAutoCycle();
    });

    // ** Automatic Cycling **
    function startAutoCycle() {
        autoCycleTimer = setInterval(() => {
            currentIndex = (currentIndex < totalItems - visibleItems) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 3000); // Adjust timing (milliseconds)
    }

    // ** Reset Auto Cycle on User Interaction **
    function resetAutoCycle() {
        clearInterval(autoCycleTimer);
        startAutoCycle();
    }

    // ** Initialize Carousel **
    function initCarousel() {
        // Set carousel width based on the number of items
        carousel.style.width = `${100 * (totalItems / visibleItems)}%`;

        // Ensure each item is set to the correct width
        items.forEach(item => {
            item.style.flex = `0 0 ${itemWidth}%`;
        });

        // Update carousel and start automatic cycling
        updateCarousel();
        startAutoCycle();
    }

    initCarousel(); // Run initialization
});
