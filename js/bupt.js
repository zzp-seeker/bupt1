/// <reference path="jquery-3.1.1.min.js" />


$(function () {
    width = window.innerWidth-5;
    height = window.innerHeight-5;

    $(".uitem").hide();
    $("body").css("height", height);
    $("#page,.img,#lunbo").css("height", height);


   $("#nvg2,#search").css("width", width - 771);
   $("#n1").css("width", (width - 771) * 0.4);
   $(".nn").css("width", (width - 771) * 0.07);
   $("#n2").css("width", (width - 771) * 0.15);
   $("#n3").css("width", (width - 771) * 0.08);

   var i = 1;
   $(".pic").eq(0).siblings().hide();
   setInterval(function () {
       if (i == 5) { i = 0; }
       $(".pic").siblings().hide().eq(i++).fadeIn(600);
   }, 5000);


   $(".litem").mouseleave(function () {
       $(this).find(".a").css("background-color", "rgba(255, 106, 106, 0.6)");
       $(this).find("a").css("color", "white");
       $("#nvg2,#search").stop(true).animate({ width: width - 771, left: 771 }, 300);
       $("#n1").stop(true).animate({ width: (width - 771)*0.4 }, 300);
       $(this).parent().stop(true).animate({ width: "400px" }, 300);
       $(this).stop(true).animate({ width: "100px" }, 300);
       $(this).find(".a").stop(true).animate({ width: "100px" }, 300);
   });
   $("#nvg").mouseleave(function () {
       $(this).find(".uitem").hide(300);
   });
   $(".litem").mouseover(function () {
       $(this).siblings().find(".uitem").hide();
   });
   $(".a").mouseover(function () {
       $(this).css("background-color", "rgba(135,206,235,0.6)");
       $(this).find("a").css("color", "red");
        $("#nvg2,#search").stop(true).animate({ width: width - 871, left: 871 }, 300);
        $("#n1").stop(true).animate({ width: (width - 771) * 0.4-100 }, 300);
        $(this).parent().parent().stop(true).animate({ width: "500px" }, 300);
        $(this).parent().stop(true).animate({ width: "200px" }, 300);
        $(this).stop(true).animate({ width: "200px" }, 300, function () {
            $(this).parent().find(".uitem").show(300);
        }); 
   });
   $(".b1,.b2").hover(function () {
       $(this).css("background-color", "rgba(128, 128, 128,0.8)");
   }, function () {
       $(this).css("background-color", "rgba(255, 0, 0,0.8)");
   });

   var j = 1;
   $(".center").hide();
   $(".center").eq(0).show();
   $(".b1,.b2").click(function () {
       $(".center").hide(800);
       $(".center").eq($(this).parent().index() * 4 + $(this).index()).show(800);
   });
   
});