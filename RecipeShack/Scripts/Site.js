//$(".nav a").on("click", function () {
//    $(".nav").find(".active").removeClass(".active");
//    $(this).parent().addClass("active");
//});

//$(document).on('click', '.nav li', function (e) {
//    $(this).addClass('active').siblings().removeClass('.active');
//});

$(".nav li").click(function () {
    console.log("clicked on nav link");
});