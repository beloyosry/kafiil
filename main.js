// main.js

$(function () {
    // Load navbar, userProfile, and main components
    $("#navbar").load("components/navbar/navbar.html", function () {
        // Execute navbar.js logic here after loading
        import("./components/navbar/navbar.js");
    });

    $("#userProfile").load(
        "components/userProfile/userProfile.html",
        function () {
            // Execute userProfile.js logic here after loading
            import("./components/userProfile/userProfile.js");
        }
    );

    $("#main").load("components/main/main.html", function () {
        // Execute main.js logic here after loading
        import("./components/main/main.js");
        import("./components/main/feed/feed.js");
        import("./components/main/sideDetails/sideDetails.js");
        import("./components/main/suggested/suggested.js");
    });
});
