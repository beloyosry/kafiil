// components/navbar/navbar.js

const links = [
    {
        name: "Auctions",
        url: "/",
        icon: "fa-solid fa-cart-shopping",
    },
    {
        name: "Contests",
        url: "/contests.html",
        icon: "fa-solid fa-trophy",
    },
    {
        name: "Project",
        url: "/project.html",
        icon: "fa-solid fa-briefcase",
    },
    {
        name: "Portfolios",
        url: "/portfolios.html",
        icon: "fa-solid fa-image",
    },
    {
        name: "Freelancers",
        url: "/freelancers.html",
        icon: "fa-solid fa-people-group",
    },
    {
        name: "Forum",
        url: "/forum.html",
        icon: "fa-solid fa-comments",
    },
];

$(function () {
    const navbar = $("#navbar");
    const userProfile = $("#userProfile");
    const profile = $("#profile");
    const menu = $("#menu");
    const sidebar = $(".sidebar");
    const close = $(".close");

    // Add links
    const ul = navbar.find(".links");
    links.forEach((link) => {
        const li = $("<li>");
        const i = $("<i>").addClass(link.icon);
        const a = $("<a>").attr("href", link.url).text(link.name);
        li.append(i);
        li.append(a);
        ul.append(li);

        if (window.location.pathname === link.url) {
            a.addClass("active");
            i.addClass("active");
        }
    });

    // Toggle userProfile on profile click
    profile.on("click", function () {
        userProfile.slideDown();
        userProfile.toggleClass("opened");
    });

    // Toggle sidebar
    menu.on("click", function () {
        sidebar.toggleClass("active");
    });
});
