$(document).ready(function() {
    console.log("DOM ready");

    function getNavHeight() {
        let change = $('.fixed-top').height();
        //console.log("Got Nav Height: " + change);
        return change;
    }

    function setTopPadding() {
        //console.log("In setTopPadding()");
        $("body").css("padding-top", getNavHeight());
    }

    setTopPadding();

    // The function actually applying the offset
    function offsetAnchor() {
        if (location.hash.length !== 0) {
            let change = getNavHeight();
            window.scrollTo(window.scrollX, window.scrollY - change);
        }
    }
    
    // Captures click events of all <a> elements with href starting with #
    $(document).on('click', 'a[href^="#"]', function(event) {
        // Click events are captured before hashchanges. Timeout
        // causes offsetAnchor to be called after the page jump.
        console.log("In click detector");
        window.setTimeout(function() {
            offsetAnchor();
        }, 0);
    });

    $(window).resize(setTopPadding);
    
    // Set the offset when entering page with hash present in the url
    window.setTimeout(offsetAnchor, 0);
});