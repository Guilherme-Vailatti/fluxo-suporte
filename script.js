"use strict";
$(function() {
    $(".link-global").hover(function(e) {
        e.preventDefault(),
        $(this).parent().addClass("hover")
    }).mouseleave(function() {
        $(".content-icon").removeClass("hover")
    }),
    $(".link-global, .link-open-icons").click(function(e) {
        e.preventDefault(),
        $(".modal-align").addClass("open"),
        $(".bkg-fixed-opacity").addClass("open"),
        $("." + $(this).parent().prop("id")).addClass("open")
    }),
    $(".close-button").click(function(e) {
        e.preventDefault(),
        $(".modal-align").removeClass("open"),
        $(".bkg-fixed-opacity").removeClass("open"),
        $(this).siblings(".open").removeClass("open")
    })
});
