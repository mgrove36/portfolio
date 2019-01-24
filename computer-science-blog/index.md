---
title: GCSE Computer Science Blog
description: Research about HTTP, HTTPS, SSL and more, made in collaboration with Daniel Dunbar
layout: default
---

<!-- import Bootstrap - must be before extra styling so that carousel indicators' default styling is overwritten -->
<script src="/js/bootstrap.min.js" type="text/javascript"></script>
<link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<!-- import extra styling and scripts -->
<link href="css/main.css" rel="stylesheet" type="text/css">
<link href="css/presentation-imports.css" rel="stylesheet" type="text/css">
<script src="js/css-presentation-slide.js" type="text/javascript"></script>
<script src="js/scripts.js" type="text/javascript"></script>

<p>The current date is <span id="current_date">unknown</span>.</p>
# HTTP Introduction
<div id="http_presentation" class="carousel slide" data-interval="false" data-ride="carousel">
   <!-- Wrapper for presentation slides -->
   <div class="carousel-inner">
   </div>
   <div class="presentation-flexbox">
      <!-- Indicators -->
      <ol class="carousel-indicators">
      </ol>
      <!-- button to go to previous slide -->
      <button class="presentation-button-left mdc-button mdc-button--outlined" href="#http_presentation" data-slide="prev" data-mdc-auto-init="MDCRipple">
          <!-- navigation icon -->
          <i class="material-icons mdc-button__icon">navigate_before</i>
          Previous
      </button>
      <!-- button to go to next slide -->
      <button class="presentation-button-right mdc-button mdc-button--outlined" href="#http_presentation" data-slide="next" data-mdc-auto-init="MDCRipple">
          Next
          <!-- navigation icon -->
          <i class="material-icons mdc-button__icon">navigate_next</i>
       </button>
    </div>
</div>

<!-- HTML presentation -->
<h1>HTML, CSS & JS Introduction</h1>

<div id="html_presentation" class="carousel slide" data-interval="false" data-ride="carousel">
    <!-- Wrapper for presentation slides -->
    <div class="carousel-inner">
    </div>
    <div class="presentation-flexbox">
       <!-- Indicators -->
       <ol class="carousel-indicators">
       </ol>
       <!-- button to go to previous slide -->
       <button class="presentation-button-left mdc-button mdc-button--outlined" href="#html_presentation" data-slide="prev" data-mdc-auto-init="MDCRipple">
           <!-- navigation icon -->
           <i class="material-icons mdc-button__icon">navigate_before</i>
           Previous
       </button>
       <!-- button to go to next slide -->
       <button class="presentation-button-right mdc-button mdc-button--outlined" href="#html_presentation" data-slide="next" data-mdc-auto-init="MDCRipple">
           Next
           <!-- navigation icon -->
           <i class="material-icons mdc-button__icon">navigate_next</i>
       </button>
    </div>
</div>
<!-- HTML basics info is inserted via jQuery -->
<div id="blog-insert"></div>
