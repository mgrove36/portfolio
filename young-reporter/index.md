---
title: BBC Young Reporter Article Generator
description: A tool to create markdown files from news articles and their metadata for uploading to the Reading School BBC Young Reporter website.
layout: default
icon: comment
---

### Prerequisites

Before you begin, ensure you have, as a minimum:
* a headline,
* the name(s) of the author(s),
* a header image, which will be shown behind the headline (so the content of this image can't be vital, like a graph),
* a caption for your header image,
* the copyright attribution for your header image,
* a brief description (one or two short sentences) of your article, and
* your article content.

<hr>

### Instructions

Fill in the fields below, and then click the *download* button to generate a file to be uploaded to Reading School's BBC Young Reporter website.

Give the authors' names in the format `First_Name Last_Initial`, and separate multiple authors with a comma - e.g. `John D, Emma S`.

* If there are any headings inside your article, please place `# ` in front of them.
* For subtitles, use `## `, as so on for smaller headings, up to and including `###### `.
* For bullet points, use `* `, and for indented bullets, increase the indent using the tab button on your keyboard.
* For numbered lists, use the numbers/letters: e.g. `1. `.

Note the requirement for spaces after each of the above items - for example:

<pre><code>### My Heading

* Numbered item</code></pre>

will produce:

<blockquote>
<h3>My Heading</h3>

<ol>
    <li>Numbered item</li>
</ol>

</blockquote>

Other formatting can be done with the following:

* For italics, use `*my italic text*`.
* For bold, use `**my bold text**`.
* For bold and italics, use `***my bold, italic text***`.
* For links, use `[text to show in article](URL)`.
* To include an extra image (besides the cover image), use:
<pre><code>{% raw %}{% include image.html id=ID_OF_IMAGE caption="IMAGE_CAPTION" copyright="IMAGE_COPYRIGHT" %}{% endraw %}</code></pre>
replacing `ID_OF_IMAGE` with a unique ID for the image in your article - start at 1 for the first image (excluding the cover image).

The cover image for your article must be a JPEG image, and have the `jpg` file extension. If your image is a PNG, you can [convert it using an online tool](https://png2jpg.com/). The file name must also be the same as your article's file name. This will be provided to you when you download the file from this page. E.g. if the file you download from this page is `news-article.md` then your cover image must be `news-article.jpg` (capital letters **DO** matter).

Any extra images for your article must be in the format: `ARTICLE_FILE_NAME--extra-IMAGE_ID.jpg`, where you replace `ARTICLE_FILE_NAME` with the file name you used for the cover image, and `IMAGE_ID` with the ID you gave the image when you inserted it into your article's body, as seen above. E.g.: `news-article--extra-1.jpg`.

<hr>

###  Example

<pre><code># Headline

## Heading2

### Heading3

#### Heading4

##### Heading5

###### Heading6

Some text.

1. Numbered item 1
2. **Numbered item 2**
* *Bullet 1*
* Bullet 2

***Bold & italics***

A link to [Google](https://google.com).</code></pre>

Will produce:

<blockquote>
<h1>Headline</h1>

<h2>Heading2</h2>

<h3>Heading3</h3>

<h4>Heading4</h4>

<h5>Heading5</h5>

<h6>Heading6</h6>

<p>Some text.</p>

<ol>
    <li>Numbered item 1</li>
    <li><b>Numbered item 2</b></li>
</ol>
<ul>
    <li><i>Bullet 1</i></li>
    <li>Bullet 2</li>
</ul>

<p><b><i>Bold & italics</i></b></p>

A link to <a href="https://google.com">Google</a>.
</blockquote>

<hr>

### Generator

<form onreset="if (!($('form a.submit').hasClass('disabled'))) $('form a.submit').addClass('disabled');">
    <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
            <input type="text" id="headline" placeholder="Headline" />
        </div>
        <div class="col-6 col-12-xsmall">
            <input type="text" id="authors" placeholder="Authors" />
        </div>
        <div class="col-6 col-12-xsmall">
            <input type="text" id="image-caption" placeholder="Image caption" />
        </div>
        <div class="col-6 col-12-xsmall">
            <input type="text" id="image-copyright" placeholder="Image copyright" />
        </div>
        <!-- Break -->
        <div class="col-12">
            <textarea id="article-description" placeholder="Article description" rows="2"></textarea>
        </div>
        <div class="col-12">
            <textarea id="article-content" placeholder="Article content" rows="20"></textarea>
        </div>
        <!-- Break -->
        <div class="col-12">
            <ul class="actions">
                <li><a href="javascript:downloadFile();" class="submit button primary icon fa-download">Download</a></li>
                <li><input type="reset" value="Reset" /></li>
            </ul>
        </div>
    </div>
</form>

<script>
function checkFieldStatuses() {
    var input_elements = $("form input[type='text']");
    var textarea_elements = $("form textarea");
    var elements = $.merge($("form input[type='text']"), $("form textarea"));
    any_empty = false;
    for (var i = 0, element; element = elements[i++];) {
        if (element.value === "") {
            any_empty = true;
            break;
        }
    }
    if (!any_empty && $("form a.submit").hasClass("disabled")) {
        $("form a.submit").removeClass("disabled");
        return "removed class";
    } else if (any_empty && !($("form a.submit").hasClass("disabled"))) {
        $("form a.submit").addClass("disabled");
        return "added class";
    }
}

checkFieldStatuses();
document.addEventListener("mouseup", function(event){
    checkFieldStatuses();
}, true);
$("form").keyup(function(event){
    checkFieldStatuses();
});

function downloadFile(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var date = yyyy + "-" + mm + "-" + dd + " " + hours + ":" + minutes

    var file_name = $("#headline")[0].value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/\s+/g,"-").toLowerCase() + ".md";
    var text = `---
title: '` + $("#headline")[0].value + `'
date: ` + date + `
authors: ` + $("#authors")[0].value + `
image-caption: ` + $("#image-caption")[0].value + `
copyright: ` + $("#image-copyright")[0].value + `
description: ` + $("#article-description")[0].value + `
---

` + $("#article-content")[0].value;

    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", file_name);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$("form input[type='text']").keypress(function(event) {
    if (event.defaultPrevented) {
        return;
    }

    if (event.key === "Enter") {
        event.preventDefault();
    }
});
</script>

<style>
blockquote {
    font-style: normal;
}
</style>