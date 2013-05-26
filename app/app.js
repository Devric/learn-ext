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

Ext.require([ "app.HKStock" ])

Ext.onReady(function() { 

    Ext.Loader.setConfig({ enabled: true });

    Ext.create("app.HKStock", {
        code: ["00941", "00762", "00728", "01288", "01398"]
    });

    var input   = Ext.getDom("input1")
      , div     = Ext.getDom("div1")
      , button  = Ext.getDom("stopButton")
    ;

    var task = {
        run: function(count) {
            var v = parseInt(input.value)
                , d = v-count
            ;

            if (v>count)
            {
                div.innerHTML = v-count;
            }
            else
            {
                input.removeAttribute("readonly");
                div.style.display="none";
                button.value="start";
                Ext.Msg.alert({title:"Yoyo bar",msg:"Time up!"});
            }
        }

        , interval : 1000
        , duration : 1000
    }

    Ext.EventManager.on("input1", "keypress", function(e,el){
        var key= e.getKey();
        if (key< e.ZERO || key> e.NINE) e.stopEvent();
    });

    Ext.EventManager.on("stopButton", "click", function(e,el){
        var t=task;
        if (el.value=="stop")
        {
            el.value="start";
            input.removeAttribute("readonly");
            div.style.display="none";
            Ext.TaskManager.stop(task);
        }
        else
        {
            var v=parseInt(input.value);
            if(v>0)
            {
                t.duration=v*1000;
                input.readOnly="true";
                div.innerHTML=v;
                div.style.display="block";
                el.value="stop";
                Ext.TaskManager.start(task);
            }
        }
    });
});
