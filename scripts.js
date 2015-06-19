var iconSwap1 = function(){
    $( "a div.icon-up1" ).toggleClass( "hidden" );
    $( "a div.icon-down1" ).toggleClass( "hidden" );
    $( "a div.icon-up2" ).removeClass( "hidden" );
    $( "a div.icon-down2" ).addClass( "hidden" );
    $( "a div.icon-up3" ).removeClass( "hidden" );
    $( "a div.icon-down3" ).addClass( "hidden" );
}

var iconSwap2 = function(){ 
    $( "a div.icon-up2" ).toggleClass( "hidden" );
    $( "a div.icon-down2" ).toggleClass( "hidden" );
    $( "a div.icon-up1" ).removeClass( "hidden" );
    $( "a div.icon-down1" ).addClass( "hidden" );
    $( "a div.icon-up3" ).removeClass( "hidden" );
    $( "a div.icon-down3" ).addClass( "hidden" );
}

var iconSwap3 = function(){
    $( "a div.icon-up3" ).toggleClass( "hidden" );
    $( "a div.icon-down3" ).toggleClass( "hidden" );
    $( "a div.icon-up1" ).removeClass( "hidden" );
    $( "a div.icon-down1" ).addClass( "hidden" );
    $( "a div.icon-up2" ).removeClass( "hidden" );
    $( "a div.icon-down2" ).addClass( "hidden" );
}