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

Ext.require('Ext.util.KeyMap');

/**
 * Hit enter, again and again, see it jumps to the next input box
 */
Ext.onReady(function() { 

    var els = Ext.query('#form1 input, textarea');
    Ext.create("Ext.util.KeyMap", "form1", {
        key:13
      , fn:function(key,e) {

            var el= e.target
              , target=els
              , ln=target.length
              , i = 0
            ;

            // find the current and next input/text field
            // focus depend on if it is the last field
            for ( ; i<ln;i++ ) {

                if (target[i]==el)
                {
                    if (i+1==ln)
                    {
                        target[0].focus();
                    }
                    else
                    {
                        target[i+1].focus();
                    }
                }
            }
        }

      , scope: Ext.getDom("form1")
    });

});
