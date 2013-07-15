Ext.require('Ext.Panel');

Ext.onReady(function() { 
    var panel = Ext.create("Ext.Panel", {
          renderTo: Ext.getBody()
        , layout: "auto"
        , height: 500
        , width: 400
        , autoLoad : {
            url: "Component.js"
            , renderer: "component"
          }
        , renderer: "component"
        , tbar: [
            {text: "add component", scope: panel, handler: function(){
                panel.loader.load({
                    url: "Component1.js"
                    , renderer: "component"
                })
            }}
            , {text: "removeALL", scope: panel, handler: function(){
                panel.loader.load({
                    url:"Component1.js"
                    , renderer:"component"
                    , removeAll:true
                })
            }}
        ]
    });
});
