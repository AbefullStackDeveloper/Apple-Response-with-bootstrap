$(document).ready(function () {
    $(window).on("resize", function () {
        if ($(window).width() < 768) {
            $(".footer_links_wrapper").addClass("saturdayclass");

        } else {
            $(".footer_links_wrapper").removeClass("saturdayclass");
            $(".footer_links_wrapper ul").show();
        }
    });
    $(document).on("click", ".saturdayclass h3", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("iconRotator");


    })
})
