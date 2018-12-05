// set page title
window.page_title = "Computer Science Blog | Matthew Grove";

window.onload = function() {
	// set the current date
    var date = new Date();

    // ternary operator: if the date < 10 then add 0 to the start of it, else display the date
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	
	// set current date
    var current_date = day + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
	
	// display date
    document.getElementById("current_date").innerHTML = current_date;
}

function nextPage() {
	
}

function previousPage() {
	
}

function displayPage(page) {
	document.getElementById("iframe").src = "pages/" + page + ".html";
}

var pages = ["page_01", "page_02", "page_03"];
var pageIndex = 0;