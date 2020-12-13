document.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return;
    }

    var handled = false;
    if (event.key === "Enter") {
        checkNumber();
        handled = true;
    } else {
        // if number in input field is being edited, remove previous number evaluation message
        $("#validation_message").html(null);
    }

    if (handled) {
        // Suppress "double action" if event handled
        event.preventDefault();
    }
});

$("input[type='reset']").addEventListener("keydown", function(event) {
    $("#validation_message").html(null);
});

// function for validating number entered with Luhn algorithm
function checkNumber() {
    // define input string and remove non-numerical characters
    var input = document.getElementsByTagName("input")[0].value.replace(/\D/g,'');;
    // check string isn't empty
    if (input) {
        // retrieve digits & reverse
        var digits = document.getElementsByTagName("input")[0].value.split("").reverse(), sum = 0;
        digits.forEach(function(currentDigit, index) {
            newDigit = Number(currentDigit);
            if (index % 2 == 1) {
                if ((newDigit *= 2) > 9) {
                    newDigit -= 9;
                }
            }
            sum += newDigit;
        });

        // displays evaluation message
        $("#validation_message").html(((sum % 10) == 0) ? "Number is valid" : "Number is invalid");
    }
}
