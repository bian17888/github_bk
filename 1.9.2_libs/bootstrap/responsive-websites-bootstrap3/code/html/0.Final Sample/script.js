/**
 * @fileOverview
 * @author bian17888 16/7/6 16:16
 */

$(function () {

	init();

	//////////////////////////////////////////////////

	function init() {
		initFillScreen();
		initNanoGallery();
		initNavScrolling();

		// 多背景视差
		$.stellar();
		// 动画
		new WOW().init()
		// slider 幻灯片
		$('.carousel').carousel();
	}

	/**
	 * @func initFillScreen
	 * @desc 初始化全屏图片,视频 高度
	 */
	function initFillScreen() {
		// 容器高度
		$('.fill-screen').css('height', window.innerHeight);
		// 图片高度
		$('.fill-screen').each(function (index) {
			var source = $(this).data('source');
			$(this).background({
				source: source
			});
		});
	}

	/**
	 * @func initNanoGallery
	 * @desc 图片预览
	 */
	function initNanoGallery() {
		$("#nanoGallery").nanoGallery({
			itemsBaseURL: '/images/photos/'
		});
	}

	/**
	 * @func initNavScrolling
	 * @desc 导航 滚动内容联动
	 */
	function initNavScrolling () {
		// init scrollspy
		$('body').scrollspy({
			target : '.navbar'
			//offset : 110
		});
		// smooth scrolling
		$('.nav a, .down-button a').bind('click', function () {
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		// change .navbar padding
		$(window).scroll(function() {
			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {
				var y = window.scrollY,
					$navbar = $('.navbar');
				if (y > 430) {
					$navbar.addClass('navbar-narrow');
				} else {
					$navbar.removeClass('navbar-narrow');
				}
			}, 100));
		});
	}

})