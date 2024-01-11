// components/userProfile/userProfile.js

$(document).ready(function () {
    $("#toggle").click(function () {
        $("#toggle").toggleClass("dark-mode");
        $("body").toggleClass("dark-mode");
    });
});
