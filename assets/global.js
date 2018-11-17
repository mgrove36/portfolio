$(document).ready(function(){
    // include navbar
    $(".navbar-insert").load("/page-inserts/navbar.html", function(){
        // initiate MDC drawer
        const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

        // include top app bar
        $(".mdc-top-app-bar").load("/page-inserts/top-app-bar.html", function(){
            // initiate MDC top app bar
            const mdc_top_app_bar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
            mdc_top_app_bar.setScrollTarget(document.getElementById('main-content'));
            mdc_top_app_bar.listen('MDCTopAppBar:nav', () => {
                drawer.open = !drawer.open;
            });

            // include source code link
            $(".source-code-link").load("/page-inserts/source-code-link.html");

            // initiate MDC items
            mdc.autoInit();

            // get current URL with no forward slash at the end and no domain
            var drawer_item_link_query_selector = ".mdc-list-item[href='" + window.location.pathname;
            if (drawer_item_link_query_selector.substring(drawer_item_link_query_selector.length - 1) == "/") {
                drawer_item_link_query_selector = drawer_item_link_query_selector.substring(0,drawer_item_link_query_selector.length - 1);
            }

            // give 'seleted' styling to correct item on navbar
            $(drawer_item_link_query_selector + "']").addClass("mdc-list-item--activated");
            $(drawer_item_link_query_selector + "']").attr("aria-selected", "true");
            $(drawer_item_link_query_selector + "/']").addClass("mdc-list-item--activated");
            $(drawer_item_link_query_selector + "/']").attr("aria-selected", "true");
        });
    });
    /* for cookie notice */
    $("#cookies").addClass("display");
    $(".source-code-link").animate({bottom: "+100px"}, 1000);
    $("#close-cookies").click(function(){
        event.preventDefault();
        $("#cookies").addClass("close-cookies");
        $(".source-code-link").animate({bottom: "-100px"}, 1000);
    });
});
