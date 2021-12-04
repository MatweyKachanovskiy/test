$(function(){
    let header =$(".header"),
     introH=$(".intro").innerHeight(),
     scrolloffset=$(window).scrollTop();
     checkScroll(scrolloffset);
    $(window).on("scroll", function(){
        scrolloffset=$(this).scrollTop();
        checkScroll(scrolloffset);
    });
    function checkScroll(scrolloffset){
        scrolloffset=$(this).scrollTop();
        if(scrolloffset>=introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }
    /* Smooth scroll*/
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        let $this=$(this);
        blockid=$(this).data('scroll'),
        blockoffset=$(blockid).offset().top;
        $("nav a").removeClass("active");
       $this.addClass("active");
        $("html,body").animate({
            scrollTop: blockoffset
        },500);
    });


    /*menu nav toggle*/
    $(".nav_toggle").on("click",function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});