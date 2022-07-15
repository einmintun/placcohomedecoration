$(document).ready(function(){

     // Start Back to top
     $(".btn-backtotops").hide();
     $(window).scroll(function(){
          let getscrolltop = $(this).scrollTop();
          // console.log(getscrolltop);

          if(getscrolltop >= 370){
               $(".btn-backtotops").fadeIn(1000);
          }else{
               $(".btn-backtotops").fadeOut(1000);
          }
     });
     // End back to top 

     // Start Header
     // Start nav

     // for bugger
     $(".navbuttons").click(function(){
          $(".navbuttons").toggleClass("crossxs");
     });

     // for nav
     $(window).scroll(function(){
          let getscrolltop = $(this).scrollTop();
          // console.log(getscrolltop);

          if(getscrolltop >= 200){
               $(".navbar").addClass("navmenus");
          }else{
               $(".navbar").removeClass("navmenus");
          }
     });
     // End nav
     // End Header

     // Start properties
     $(".propertylists").click(function(){

          // for active items
          // $(this).addClass("activeitems");
          // $(this).siblings().removeClass("activeitems");

          $(this).addClass("activeitems").siblings().removeClass("activeitems");

          // for filters

          let getattvalue = $(this).attr("data-filter");
          // console.log(getattvalue);
          if(getattvalue === "all"){
               $(".filters").show("slide",500);
          }else{
               $(".filters").hide();

               $(".filters").not("."+getattvalue).hide("slide",500);

               $(".filters").filter("."+getattvalue).show("slide",500);
          }
     });

     // For image overlay (or) lightbox2
     lightbox.option({
          showImageNumberLabel:false
     });
     // End properties


     // Start Adv Section
     $(window).scroll(function(){
          let getscrolltop = $(this).scrollTop();
          // console.log(getscrolltop);

          if(getscrolltop >= 900){
               $(".advimages").addClass("fromleftani");
               $(".advtexts").addClass("fromrightani");
          }else{
                $(".advimages").removeClass("fromleftani");
               $(".advtexts").removeClass("fromrightani");
          }
     });
     // End Adv Section


     // Start footer section
     const getyear = $("#getyear");
     const getfullyear = new Date().getUTCFullYear();
     getyear.text(getfullyear);
     // End footer section
});