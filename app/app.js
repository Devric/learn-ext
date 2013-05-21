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



/**
 *
 * Learn
 * - how to use addBehaviors to add interaction delegations to dom objects
 * - '#one, #two a, #three div@click' : function(evt,el) {  }
 */

var cal=function() { 
    switch(op) 
    {
            case "-" :
                first=parseFloat(first) - parseFloat(second);
                break;
            case "*" :
                first=parseFloat(first) * parseFloat(second);
                break;
            case "/" :
                second=parseFloat(second);
                if (second !=0)
                        first=parseFloat(first) / second
                break;
            default:
                first=parseFloat(first) + parseFloat(second);
                break;
    }

    op="";
    if( arguments.length>0 ) op=arguments[0];
    second="";
    result.value=first;
}

var first=""
 ,  second =""
 , op =""
 , result = Ext.getDom('result')
;

Ext.addBehaviors({ 
    "input.number@click" : function(e,el) {
        if ( Ext.isEmpty(op) ) 
        {
            if (!(el.value==0 && first==0))
            {
                first = first+el.value;
                result.value=first;
            }
            else
            {
                if (!(el.value==0 && second==0)) 
                {
                     second=second+el.value;
                     result.value=second;
                }
            }
        }
    }

  , "input.cmd@click" : function(e,el) {
        if (el.value=='C')
        {
            if (Ext.isEmpty(op))
            {
                first="";
            }
            else
            {
                second="";
            }
            result.value="0";
        }
        else
        {
            cal();
        }
    }

  , "input.sign@click" : function(e, el) {
        if (el.value=".")
        {
            if (Ext.isEmpty(op))
            {
                if(first.toString().indexOf(".")==-1)
                {
                    first=first+".";
                    result.value=first;
                }
                else
                {
                    if (second.toString().indexOf(".")==-1)
                    {
                        second=second+".";
                        result.value=second;
                    }
                }
            }
            else
            {
                if (Ext.isEmpty(op))
                {
                    first=first*-1;
                    result.value=first;
                }
                else
                {
                    second=second*-1;
                    result.value=second;
                }
            }
        }
    }

  , "input.op@click" : function(e, el) {
        if (Ext.isEmpty(op) || Ext.isEmpty(second))
        {
            op=el.value;
            result.value="0";
        }
        else
        {
            cal(el.value);
        }
    }

});
