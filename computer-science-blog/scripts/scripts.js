// set page title
window.page_title = "Computer Science Blog | Matthew Grove";

window.onload = function() {
	// set the current date
    var date = new Date();

    // ternary operator: if the date < 10 then add 0 to the start of it, else display the date
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

	// set current date
    var current_date = day + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

	// display date
    $("#current_date").html(current_date);

	// display first blog page
	$("#blog-insert").load("pages/blog.html");

	// define variables for HTTP presentation pages
	var http_pages = ["hyperlinks", "http", "https", "cookies"];
	// displays HTTP presentation pages
	http_pages.forEach(function(item, index) {
		if (index == 0) {
			$("#http_presentation .carousel-inner").append('<iframe class="item active" src="pages/' + item + '.html"></iframe>');
			$("#http_presentation .carousel-indicators").append('<li data-target="#http_presentation" class="active" data-slide-to="' + index + '"></li>')
		} else {
			$("#http_presentation .carousel-inner").append('<iframe class="item" src="pages/' + item + '.html"></iframe>');
			$("#http_presentation .carousel-indicators").append('<li data-target="#http_presentation" data-slide-to="' +  index + '"></li>')
		}
	});

   	// define variables for HTML presentation pages
   	var html_pages = ["html", "css", "js"];
   	// displays HTML presentation pages
   	html_pages.forEach(function(item, index) {
        if (index == 0) {
			$("#html_presentation .carousel-inner").append('<iframe class="item active" src="pages/' + item + '.html"></iframe>');
			$("#html_presentation .carousel-indicators").append('<li data-target="#html_presentation" class="active" data-slide-to="' + index + '"></li>')
		} else {
			$("#html_presentation .carousel-inner").append('<iframe class="item" src="pages/' + item + '.html"></iframe>');
			$("#html_presentation .carousel-indicators").append('<li data-target="#html_presentation" data-slide-to="' +  index + '"></li>')
		}
   	});
}
