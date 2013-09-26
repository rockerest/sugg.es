define(
    ["jquery", "data", "jquery-color", "qtip"],
    function( $, Data ){
        var Ui = {},
            maxWidth;

        Ui.suggest = function( suggestion ){
            var link        = $("<a></a>")
                    .attr( "href", suggestion.link )
                    .html( suggestion.slug ),
                hook        = suggestion.hook[ ( Math.floor( Math.random() * 2 ) ) == 1 ? "alt" : "main" ],
                wrap        = $( "<div></div>" ).append( link ),
                goToDark    = Ui.isColorTooLight( suggestion.color.primary ) ? true : false;

            maxWidth    = 0;

            $( "body" ).css({
                "color": suggestion.color.primary
            });

            $( "a" ).css({
                "color": suggestion.color.secondary
            });

            Ui.adjustContrast( goToDark );

            $( "#slug" ).html( wrap.clone().html() );
            $( "#graphic a img" ).prop({
                "src": suggestion.icon,
                "alt": suggestion.slug
            });
            $( "#graphic a" ).prop({
                "href": suggestion.link,
                "title": suggestion.slug
            });

            $( "#hook" ).html( hook.replace( "||||slugslug||||", wrap.clone().html() ) );

            // first time scales it once and gets us a hook into the height after dom paint
            Ui.scaleImage();
            // second time uses the REAL (DOM) height instead of the image dimensions and scales down if necessary
            Ui.scaleImage();
        };

        Ui.newSuggestion = function( docTitle ){
            var suggestion = Data.getRandomSuggestion();
            document.title = (docTitle || "May I sugg.es") + " " + suggestion.slug + "?";
            Ui.suggest( suggestion );
        };

        Ui.scaleImage = function(){
            var aTag    = $( "#graphic a" ).width();
                maxH    = $( "#graphic" ).height(),
                img     = $( "#graphic a img" ),
                imgH    = img.height();

            if( imgH > maxH ){
                img.width( '' );
                img.height( maxH );
                maxWidth = img.width();
            }
            else{
                img.height( '' );
                if( aTag < maxWidth || maxWidth === 0 ){
                    img.width( aTag );
                }
                else{
                    img.width( '' );
                    img.height( maxH );
                }
            }
        };

        Ui.isColorTooLight = function( hex ){
            if( hex.substr( 0, 1 ) === "#" ){
                hex = hex.slice( 1 );
            }

            var r   = parseInt( hex.substr(0,2), 16 ),
                g   = parseInt( hex.substr(2,2), 16 ),
                b   = parseInt( hex.substr(4,2), 16 ),
                yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

            return yiq >= 128;
        };

        Ui.adjustContrast = function( toDark ){
            if( toDark ){
                $( "body" ).animate({
                    "backgroundColor": "#4F5A64"
                }, 1000);
            }
            else{
                $( "body" ).animate({
                    "backgroundColor": "#DDDFDF"
                }, 1000);
            }
        };

        Ui.bindVisuals = function(){
            $( "nav i" ).qtip({
                content: {
                    text: "Moar please."
                },
                style: {
                    classes: "qtip-dark qtip-rounded qtip-shadow"
                },
                position: {
                    my: "left center",
                    at: "right center",
                    adjust: {
                        x: 25,
                        y: 10
                    }
                }
            });
        };

        return Ui;
    }
)
