// components/main/feed/feed.js
export const carousel = (autoSlide = false, interval = 3000) => {
    // Variables
    const carouselItems = $(".carousel__items .carousel__item");
    const totalItems = $(".carousel__item").length;
    const carouselDots = $(".carousel__dots .dot");
    const prevButton = $(".carousel__prev");
    const nextButton = $(".carousel__next");
    let currentIndex = 0;

    // Function to show the current slide
    const showSlide = (index) => {
        const translateValue = -index * 100 + "%";

        // Reset transform for all slides
        carouselItems.css("transform", "translateX(1000%)");

        // Apply transform for the active slide
        carouselItems
            .eq(index)
            .css("transform", "translateX(" + translateValue + ")");

        // Toggle active class
        carouselItems.removeClass("active");
        carouselItems.eq(index).addClass("active");
        carouselDots.removeClass("active");
        carouselDots.eq(index).addClass("active");

        // Toggle active class for next and previous buttons
        prevButton.toggleClass("active", index !== 0);
        nextButton.toggleClass("active", index !== totalItems - 1);
    };

    // Next Slide
    $(".carousel__next").on("click", function () {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    });

    // Previous Slide
    $(".carousel__prev").on("click", function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    });

    // Handle click on dots
    $(".carousel__dots .dot").on("click", function () {
        currentIndex = $(this).index();
        showSlide(currentIndex);
    });

    // Auto Slide (Optional)
    if (autoSlide) {
        setInterval(function () {
            currentIndex = (currentIndex + 1) % totalItems;
            showSlide(currentIndex);
        }, interval); // Change slide every 5 seconds
    }
};

$(document).ready(function () {
    carousel(true);
});
