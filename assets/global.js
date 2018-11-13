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
        mdc.autoInit();

        var drawer_item_link_query_selector = ".mdc-list-item[href='" + window.activated_drawer_item_link;
        $(drawer_item_link_query_selector + "']").addClass("mdc-list-item--activated");
        $(drawer_item_link_query_selector + "']").attr("aria-selected", "true");
        $(drawer_item_link_query_selector + "/']").addClass("mdc-list-item--activated");
        $(drawer_item_link_query_selector + "/']").attr("aria-selected", "true");
    });
});
