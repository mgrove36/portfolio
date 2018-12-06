// set page title
window.page_title = "Computer Science Blog | Matthew Grove";

function nextPage() {
	// if there are more slides to come, display the next one
	if (window.current_blog_page < window.pages.length) {
		displayPage(window.pages[window.current_blog_page + 1]);
	} else {
		// if end of presentation has been reached, display the first slide
		displayPage(window.pages[0]);
	}
}

function previousPage() {
	// if there are more slides before the current one, display the previous slide
	if (window.current_blog_page >= 1) {
		displayPage(window.pages[window.current_blog_page - 1]);
	} else {
		// if end of presentation has been reached, display the first slide
		displayPage(window.pages[window.pages.length - 1]);
	}
}

function displayPage(page) {
	// document.getElementById("iframe").src = "pages/" + page + ".html";
	$("#presentation").load(page);
}

var pages = ["page_01", "page_02", "page_03"];
var pageIndex = 0;

window.onload = function() {
	
	// set the current date
    var date = new Date();

    // ternary operator: if the date < 10 then add 0 to the start of it, else display the date
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	
	// set current date
    var current_date = day + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
	
	// display date
    $("#current_date").html(current_date);
	
	// define variables for blog pages
	window.pages = [];
	var page_exists = true;
	var page_number = 1;
	// gets all blog pages and add them to an array (pages[])
	while (page_exists) {
		var page = "pages/page_" + page_number + ".html";
		$.get("pages/page_" + page_number + ".html").done(function() { 
			window.pages.append(page);
		}).fail(function() {
			page_exists = false;
		});
		page_number ++;
	}
	// displays first blog page
	window.current_blog_page = 0;
	$("#presentation").load(window.pages[window.current_blog_page]);
	$("#blog-insert").load("pages/blog.html");
}