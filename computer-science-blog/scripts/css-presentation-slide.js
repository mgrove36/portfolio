window.onload = function() {
    var year = new Date().getFullYear();
    document.getElementById("css_attribute_list_link").innerHTML = 'All of the CSS style attributes are listed <a href="https://www.w3.org/TR/css-' + year + '/#properties" target="_blank">here</a>.';
}
