(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);

if (Cookies.get("demo.mgrove.uk-cookies-accepted") != "true") {
	$("#cookies").show();
	$("#cookies").animate({ bottom: "0px" }, 1000);
	$("#close-cookies").click(function () {
		$("#cookies").animate({ bottom: "-100px" }, 1000);
		setTimeout(function () { $("#cookies").hide() }, 1000);
		Cookies.set("demo.mgrove.uk-cookies-accepted", "true", { expires: 30 });
	});
}