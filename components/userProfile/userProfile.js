// components/userProfile/userProfile.js

$(function () {
    $("#toggle").on("click", function () {
        $("#toggle").toggleClass("dark-mode");
        $("body").toggleClass("dark-mode");
    });
});
