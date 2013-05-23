/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

/*
Ext.application({
    name: 'do',

    views: [
        'Main',
        'Viewport'
    ],

    controllers: [
        'Main'
    ],

    autoCreateViewport: true
});
*/

Ext.require('Ext.util.KeyNav');

Ext.onReady(function() { 
    var els = Ext.select('.small')
        , big = Ext.getDom('large')
        , index=0
    ;

    var fn = function fn(v) {
        var ell = els
            , text = ell.item(index).dom.innerHTML
        ;

        ell.item(index).removeCls('select');

        index=index+v;
        if (index<0)
        {
            index=2;
        }
        else if (index>2)
        {
            index=0
        };

        var el=ell.item(index);
        el.radioCls("select");

        big.innerHTML = text;
    }

    Ext.create("Ext.util.KeyNav", "div1", {
       up: function() {
            fn(-1)
       }
     , down: function(){
            fn(1)
       }
     , scope: this
    });
});
