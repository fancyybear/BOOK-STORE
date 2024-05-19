$(document).ready(function() {
    function adjustContent() {
        var windowWidth = $(window).width();
        
        if (windowWidth < 768) {
            $('#content').css({
                'font-size': '14px',
                'padding': '10px'
            });
        } else if (windowWidth >= 768 && windowWidth < 1024) {
            $('#content').css({
                'font-size': '16px',
                'padding': '20px'
            });
        } else {
            $('#content').css({
                'font-size': '18px',
                'padding': '30px'
            });
        }
    }

    // Initial adjustment
    adjustContent();

    // Adjust on window resize
    $(window).resize(function() {
        adjustContent();
    });
});
