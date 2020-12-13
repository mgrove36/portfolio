---
title: Luhn Algorithm
description: Replication of the Luhn algorithm
layout: default
icon: credit-card
---

<link href="style.css" rel="stylesheet" type="text/css">
<script src="script.js" type="text/javascript"></script>

# Validate Your Number

<form onreset="$('#validation_message').html(null);">
    <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
            <input type="number" id="number-input-field" placeholder="Number" />
        </div>
        <div class="col-12">
            <ul class="actions">
                <li><a href="javascript:checkNumber();" class="button primary icon fa-check-circle">Check</a></li>
                <li><input type="reset" value="Reset"/></li>
            </ul>
        </div>
    </div>
</form>

<p id="validation_message"></p>