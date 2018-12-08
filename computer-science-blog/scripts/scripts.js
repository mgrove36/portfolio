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

window.onload = function() {
	// set the current date
    var date = new Date();

    // ternary operator: if the date < 10 then add 0 to the start of it, else display the date
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

	// set current date
    var current_date = day + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

	// display date
    $("#current_date").html(current_date);

	// define variables for HTTP presentation pages
	http_pages = ["hyperlinks", "http", "https", "cookies"];
	// displays HTTP presentation pages
	http_pages.forEach(function(item, index) {
		$.get("pages/" + item + ".html", function(content) {
			if (index == 0) {
				$("#http_presentation .carousel-inner").append('<div class="item active">' + content + '</div>');
				$("#http_presentation .carousel-indicators").append('<li data-target="#http_presentation" class="active" data-slide-to="' + index + '"></li>')
			} else {
				$("#http_presentation .carousel-inner").append('<div class="item">' + content + '</div>');
				$("#http_presentation .carousel-indicators").append('<li data-target="#http_presentation" data-slide-to="' + index + '"></li>')
			}
		});
	});
	
   	// define variables for HTML presentation pages
   	html_pages = ["page"];
   	// displays HTML presentation pages
   	html_pages.forEach(function(item, index) {
   		$.get("pages/" + item + ".html", function(content) {
	   		if (index == 0) {
	   			$("#html_presentation .carousel-inner").append('<div class="item active">' + content + '</div>');
	   			$("#html_presentation .carousel-indicators").append('<li data-target="#html_presentation" class="active" data-slide-to="' + index + '"></li>')
	   		} else {
	   			$("#html_presentation .carousel-inner").append('<div class="item">' + content + '</div>');
	   			$("#html_presentation .carousel-indicators").append('<li data-target="#html_presentation" data-slide-to="' + index + '"></li>')
	   		}
   		});
   	});

	// displays first blog page
	$("#blog-insert").load("pages/blog.html");
}
