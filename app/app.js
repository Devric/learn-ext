Ext.onReady(function() { 
    Ext.fly("selectAll").on("click", function(e, el){
        var els = Ext.query("input[name=articleId]");

        for ( var i=0; i < els.length; i++ ) {
            els[i].checked=el.checked
        }
    });
});
