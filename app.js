  // Scroll function for the Navbar
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 750) {
      document.getElementById("navbar").style.top = "0px";
      
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
  }

  //Enable SideNav 
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

