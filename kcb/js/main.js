$(document).ready((function() {
    $(".menu_toggle").click((function() {
        $("body").toggleClass("nav-open")
    }));
    $(".menu_overlay, .book_cta").click((function() {
        $("body").removeClass("nav-open")
    }));
}));

