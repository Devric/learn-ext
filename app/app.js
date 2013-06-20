(function(){ 

    var log = function(m) {
        console.log(m);
    }

    Ext.onReady(function() { 

        // select all checkbox
        Ext.fly("selectAll").on("click", function(e, el){
            var els = Ext.query("input[name=articleId]");

            for ( var i=0; i < els.length; i++ ) {
                els[i].checked=el.checked
            }
        });

        // selects
        log(Ext.query("table"))

        log(Ext.query("table th"))

        log(Ext.query("#one"))

        log(Ext.query("input[type=checkbox]"))

        /**
         * Pseudo
         */
        log(Ext.query("td:first-child"))

        log(Ext.query("td:nth(2)"))

        log(Ext.query("tr:last"))

        // contains innerhtml of two
        log(Ext.query("td:contains(three)"))

        log(Ext.query("div:not(one)"))

        log(Ext.query("tr:has(input)"))

        //log(Ext.query("tr:range(1-2)"))
        
        // get single element

        // get() gets element and stores its data into the cache
        Ext.get('one').dom.innerHTML = '<br /> ext content lah, i added this line with Ext.get()'
        
        // fly gets element without storing data into cache
        Ext.fly('two').dom.innerHTML = '<br /> ext content lah, i flyied this content lah'

    });
})()
