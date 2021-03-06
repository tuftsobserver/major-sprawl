$(document).ready(function(){

    /* no scrolling on landing page until click */
    disable_scroll();
    $("#landing-page").click(function(){
        $("#landing-page").fadeOut("slow");
        enable_scroll();
    });

    /* when click dept, draw circle and close sidebar if mobile */
    $('.dept-button').click(function(){
        drawDept($(this).attr('id'));
        $('.dept-button').each(function(){
            $(this).removeClass("dept-selected")
        })
        $(this).addClass("dept-selected")

        if ($(window).width() <= 840) {
            closeSidebar();
        }
    });

    /* scroll to article on 'see more' click */
    $("#see-more").click(function() {
        $('html,body').animate({
            scrollTop: $("#hide-shadow").offset().top},
        'slow');
    });

    $('#close-sidebar').click(closeSidebar);
    $('#open-sidebar').click(openSidebar);

    /* show blockquotes on scroll down */
    $('.ha-waypoint').each(function(i) {
        var quoteID = $(this).data('animateDown');
        $(this).waypoint(function() {
            $('#' + quoteID).fadeIn(1000);
        }, {offset: '50%'});
    });
});

function openSidebar() {
    $('#map').css("width", "calc(100% - 300px)");
    google.maps.event.trigger(map, "resize");
    $('#sidebar').css("display", "block");
    $('#open-sidebar').css("display", "none");
}

function closeSidebar() {
    $('#sidebar').css("display", "none");
    $('#map').css("width", "100%");
    google.maps.event.trigger(map, "resize");
    $('#open-sidebar').css("display", "block");
}

// credit for the following from http://jsfiddle.net/prSqz/17/
// prevents scrolling
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}
