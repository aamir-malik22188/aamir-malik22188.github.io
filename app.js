$().ready(function(){
    $("a").click(function(){
        var pageId = $(this).attr("data-page");
        $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
        console.log("work?")


      });
      $('.sidenav').sidenav();
    });
   