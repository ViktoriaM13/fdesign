/* Validate */
$(function () {
	$(".modal-window__form").validate ({
		rules : {
			name : {
				minlength : 2
			},
			tel : {
				digits : true,
				required : true,
				minlength : 10,
				maxlength : 11
			}
		},
		messages : {
			name : 'Введите ваше имя',
			tel : 'Введите ваш номер'
		}
	})
});

/* Modal-window */
$('.offer__items li:first-child a').on('click',function(e){
	e.preventDefault();
	$('.modal-window-wrap').removeClass('d-none');
	$('.modal-window-wrap').addClass('d-flex');
})

$('.modal-window__close').on('click',function(){
	$('.modal-window-wrap').removeClass('d-flex');
	$('.modal-window-wrap').addClass('d-none');
})

/* Smooth movement */
$(function (movement) {
	$(".go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
})