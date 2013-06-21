Ext.onReady(function() { 
    // dom accordion, not app accordion

    var el = Ext.get("MyAccodion")
        , els=Ext.query("#MyAccodion>div{display!=none}")
    ;

    for ( var i = 0 ; i < els.length; i++ ) {
        els[i].setAttribute("style","display:none");
    }

    el.on('click', function(e, el ){

        var hideEl=Ext.query("#MyAccodion>div{display!=none}")

        var showEl=Ext.query("+div", el);

        if (showEl) {
            showEl[0].setAttribute("style","");
        }

        if (hideEl) {
            hideEl[0].setAttribute("style","display:none");
        }
        
    }, this);
});
