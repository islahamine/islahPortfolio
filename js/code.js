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
                let paths = document.querySelectorAll("#name path");
               let x = 0.08;
               for(let i=0;i<paths.length;i++){
                  paths[i].style.animation =`islah 2s ease forwards ${i*x}`+"s";
               }
               });},2000);
               
               
});
