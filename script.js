$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer", "Designer", "Freelancer","Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer","Fresher" , "Designer", "Freelancer","Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



////////////////////////////////////////////
var preogressbar = document .getElementById("preogressbar")
var percent = document .getElementById("percent")

var totalHeight = document .body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    var progress =( window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress)+ "%"
}

var loader = document .getElementById("preloader");

   window.addEventListener("load", function(){
      loader.style.display = "none";
   })


   document.getElementById('downloadCV').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent immediate download
    const btnText = document.getElementById('btnText');
    const walkingPerson = document.getElementById('walkingPerson');
  
    // Hide button text and show the walking animation
    btnText.style.display = 'none';
    walkingPerson.style.display = 'block';
  
    // Wait for 2 seconds (animation time) before downloading
    setTimeout(() => {
      walkingPerson.style.display = 'none'; // Hide the walking person after the animation
      btnText.style.display = 'inline'; // Show the button text again
  
      // Trigger the file download
      window.location.href = document.getElementById('downloadCV').href;
    }, 2000); // 2 seconds delay (matching the walking animation time)
  });

  









//   ///////////////////////////

// Get the modal
var modal = document.getElementById("hireMeModal");

// Get the button that opens the modal
var btn = document.querySelector(".classbox a");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

