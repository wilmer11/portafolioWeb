//botón fixed
var a = document.getElementById('btn-toggle');
function menus(){
    var desplazamiento = window.pageYOffset;
    if(desplazamiento <= 100){
        a.classList.remove('btn-toggle2');
        a.className = ('btn-toggle');
        a.style.transition = '1s';
    }else{
       	a.classList.remove('btn-toggle');
        a.className = ('btn-toggle2');
        a.style.transition = '1s';
    }
}
window.addEventListener('load', function(){  
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('scroll', function() {
    menus();
});
// botón en función
$(document).ready(function(){
	var est = true;
	$('.ToggleSecction').slideDown();
	if (est == true) {
		$('body').css({
			"overflow": "hidden",
			"display": "block"
		});
	}
});
$(document).ready(function() {
    var estado = false;
    $('#btn-toggle').on('click', function() {
        $('.ToggleSecction').slideToggle();
        if (estado == true) {
            $(this).text('Ver curriculum');
            $('.btn-toggle').css({
                "background": "rgba(248, 255, 42, .6)"
            });
            $('body').css({
                "overflow": "hidden"
            });
            estado = false;
        } else {
            $(this).text('Cerrar');
            $('.btn-toggle').css({
                "background": "rgba(248, 255, 42, .6)"
            });
            $('body').css({
                "overflow": "auto",
            });
            estado = true;
        }
    });
});
