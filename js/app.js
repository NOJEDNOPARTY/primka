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


		function fixedHead() {
			$('header').addClass('fixed');
			$('.banner-wrapper').css({'padding-top':$('header').outerHeight()})
			
			if ($(window).scrollTop() > $('header').outerHeight())  {
				$('header').addClass('dark');
			}else {$('header').removeClass('dark');}
		};

		fixedHead();

		$(window).resize(function() {
			fixedHead();
		});
		$(window).scroll(function() {
			fixedHead();
		});

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').removeClass('active');
			$('body').addClass('hidden');
			$('header').removeClass('open');
			$(popup).addClass('active');
		});

		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').removeClass('active');
			$('body').removeClass('hidden');
		})

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').toggleClass('open');
			$('body').toggleClass('hidden');
		})
	
		var bLazy = new Blazy({});

		$('.tel-trigger').mask("+380(99) 999-99-99");

	},
	owl: function(){
		$('.services-slider').owlCarousel({
			loop:true,
			margin:0,
			nav: true,
			dots: false,
			items: 1,
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed:450,
			autoHeight:true
		})
		$('.sertificates-slider').owlCarousel({
			loop:true,
			margin: 17,
			nav: true,
			dots: false,
			items: 4,
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed:450,
			responsive:{
				0:{
					items:1,
					margin:0,
				},
				450:{
					items:2,
				},
				650:{
					items:3,
				},
				901:{
					items:4,
				}
			}
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
