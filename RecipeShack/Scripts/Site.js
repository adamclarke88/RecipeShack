

$(".nav li").on('click', function () {
    console.log("clicked on nav link");
});

$("#testButton").on('click', function () {
    console.log("clicked on nav link");
});

// this styles the navbar links when the user is on the clicked page.  e.g. if on contact page, 'Contact' will be highlighted.
function active_menu() {
    var url = window.location.href;
    $('.nav a').filter(function () {
        return this.href == url;
    }).addClass('navbar-link-style');
}

active_menu();  // calling the function above