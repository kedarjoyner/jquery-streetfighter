
$(document).ready(function(){
        playRyuTheme();
        $('.sf-logo').fadeIn(4000, function() {
        $('.sf-logo').fadeOut(1000);
        $('.brought-by').fadeIn(4000).fadeOut(1000); 
        $('.jquery-logo').delay(5000).fadeIn(4000).fadeOut(1000);
        $('.how-to').delay(10000). fadeIn(4000);
    })
        $('.ryu-container').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    $('.ryu-container').mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            })
    })
    .mouseup(function(){
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
    })

    $(document).keydown(function(e){
        if (e.keyCode == 88){
            $('#ryu-sound')[0].pause();
            $('#cool-sound')[0].play();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();          
        }
    })
    .keyup(function(e){
        if (e.keyCode == 88){
            $('#ryu-sound')[0].play();
            $('#cool-sound')[0].pause();
            $('.ryu-cool').hide();
            /*$('.ryu-ready').hide();*/
            $('.ryu-ready').show();
        }
    })    
})

    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

    function playRyuTheme() {
        $('#ryu-sound')[0].volume = 0.5;
        $('#ryu-sound')[0].load();
        $('#ryu-sound')[0].play();
    }
    
    function playSaxSong() {
        $('#cool-sound')[0].volume = 0.5;
        $('#cool-sound')[0].load();
        $('#cool-sound')[0].play();
    }



