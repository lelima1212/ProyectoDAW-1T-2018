// JavaScript source code
var mymap = L.map('mapid').setView([-2.147,-79.964],16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
jQuery.ui.autocomplete.prototype._resizeMenu = function () {
	var ul = this.menu.element;
	ul.outerWidth(this.element.outerWidth());
}
var marker = L.marker([-2.147,-79.964]);
mymap.options.minZoom=16;

$( function() {
    
	$.widget( "custom.catcomplete", $.ui.autocomplete, {
		
        _renderMenu: function( ul, items ) {
            var that = this,
                currentCategory = "";
            $.each( items, function( index, item ) {
                if ( item.category != currentCategory ) {
                    ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                    currentCategory = item.category;
                }
                that._renderItemData( ul, item );
            });
        }
    });
    var data = [
		{ 
			label: "15-A", 
			category: "FIEC",
			latitude:-2.144554,
			longitude:-79.967699
		},
		{	
			label: "15", 
			category: "FIEC",
			latitude:-2.145048,
			longitude:-79.966561
		},
		{ 
			label: "16-A", 
			category: "FIEC",
			latitude:-2.145788,
			longitude:-79.966781
		},
		{ 
			label: "16-B", 
			category: "FIEC",
			latitude:-2.145282,
			longitude:-79.967167
		},
		{ 
			label: "16-C", 
			category: "FIEC",
			latitude:-2.145062,
			longitude:-79.967173
		},
		{ 
			label: "24-A", 
			category: "FIEC",
			latitude:-2.145405,
			longitude:-79.965958
		},
		{ 
			label: "24-C", 
			category: "FIMCP",
			latitude:-2.145012,
			longitude:-79.965814
		},
		{ 
			label: "24-E", 
			category: "FIMCP",
			latitude:-2.144120, 
			longitude:-79.966283
		},
		{ 
			label: "18-A", 
			category: "FIMCP",
			latitude:-2.143987, 
			longitude:-79.965988
		},
		{ 
			label: "18-B", 
			category: "FIMCP",
			latitude:-2.144777, 
			longitude:-79.966362
		},
		{ 
			label: "18-C", 
			category: "FIMCP",
			latitude:-2.144413, 
			longitude:-79.966439
		},
		{ 
			label: "18-D", 
			category: "FIMCP",
			latitude:-2.143886, 
			longitude:-79.966420
		},
		{ 
			label: "18-E", 
			category: "FIMCP",
			latitude:-2.144572, 
			longitude:-79.966511
		},
		{ 
			label: "19-A", 
			category: "FICT",
			latitude:-2.145895, 
			longitude:-79.965719
		},
		{ 
			label: "19", 
			category: "FICT",
			latitude:-2.145514, 
			longitude:-79.965417
		},
		{ 
			label: "20-A", 
			category: "FICT",
			latitude:-2.145605, 
			longitude:-79.965085
		},
		{ 
			label: "20-B", 
			category: "FICT",
			latitude:-2.145548, 
			longitude:-79.964820
		},
		{ 
			label: "20-C", 
			category: "FICT",
			latitude:-2.145785, 
			longitude:-79.964913
		},
		{ 
			label: "20-D", 
			category: "FICT",
			latitude:-2.145925, 
			longitude:-79.965068
		},
		{ 
			label: "24-D", 
			category: "FICT",
			latitude:-2.145866, 
			longitude:-79.965478
		},
		{ 
			label: "30", 
			category: "FICT",
			latitude:-2.145292, 
			longitude:-79.964794
		},
		{ 
			label: "31-A", 
			category: "FCNM",
			latitude:-2.148417, 
			longitude:-79.967448
		},
		{ 
			label: "31-B", 
			category: "FCNM",
			latitude:-2.148569, 
			longitude:-79.967266
		},
		{ 
			label: "31-C", 
			category: "FCNM",
			latitude:-2.148754, 
			longitude:-79.967523
		},
		{ 
			label: "31-E", 
			category: "FCNM",
			latitude:-2.148706, 
			longitude:-79.967910
		},
		{ 
			label: "32-A", 
			category: "FCNM",
			latitude:-2.146833, 
			longitude:-79.966720
		},
		{ 
			label: "32-D", 
			category: "FCNM",
			latitude:-2.146085, 
			longitude:-79.967201
		},
		{ 
			label: "27-AB", 
			category: "FCNM",
			latitude:-2.146664, 
			longitude:-79.967848
		},
		{ 
			label: "32-B", 
			category: "FSCH",
			latitude:-2.147210, 
			longitude:-79.967155
		},
		{ 
			label: "32-C", 
			category: "FSCH",
			latitude:-2.147162, 
			longitude:-79.967812
		},
		{ 
			label: "32-E", 
			category: "FSCH",
			latitude:-2.148213, 
			longitude:-79.968659
		},
		{ 
			label: "26-A", 
			category: "FSCH",
			latitude:-2.147532, 
			longitude:-79.967910
		},
		{ 
			label: "CIB", 
			category: "Edificios Administrativos",
			latitude:-2.147485, 
			longitude:-79.966122
		},
		{ 
			label: "RECTORADO", 
			category: "Edificios Administrativos",
			latitude:-2.147525, 
			longitude:-79.964539
		},
		{ 
			label: "STA", 
			category: "Edificios Administrativos",
			latitude:-2.147850, 
			longitude:-79.964212
		},
		{ 
			label: "61", 
			category: "FIMCBOR",
			latitude:-2.146700, 
			longitude:-79.963293
		},
		{ 
			label: "62", 
			category: "FIMCBOR",
			latitude:-2.146122, 
			longitude:-79.962513
		},
		{ 
			label: "62-A", 
			category: "FIMCBOR",
			latitude:-2.146550, 
			longitude:-79.963042
		},
		{ 
			label: "63-A", 
			category: "FIMCBOR",
			latitude:-2.146801, 
			longitude:-79.962095
		},
		{ 
			label: "D-6", 
			category: "FIMCBOR",
			latitude:-2.147083, 
			longitude:-79.963419
		},
		{ 
			label: "22-A", 
			category: "EDCOM",
			latitude:-2.143688, 
			longitude:-79.962292
		},
		{ 
			label: "22-B", 
			category: "EDCOM",
			latitude:-2.143517, 
			longitude:-79.962143
		},
		{ 
			label: "CAIB ESPOL", 
			category: "EDCOM",
			latitude:-2.144060, 
			longitude:-79.962414
		},
		{ 
			label: "36", 
			category: "FCV",
			latitude:-2.151454, 
			longitude:-79.957308
		},
		{ 
			label: "36-A", 
			category: "FCV",
			latitude:-2.151421, 
			longitude:-79.956769
		},
		{ 
			label: "37", 
			category: "FCV",
			latitude:-2.151921, 
			longitude:-79.956782
		},
		{ 
			label: "39", 
			category: "FCV",
			latitude:-2.151394, 
			longitude:-79.955761
		},
		{ 
			label: "41", 
			category: "FCV",
			latitude:-2.152233, 
			longitude:-79.955805
		},
		{ 
			label: "42", 
			category: "FCV",
			latitude:-2.150388, 
			longitude:-79.957431
		},
		{ 
			label: "43-A", 
			category: "FCV",
			latitude:-2.150476, 
			longitude:-79.957909
		},
		{ 
			label: "45", 
			category: "FCV",
			latitude:-2.150685, 
			longitude:-79.957854
		},
		{ 
			label: "47", 
			category: "FCV",
			latitude:-2.151181, 
			longitude:-79.954278
		},
		{ 
			label: "55", 
			category: "FCV",
			latitude:-2.151186, 
			longitude:-79.955188
		},
		{ 
			label: "55-A", 
			category: "FCV",
			latitude:-2.151065, 
			longitude:-79.967699
		},
		{
			label: "Sweet & Coffe",
			category: "Comedores",
			latitude:-2.146110, 
			longitude:-79.966829
		},
		{
			label: "Comedor FSCH",
			category: "Comedores",
			latitude:-2.147444, 
			longitude:-79.967315
		},
		{
			label: "Celex",
			category: "Comedores",
			latitude:-2.148446, 
			longitude:-79.967912
		},
		{
			label: "Coca Cola",
			category: "Comedores",
			latitude:-2.145067, 
			longitude:-79.966312
		},
		{
			label: "Comedor Mecanica",
			category: "Comedores",
			latitude:-2.144804, 
			longitude:-79.966194
		},
		{
			label: "Patacones",
			category: "Comedores",
			latitude:-2.145736, 
			longitude:-79.965129
		},
		{
			label: "Comedor FIMCBOR",
			category: "Comedores",
			latitude:-2.146476, 
			longitude:-79.963179
		}
    ]; 
    $( "#tags1" ).catcomplete({
		delay: 0,
		source: data,
		select: function (event, ui) {
			marker.setLatLng([ui.item.latitude,ui.item.longitude]);
			marker.addTo(mymap);
			marker.bindPopup(ui.item.label).openPopup();
			/*map.setView([[ui.item.latitude+0.0011,ui.item.longitude-0.0015],[ui.item.latitude-0.0011,ui.item.longitude+0.0015]]);*/
			mymap.setView(marker.getLatLng(),18.25);
		}
    });
	/*$( "#tags2" ).catcomplete({
		delay: 0,
		source: data,
		select: function (event, ui) {
			
			marker.setLatLng([ui.item.latitude,ui.item.longitude]);
			marker.addTo(mymap);
			marker.bindPopup(ui.item.label).openPopup();
			mymap.setView(marker.getLatLng(),18.25);
		}
    });*/
  } );