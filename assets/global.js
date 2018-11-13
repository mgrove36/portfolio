$(document).ready(function(){
    // include navbar
    $(".navbar-insert").load("/page-inserts/navbar.html", function(){
        // initiate MDC drawer
        const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

        // initiate MDC top app bar
        const mdc_top_app_bar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
        mdc_top_app_bar.setScrollTarget(document.getElementById('main-content'));
        mdc_top_app_bar.listen('MDCTopAppBar:nav', () => {
            drawer.open = !drawer.open;
        });

        // include source code link
        $(".source-code-link").load("/page-inserts/source-code-link.html");

        // initiate MDC buttons
        const mdc_buttons = document.querySelectorAll('.mdc-button');
        for (const button of mdc_buttons) {
            mdc.ripple.MDCRipple.attachTo(button);
        }
        
        // initiate FABs
        const mdc_fabs = document.querySelectorAll('.mdc-fab');
        for (const fab of mdc_fabs) {
            mdc.ripple.MDCRipple.attachTo(fab);
        }
        
        // initiate text fields
        const mdc_text_fields = document.querySelectorAll('.mdc-text-field');
        for (const text_field of mdc_text_fields) {
            mdc.textField.MDCTextField.attachTo(text_field);
        }
        
        // initiate helper texts
        const mdc_helper_texts = document.querySelectorAll(".mdc-text-field-helper-text");
        for (const helper_text of mdc_helper_texts) {
            mdc.textFieldHelperText.MDCTextFieldHelperText.attachTo(helper_text);
        }
        
        var drawer_item_link_query_selector = ".mdc-list-item[href='" + window.activated_drawer_item_link;
        $(drawer_item_link_query_selector + "']").addClass("mdc-list-item--activated");
        $(drawer_item_link_query_selector + "']").attr("aria-selected", "true");
        $(drawer_item_link_query_selector + "/']").addClass("mdc-list-item--activated");
        $(drawer_item_link_query_selector + "/']").attr("aria-selected", "true");
    });
});
