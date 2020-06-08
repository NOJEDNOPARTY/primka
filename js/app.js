var common = {
	init: function() {
		common.main();
		common.owl();
		common.submitForm();
	},
	main: function(){

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 100}, 3000);
			$('.menu-trigger').removeClass('open');
			$('header').removeClass('open');
		});


		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').removeClass('active');
			$('body').addClass('hidden');
			$(popup).addClass('active');
		});

		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').removeClass('active');
			$('body').removeClass('hidden');
		})

		// $('.menu-trigger').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').addClass('open');
		// })
		// $('.nav-close').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').removeClass('open');
		// })
		
		// var bLazy = new Blazy({});

		$('.tel-trigger').mask("+380(99) 999-99-99");

	},
	owl: function(){
		$('.services-slider').owlCarousel({
			loop:true,
			margin:0,
			nav: true,
			dots: false,
			items: 1,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed:450
		})
		$('.sertificates-slider').owlCarousel({
			loop:true,
			margin: 17,
			nav: true,
			dots: false,
			items: 4,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed:450
		})
	},
	submitForm: function() {
		$("form").submit(function(event){
			event.preventDefault();
			formField = $(this).find(".form-field")
			
			formField.each(function(){
				var thisEl = $(this);
				if (! thisEl.val().length) {
					thisEl.addClass('error')
					setTimeout(function(){
						thisEl.removeClass('error')
					}, 3000)
					thisEl.addClass('form-error')
				}else { thisEl.removeClass('form-error')}
			});	
			if(formField.hasClass('form-error') == false){
				$('.popup-wrapper').removeClass('active');
				$('#thanksPopup').addClass('active')
			}
		});
	}
};

(function() {
	common.init();
}());
