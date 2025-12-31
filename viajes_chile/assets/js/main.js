//Activación de tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function(){ //cuando el documento esté listo

    //Smooth scrolling
    $("a").on('click', function(event) {
        if (this.hash !== "") { 
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
                window.location.hash = hash;
            });
        }
    });


    //Cambiar el color del navbar al hacer scroll
    $(window).scroll(function() { 
      if ($(window).scrollTop() > 0) { 
        $('.navbar').addClass('bg-scroll'); 
      } else {
        $('.navbar').removeClass('bg-scroll'); 
      }
    });
            
});