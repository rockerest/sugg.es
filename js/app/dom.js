define(
    ["jquery"],
    function( $ ){
        var Dom = {},
            docTitle;

        Dom.bindToWindowResize = function( resize ){
            $( window ).on( "resize", function(){
                window.resized = true;
                setTimeout( function(){
                    if( window.resized ){
                        resize();
                        window.resized = false;
                    }
                }, 125 );
            });
        };

        Dom.bindToMouseHover = function(){
            $( "nav i" ).on( "mouseenter mouseleave", function(){
                $(this).toggleClass( "icon-spin" );
            });
        };

        Dom.bindToMouseClick = function( suggest ){
            $( "nav i" ).on( "click", function(){
                suggest( docTitle );
            });
        };

        Dom.bindEventHandlers = function( resize, suggest ){
            Dom.bindToWindowResize( resize );
            Dom.bindToMouseHover();
            Dom.bindToMouseClick( suggest );
        };

        Dom.captureState = function(){
            docTitle = document.title;
        };

        Dom.getImageRatio = function( img ){
            return (img.width / img.height);
        };

        Dom.createImage = function( source ){
            var img = new Image();

            img.src = source;

            return img;
        };

        Dom.getMaximumImageHeight = function(){
            return $( "#graphic" ).height();
        };

        Dom.getMaximumImageWidth = function(){
            return $( "#graphic" ).width();
        };

        return Dom;
    }
)
