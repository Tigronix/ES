$(document).ready(function () {
	//Universal Tabs
	$(document).on('click', '[data-id]', function () {
		var id = $(this).attr('data-id');
		var taba = $(this).attr('data-taba');
		$('[data-id="' + id + '"]').each(function () {
			if ($(this).attr('data-taba') == taba) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
		$('#' + id + ' > [data-taba="' + taba + '"]').show().addClass('active').siblings().hide().removeClass('active');
	});
	$(".gallery__arrow").click(function () {
		if ($(this).hasClass('gallery__arrow--prev')) {
			$(this).removeClass('disabled');
			if ($('.gallery__img.first').hasClass('active')) {
				$(this).addClass('disabled');
				console.log('prev');
			}
			else {
				$(this).removeClass('disabled');
			}
			$('.gallery__img.active').prev().show().addClass('active').siblings().hide().removeClass('active');
		}
		else if ($(this).hasClass('gallery__arrow--next')) {
			$(this).removeClass('disabled');
			if ($('.gallery__img.last').hasClass('active')) {
				$(this).addClass('disabled');
				console.log('next');
			}
			else {
				$(this).removeClass('disabled');
			}$('.gallery__img.active').next().show().addClass('active').siblings().hide().removeClass('active');
		}
	});
	$('.menu__wrap, .nav__link--services').click(function () {
		$('.page-header').toggleClass('page-header--menu');
		$('.left-menu').toggle().toggleClass('slide-left').css('transition', 'transform .6s, opacity .6s');
		$('.hamburger').toggleClass('hamburgerActive');
		$('body').toggleClass('overflow');
	});
	//header-scroll
	var header = $('.page-header');
	$(window).scroll(function () {
		var top = $(this).scrollTop();
		if (top > 50) {
			header.addClass('page-header--fixed');
			$('.left-menu').addClass('left-menu--fixed');
		}
		else {
			header.removeClass('page-header--fixed');
			$('.left-menu').removeClass('left-menu--fixed');
		}
	});
	//Маска для телефона
	$(".form__tel").mask("+7(999)999-99-99", {
		placeholder: "+7(___)___-__-__"
	});
	//slider-main
	$('.slider-main').slick({
		slidesToShow: 1
		, slidesToScroll: 1
		, arrows: true
		, dots: true
	});
	//slider-main
	$('.portfolio').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 401,
				settings: {
					slidesToShow: 1
				}
			},
			
		]
	});
	//services
	$('.services-slider').slick({
		slidesToShow: 6
		, slidesToScroll: 1
		, arrows: true
		, responsive: [
			{
				breakpoint: 1281
				, settings: {
					slidesToShow: 4
				}
    }
			, {
				breakpoint: 901
				, settings: {
					slidesToShow: 3
				}
    }
			, {
				breakpoint: 768
				, settings: {
					slidesToShow: 2
				}
    }
			, {
				breakpoint: 500
				, settings: {
					slidesToShow: 1
				}
    }
  ]
	});
	//result
	$('.result').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});
	
	
		$(".spincrement").spincrement();
		var show = true;
		var countbox = ".advantages";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$(".spincrement").spincrement({
					thousandSeparator: ""
					, duration: 1200
				});
				show = false;
			}
		});
		$(".portfolio .slick-list").mCustomScrollbar({
			axis: "x" // horizontal scrollbar
		});
});
new WOW().init();