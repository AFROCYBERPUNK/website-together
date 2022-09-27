$(window).on('load resize', function() {
    $('iframe[src*="embed.spotify.com"]').each( function() {
      $(this).css('width', $(this).parent().css('width'));
      $(this).attr('src', $(this).attr('src'));
      $(this).removeClass('loaded');
      
      $(this).on('load', function(){
        $(this).addClass('loaded');
      });
    });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});