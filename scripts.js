$(function() {
    var $accordionItems = $('#accordion > div');
    var $links = $("#accordion > a");

    function resize() {

    }
    
    $(window).on('resize', function() {
        resize();
    });
    
    resize();

    function openItem($a) {
        var divId = $a.attr('href').substr(1);
        var $panel = $(document.getElementById(divId));
        $panel.slideDown('slow');        
        $a.removeClass('closed').addClass('open');
        // close all other items
        $links.not("[href='#" + divId + "']").each(function(index, a){
           closeItem($(a));
        });
    }
    
    function closeItem($a) {
        var divId = $a.attr('href').substr(1);
        var $panel = $(document.getElementById(divId));
        $panel.slideUp('slow');        
        $a.removeClass('open').addClass('closed');
    }

    $links.on('click', function(e) {

        e.preventDefault();
        
        var $a = $(this);
        
        if ($a.hasClass('closed')){
            openItem($a);
        } else {
            closeItem($a);
        }
    });

    openItem($("#accordion > a.open"));

    $('video, audio').mediaelementplayer({
        // Configuration
        success: function(media) {

        }
    });

});