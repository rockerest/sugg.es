define(
    ["json!dataSrc/suggestions.json"],
    function( suggestions ){
        var Data = {};

        Data.getRandomSuggestion = function(){
            var random = Math.floor( Math.random() * suggestions.length );

            return suggestions[random];
        };

        return Data;
    }
)
