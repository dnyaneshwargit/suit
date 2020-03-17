$(document).ready(function(){
	
	fullSize();
	applyOrientation();
	
	
	$('.toggles-bns').click(function () {
		$('body').toggleClass('responsive-menu')
		$(this).toggleClass('cross-icon')
	});

	

	$('.toggle-style').click(function () {
		$('body').addClass('body-style')
		$('body').removeClass('body-fabric')
		$('body').removeClass('body-accent')
	});

	$('.toggle-fabric').click(function () {
		$('body').addClass('body-fabric')
		$('body').removeClass('body-style')
		$('body').removeClass('body-accent')
	});

	$('.toggle-accent').click(function () {
		$('body').addClass('body-accent')
		$('body').removeClass('body-fabric')
		$('body').removeClass('body-style')
	});

	$('.fabric-frame').click(function () {
		$('body').toggleClass('frame-fabric')
		$(this).toggleClass('frame-fabric-scale')
	});

	$('.remove-fab-det').click(function(){
		$('body').removeClass('frame-fabric');
	});

	$('.filter-a').click(function () {
		$('body').toggleClass('open-fabric')
		$(this).toggleClass('open-fabric-scale')
	});

	$('.nav-togg').click(function () {
		$('body').toggleClass('responsive-menu')
		$(this).toggleClass('responsive-this')
	});

	$('.up-down').click(function () {
		$('body').toggleClass('up-down-img')
		$(this).toggleClass('up-down-this')
	});

	
	
	function moved() {
		alert('in');
		var owl = $(".owl-carousel").data('owlCarousel');
		if (owl.currentItem + 1 === owl.itemsAmount) {
			alert('THE END');
		}
	}
	
	$(document).ready(function () {       
		  if ($('html').hasClass('desktop')) {
			new WOW().init();
		  }
	});
	
	$.scrollIt({
			upKey: 40,             // key code to navigate to the next section
			downKey: 40,           // key code to navigate to the previous section
			easing: 'ease-in-out', // the easing function for animation
			scrollTime: 1500,      // how long (in ms) the animation takes
			activeClass: 'active', // class given to the active nav element
			onPageChange: null,    // function(pageIndex) that is called when page is changed
			topOffset:0            // offste (in px) for fixed top navigation
		});
	});

	$(window).load(function(){
		if (window.innerWidth > 1024 ) {
			var s = skrollr.init();
		}
	});
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	function fullSize() {
		var heights = window.innerHeight;
		jQuery(".fullHt").css('min-height', (heights + 0) + "px");
	}
	
	function applyOrientation() {
		if (window.innerHeight > window.innerWidth) {
			$("body").addClass("potrait");
			$("body").removeClass("landscape");
		} else {
			$("body").addClass("landscape");
			$("body").removeClass("potrait");
		}
	}

$(document).ready(function() {
	$(".bhoechie-tab-menu1 a").click(function(e) {
		e.preventDefault();
		$(this).siblings('a.active').removeClass("active");
		$(this).addClass("active");
		$(this).parent().parent().parent().addClass("sml-nav-2");
		var index = $(this).index();
		$("div.bhoechie-tab1 div.bhoechie-tab-content1").removeClass("active");
		$("div.bhoechie-tab1 div.bhoechie-tab-content1").eq(index).addClass("active");
	});

	$(".bhoechie-tab-menu2 a").click(function(e) {
		e.preventDefault();
		$(this).siblings('a.active').removeClass("active");
		$(this).addClass("active");
		$(this).parent().parent().parent().addClass("sml-nav-2");
		var index = $(this).index();
		$("div.bhoechie-tab2 div.bhoechie-tab-content2").removeClass("active");
		$("div.bhoechie-tab2 div.bhoechie-tab-content2").eq(index).addClass("active");
	});

	$(".bhoechie-tab-menu3 a").click(function(e) {
		e.preventDefault();
		$(this).siblings('a.active').removeClass("active");
		$(this).addClass("active");
		$(this).parent().parent().parent().addClass("sml-nav-2");
		var index = $(this).index();
		$("div.bhoechie-tab3 div.bhoechie-tab-content3").removeClass("active");
		$("div.bhoechie-tab3 div.bhoechie-tab-content3").eq(index).addClass("active");
	});

	$(".bhoechie-tab-menu11 a").click(function(e) {
		e.preventDefault();
		$(this).siblings('a.active').removeClass("active");
		$(this).addClass("active");
		$(this).parent().parent().parent().addClass("sml-nav-2");
		var index = $(this).index();
		$("div.bhoechie-tab11 div.bhoechie-tab-content11").removeClass("active");
		$("div.bhoechie-tab11 div.bhoechie-tab-content11").eq(index).addClass("active");
	});
});


$(document).ready(function(){
	$('.style-fabrics-list li a, .main-nav li a, .in-tab-selects ul li a, .gallery-left-option a, .slide-vews-dot ul li a, .button-list li a').click(function(){
		$(this).parent().toggleClass('active').siblings().removeClass('active');
		$(this).parent().siblings().find("ul").slideUp();
		if($(this).parent().hasClass('active')){
			$(this).parent().find("ul").slideDown();
		}else{
			$(this).parent().find("ul").slideUp();
		}
	});
});