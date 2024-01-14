// components\main\sideDetails\side-details.js

const infoItems = [
    {
        name: "Price",
        icon: "fa-solid fa-dollar-sign",
        value: "$10",
    },
    {
        name: "Delivery Duration",
        icon: "fa-solid fa-clock",
        value: "1 day",
    },
    {
        name: "In Progress Orders",
        icon: "fa-solid fa-basket-shopping",
        value: "2",
    },
    {
        name: "Customers",
        icon: "fa-solid fa-user-group",
        value: "2",
    },
    {
        name: "Sales",
        icon: "fa-solid fa-percent",
        value: "$25",
    },
    {
        name: "Category",
        icon: "fa-solid fa-list",
        value: "Design",
    },
    {
        name: "Subcategory",
        icon: "fa-solid fa-list",
        value: "Logo Design",
    },
];

$(() => {
    // Info Items

    const infoItemsContainer = $(".side-details__info .info__items");

    // Use the global infoItems array defined at the top
    infoItems.forEach((item) => {
        const infoItem = $("<div>").addClass("info__item");
        const leftColumn = $("<div>").addClass("left-column");
        const rightColumn = $("<div>").addClass("right-column");
        const icon = $("<i>").addClass(item.icon);
        const name = $("<p>").text(item.name);
        const value = $("<p>").text(item.value);

        rightColumn.append(value);
        leftColumn.append(icon);
        leftColumn.append(name);
        infoItem.append(leftColumn);
        infoItem.append(rightColumn);
        infoItemsContainer.append(infoItem);
    });

    // Card Items
    const cardContainer = $(".other-services__items");
    const numberOfCards = 3;

    for (let i = 0; i < numberOfCards; i++) {
        // Create a new card element for each iteration
        const card = $("<div>").addClass("card card__horizontal");
        // Load the HTML content for the card
        card.load("components/card/card.html", function () {
            // Initialize like logic for each card
            $(this)
                .find(".card__like")
                .on("click", function () {
                    $(this).toggleClass("liked");
                });

            // Add the "vertical" class to the card body
            $(this).find(".card__body").addClass("horizontal");

            // Check if it's the third card (index 2 in zero-based index)
            if (i === 2) {
                $(this).find(".card__like").addClass("liked");
            }
            // Append the fully initialized card to the container
            cardContainer.append(card);
        });
    }
});
