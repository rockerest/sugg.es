define(
    ["jquery", "ui", "dom"],
    function( $, Ui, Dom ){
        var Init = {};

        Init.startApp = function(){
            Dom.bindEventHandlers();
            Dom.captureState();
            Ui.bindVisuals();
            $(function(){
                Ui.newSuggestion();
            });
        };

        return Init;
    }
);
