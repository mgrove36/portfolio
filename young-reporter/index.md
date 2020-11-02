---
title: BBC Young Reporter Article Creator
description: A simple tool to create markdown files from news articles, for uploading to the Reading School BBC Young Reporter website
layout: default
icon: comment
---

# Reading School BBC Young Reporter Article Compiler

Fill in the fields below, and then click the *download* button to create a file to be uploaded to Reading School's BBC Young Reporter website.

Give the authors' names in the format `First_Name Last_Initial`, and separate multiple authors with a comma - e.g. `John D, Emma S`

* If there are any headings inside your article, please place `# ` in front of them
* For subtitles, use `## `, as so on for smaller headings, up to and including `###### `
* For bullet points, use `* `, and for indented bullets, increase the indent using tab
* For numbered lists, use the numbers/letters: e.g. `1. `

Note the requirement for spaces after each of the above items - for example:

`### My Heading`

`* Numbered item`

will produce:

### My Heading

1. Numbered item

However, the below don't need spaces:

* For italics, use `*my italic text*`
* For bold, use `**my bold text**`
* For bold and italics, use `***my bold, italic text***`
* For links, use `[text to show in article](URL)`
* To include an extra image (besides the cover image), use:

`{% raw %}{% include image.html id=ID_OF_IMAGE caption="IMAGE_CAPTION" copyright="IMAGE_COPYRIGHT" %}{% endraw %}`

replacing `ID_OF_IMAGE` with a unique ID for the image in your article - start at 1 for the first image (excluding the cover image).

The cover image for your article must be a JPEG image, and have the `jpg` file extension. If your image is a PNG, you can convert it using an online tool. The file name must also be the same as your article's file name. This will be provided to you when you download the file from this page. E.g. if the file you download from this page is `news-article.md` then your cover image must be `news-article.jpg` (capital letters **DO** matter).

Any extra images for your article must be in the format:

`ARTICLE_FILE_NAME--extra-IMAGE_ID.jpg`, e.g. `news-article--extra-1.jpg`

where you replace `ARTICLE_FILE_NAME` with the file name you used for the cover image, and `IMAGE_ID` with the ID you gave the image when you inserted it into your article's body, as seen above.

<div class="mdc-text-field-container">
    <div class="mdc-text-field mdc-text-field--outlined" data-mdc-auto-init="MDCTextField">
        <input type="text" class="mdc-text-field__input" id="article-title">
        <label class="mdc-floating-label">Article title</label>
        <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
    </div>
    <div class="mdc-text-field mdc-text-field--outlined" data-mdc-auto-init="MDCTextField">
        <input type="text" class="mdc-text-field__input" id="authors">
        <label class="mdc-floating-label">Authors</label>
        <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
    </div>
    <div class="mdc-text-field mdc-text-field--outlined" data-mdc-auto-init="MDCTextField">
        <input type="text" class="mdc-text-field__input" id="image-caption">
        <label class="mdc-floating-label">Image caption</label>
        <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
    </div>
    <div class="mdc-text-field mdc-text-field--outlined" data-mdc-auto-init="MDCTextField">
        <input type="text" class="mdc-text-field__input" id="image-copyright">
        <label class="mdc-floating-label">Image copyright</label>
        <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
    </div>
    <div class="mdc-text-field mdc-text-field--outlined" data-mdc-auto-init="MDCTextField">
        <input type="text" class="mdc-text-field__input" id="article-description">
        <label class="mdc-floating-label">Article description</label>
        <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
    </div>
	<br>
	<div class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label" data-mdc-auto-init="MDCTextField">
        <textarea class="mdc-text-field__input" rows="8" aria-label="Label" id="article-content" placeholder="Article content"></textarea>
        <div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
    </div>
</div>


<button class="download_button mdc-button mdc-button--outlined" onclick="downloadFile();" data-mdc-auto-init="MDCRipple">
    <i class="material-icons mdc-button__icon">cloud_download</i>
    Download article
</button>

<style>
body {
	text-align: left;
}

.mdc-text-field--textarea .mdc-text-field__input {
	padding-top: 16px;
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled) {
	border-color: rgba(0,0,0,0.12);
}

#article-content::placeholder {
	color: rgba(0,0,0,0.63);
}

.mdc-text-field {
	min-width: 500px;
}

.mdc-text-field--textarea.mdc-text-field--focussed .mdc-text-field__input {
	color: black;
}

.mdc-text-field--textarea .mdc-text-field__input {
	content: "Article content";
}

.mdc-text-field--textarea .mdc-text-field__input:focus {
	content: "";
}

.mdc-text-field-container {
	max-width: 1508px;
}

@media screen and (max-width: 1550px) {
	.mdc-text-field-container {
		max-width: 1004px;
	}
}

@media screen and (max-width: 1045px) {
	.mdc-text-field-container {
		max-width: 502px;
	}
}

</style>

<script>
function downloadFile() {
	if (document.getElementById("article-title").value != "" && document.getElementById("article-title").value != "" && document.getElementById("authors").value != "" && document.getElementById("image-caption").value != "" && document.getElementById("image-copyright").value != "" && document.getElementById("article-description").value != "") {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		var hours = today.getHours();
		var minutes = today.getMinutes();
		var date = yyyy + "-" + mm + "-" + dd + " " + hours + ":" + minutes

		var file_name = document.getElementById("article-title").value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/\s+/g,"-").toLowerCase() + ".md";
		var text = `---
title: '` + document.getElementById("article-title").value + `'
date: ` + date + `
authors: ` + document.getElementById("authors").value + `
image-caption: ` + document.getElementById("image-caption").value + `
copyright: ` + document.getElementById("image-copyright").value + `
description: ` + document.getElementById("article-description").value + `
---

` + document.getElementById("article-content").value;
	
		var element = document.createElement("a");
		element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
		element.setAttribute("download", file_name);

		element.style.display = "none";
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}
}
</script>