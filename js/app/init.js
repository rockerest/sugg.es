define(
    ["jquery", "ui", "dom"],
    function( $, Ui, Dom ){
        var Init = {};

        Init.startApp = function(){
            Dom.bindEventHandlers( Ui.scaleImage, Ui.newSuggestion);
            Dom.captureState();
            Ui.bindVisuals();
            $(function(){
                Ui.newSuggestion();
            });
        };

        return Init;
    }
);
