$(document).ready(function() {
    $('#topButton').click(function(){ // works
        $('h1').css('color', 'green');
    });

    $('#toggleP').before("<b>Am I doing right?!");
    
    $('#toggleP').after("<b>so many things to do!");

    $('#slideToggle button').click(function(){ // works
        $('#toggleP').toggle();
    });    

    $('#fadeOut').click(function() {
        $('#content').fadeOut('slow');
    });

    $('#fadeOut').click(function() {
        $('#content').fadein('slow');
    });

    $('#append button').click(function(){
        $('.result').append('<h4>I did append this paragraph!</h4>'); // works
    });    

    $( "#addClassP" ).text( "<b>Some</b> new text." );

    $('input').on('blur', function() {
        $(this).val(function(i, val) {
        return val.toUpperCase();
        });
    });

    $( ".excitement" ).html( "<b>Wow!</b> Such excitement..." );
    $( "div b" ).append( document.createTextNode( "!!!" )).css( "color", "red" );
    $( document.body ).click(function() {
        if ( $('h5').first().is( ":hidden" ) ) {
            $('h5').show( "slow" );
        } else {
            $('h5').slideUp();
        }
     });

     $('#hide').click(function() {
            $('#hideP').hide( "slow" );
        });

});

