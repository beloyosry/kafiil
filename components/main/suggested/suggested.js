// components/main/suggested/suggested.js

$(() => {
    const cardContainer = $(".suggested__services .service__items");
    const numberOfCards = 4;

    for (let i = 0; i < numberOfCards; i++) {
        // Create a new card element for each iteration
        const card = $("<div>").addClass("card card__vertical");
        // Load the HTML content for the card
        card.load("components/card/card.html", function () {
            // Initialize like logic for each card
            $(this)
                .find(".card__like")
                .on("click", function () {
                    $(this).toggleClass("liked");
                });

            // Add the "vertical" class to the card body
            $(this).find(".card__body").addClass("vertical");

            // Check if it's the third card (index 2 in zero-based index)
            if (i === 2) {
                $(this).find(".card__like").addClass("liked");
            }
            // Append the fully initialized card to the container
            cardContainer.append(card);
        });
    }
});
