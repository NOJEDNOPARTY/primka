var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

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
};

(function() {
	common.init();
}());
