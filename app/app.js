// PAGE 308, using data model, to request response and append it to the container


Ext.require('Ext.Panel');

Ext.onReady(function() { 
    Ext.define('Test', {
        extend: 'Ext.data.Model'
        , fields: ['id', 'TestName']
        , proxy: {
            type     : 'rest'
            , format : 'php'
            , url    : 'test/response'
        }
    })

    var test = "";

    var panel = Ext.create("Ext.Panel", {
          renderTo: Ext.getBody()
        , layout: "auto"
        , height: 500
        , width: 400
        , tbar: [
            {text: "read", scope: panel, handler: function(){
                Test.load(1, {
                    success: function(d,o) {
                        test = d;
                        panel.update(o.response.responseText)
                    }
                });
            }}
            , {text: "create", scope: panel, handler: function(){
                var t=Ext.ModelManager.create({id:"", TextName:"new"}, "Test");
                t.save({
                    success: function(d,o) {
                        panel.update(o.response.responseText);
                    }
                });
            }}
            , {text: "update", scope: panel, handler: function(){
                Test.save({
                    success: function(d,o) {
                        panel.update(o.response.responseText);
                    }
                });
            }}
        ]
    });
});
