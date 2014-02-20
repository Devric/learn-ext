Ext.onReady(function() { 

    Ext.apply(Ext.data.SortTypes, { 
        asCountry: function(v) {
            return v.country
        }
    });

    Ext.data.Types.YUAN = {
        convert: function(v, data) {
            v = ( v !== undefined && v !== null v !== '' ) ? parseFloat(v) : 0;
            return Ext.String.format("${0}", Ext.Number.toFixef(v,2));
        },
        SortTypes: function(v) {
            return parseFloat(v.replace(/$/,""),10);
        }
    }

    var data = [
          {name: 'one', nationality: { country : 'china', img: '' }, salary : "USD10000" }
        , {name: 'two', nationality: { country : 'china', img: '' }, salary : "USD60000" }
        , {name: 'three', nationality: { country : 'australia', img: '' }, salary : "USD90000" }
        , {name: 'four', nationality: { country : 'japan', img: '' }, salary : "USD210000" }
        , {name: 'five', nationality: { country : 'usa', img: '' }, salary : "USD100000" }
    ]


    var store1 = Ext.create('Ext.data.Store', function(){
        fields: [
              {name: 'name', type: 'string'}
            , {name: 'nationality', sortTypes: 'asCountry'}
            , {name: 'salary', type: 'yuan'}
        ],
        data : data
    })
    
});
