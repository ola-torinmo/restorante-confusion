(function(){
    "use strict";
    $(document).ready(function(){
        //    the carousel pause function doesn't work without the "pause: false "
        $("#mycarousel").carousel( { interval: 3000, pause: false } );
        $("#carouselButton").on( "click", function () {
            if ($("#carouselButton").children("span").hasClass("fa-pause")) {
                $("#mycarousel").carousel("pause");
                $("#carouselButton").children("span").removeClass("fa-pause");
                $("#carouselButton").children("span").addClass("fa-play");

            }
            else if ($("#carouselButton").children("span").hasClass("fa-play")) {
                $("#mycarousel").carousel("cycle");
                $("#carouselButton").children("span").removeClass("fa-play");
                $("#carouselButton").children("span").addClass("fa-pause");

            }

           
           
        });
        $("#loginBtn").on("click",function(){
            $("#LoginModal").modal("show");
        });
        $("#reserveBtn").on("click",function(){
            $("#Reserve").modal("show");
        });
        
    });

})();