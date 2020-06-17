// horizontal scrolling https://stackoverflow.com/questions/11700927/horizontal-scrolling-with-mouse-wheel-in-a-div

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('wrapper').scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('wrapper').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('wrapper').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('wrapper').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('wrapper').attachEvent("onmousewheel", scrollHorizontally);
    }
})();

