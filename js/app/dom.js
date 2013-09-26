define(
    ["jquery", "ui"],
    function( $, Ui ){
        var Dom = {},
            docTitle;

        Dom.bindToWindowResize = function(){
            $( window ).on( "resize", function(){
                window.resized = true;
                setTimeout( function(){
                    if( window.resized ){
                        Ui.scaleImage();
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

        Dom.bindToMouseClick = function(){
            $( "nav i" ).on( "click", function(){
                Ui.newSuggestion( docTitle );
            });
        };

        Dom.bindEventHandlers = function(){
            Dom.bindToWindowResize();
            Dom.bindToMouseHover();
            Dom.bindToMouseClick();
        };

        Dom.captureState = function(){
            docTitle = document.title;
        }

        return Dom;
    }
)
