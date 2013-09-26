require.config({
    paths:{
        "lib"           : "../lib/",
        "dataSrc"       : "../../data/",

        "jquery"        : "https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
        "jqlteie9"      : "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",

        "jquery-color"  : "../lib/jquery.color",
        "qtip"          : "https://cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.min",
        "imagesloaded"  : "../lib/imagesloaded",

        "text"          : "../lib/text",
        "json"          : "../lib/json"
    },
    shim:{
        "jquery-color":{
            deps: ["jquery"]
        },
        "qtip":{
            deps: ["jquery"]
        }
    }
});

if( !('__proto__' in {}) ){
    require.config({
        map: {
            "*": {
                "jquery": "jqlteie9"
            }
        }
    });
}

require(
    ["init"],
    function( Init ){
        Init.startApp();
    }
);
