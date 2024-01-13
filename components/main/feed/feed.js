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

const items = [
    {
        src: "./assets/images/carousel.png",
    },
    {
        src: "assets/images/carousel.png",
    },
    {
        src: "assets/images/carousel.png",
    },
];

const services = [
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
        price: 100,
        period: "2days",
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
        price: 100,
        period: "2days",
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
        price: 100,
        period: "2days",
    },
];

$(function () {
    const feed = $(".feed");

    // Add carousel items
    const carouselItems = feed.find(".carousel__items");
    items.forEach((item) => {
        const carouselItem = $("<div>").addClass("carousel__item");
        const img = $("<img>").attr("src", item.src);
        carouselItem.append(img);
        carouselItems.append(carouselItem);

        // Add active class to first carousel item
        if (items.indexOf(item) === 0) {
            carouselItem.addClass("active");
        }
    });

    // Add carousel dots
    const carouselDotsContainer = feed.find(".carousel__dots");
    items.forEach((_, index) => {
        const dot = $("<div>").addClass("dot");
        carouselDotsContainer.append(dot);

        // Add active class to first dot
        if (index === 0) {
            dot.addClass("active");
        }
    });
    carousel(false);

    // Add services items
    const servicesItems = feed.find(".service__items");
    services.forEach((service, index) => {
        const uniqueId = `select-item__${index + 1}`;

        const serviceItem = $("<div>").addClass("service__item");
        const wrapper = $("<div>").addClass("select-item__wrapper");
        const selectItem = $("<div>").addClass("select select-item");
        const i = $("<i>").addClass("fa-solid fa-check");
        const input = $("<input>").attr({
            type: "checkbox",
            name: uniqueId,
            id: uniqueId,
        });
        const label = $("<label>")
            .attr("for", uniqueId)
            .text(service.description);
        const details = $("<div>").addClass("details");
        const divPrice = $("<div>");
        const price = $("<span>").text(service.price);
        const divPeriod = $("<div>");
        const period = $("<span>").text(service.period);

        selectItem.append(i);
        selectItem.append(input);
        wrapper.append(selectItem);
        wrapper.append(label);
        divPrice.append(price);
        divPeriod.append(period);
        details.append(divPrice);
        details.append(divPeriod);
        serviceItem.append(wrapper);
        serviceItem.append(details);
        servicesItems.append(serviceItem);

        // Add checked class to first service item
        if (services.indexOf(service) === 0) {
            selectItem.addClass("checked");
        }
    });

    // Select All checkbox logic
    $("#select-all").on("change", function () {
        const isChecked = $(this).prop("checked");
        $(".select-item input[type='checkbox']").prop("checked", isChecked);
        $(".select").toggleClass("checked", isChecked);
    });

    // Individual service item checkbox logic
    $(".select-item input[type='checkbox']").on("change", function () {
        const totalItems = $(".select-item input[type='checkbox']").length;
        const checkedItems = $(
            ".select-item input[type='checkbox']:checked"
        ).length;

        // Update Select All checkbox based on the state of individual checkboxes
        $("#select-all").prop("checked", totalItems === checkedItems);

        // Update the 'checked' class for the parent .select
        const isChecked = $(this).prop("checked");
        $(this).closest(".select").toggleClass("checked", isChecked);
    });

    // Counter logic
    const minus = $("#minus");
    const plus = $("#plus");
    const counterValue = $("#counterValue");
    const total = $("#total");
    const price = 100;

    minus.on("click", function () {
        let value = parseInt(counterValue.text());
        if (value > 1) {
            value--;
            counterValue.text(value);
            total.text(`$${value * price}`);
        }
    });

    plus.on("click", function () {
        let value = parseInt(counterValue.text());
        value++;
        counterValue.text(value);
        total.text(`$${value * price}`);
    });

    total.text(`$${price * counterValue.text()}`);
});
