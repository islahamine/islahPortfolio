$(window).on("load", function () {
    'use strict';
 /*   setInterval(function () {
        $(".loading").fadeOut("slow",
                    function () {
                $(this).remove();
                $(window).scrollTop(0);
            }, 400);
    });*/

        setInterval(function(){
               $("body").css("overflow-y","scroll");
               $(".all").fadeOut("slow",function () {
                $(this).remove();
                $(window).scrollTop(0);
               });},2000);
               
});
