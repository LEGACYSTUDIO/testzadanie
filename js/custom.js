$(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
		$('.hamb-menu').toggle(200, function(){
			$(this).toggleClass('toggle');
		});
	});

	$('.search button').click(function(){
		if ($(this).hasClass('active')) {
			$('.search-block').animate({
				'top': '-100px'
			}, 100);
			$('.wrapper').animate({
				'margin-top': '0'
			}, 100);
		}else{
			$('.search-block').animate({
				'top': 0
			}, 100);
			$('.wrapper').animate({
				'margin-top': '100px'
			}, 100);
		}
		$(this).toggleClass('active')
	});
});