var wms_layers = [];

var lyr_lycee_elargi_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_elargi_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_elargi_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_parcour_1 = new ol.format.GeoJSON();
var features_parcour_1 = format_parcour_1.readFeatures(json_parcour_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcour_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcour_1.addFeatures(features_parcour_1);
var lyr_parcour_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcour_1, 
                style: style_parcour_1,
                interactive: true,
                title: '<img src="styles/legend/parcour_1.png" /> parcour'
            });
var format_oiseaux_2 = new ol.format.GeoJSON();
var features_oiseaux_2 = format_oiseaux_2.readFeatures(json_oiseaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oiseaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oiseaux_2.addFeatures(features_oiseaux_2);
var lyr_oiseaux_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oiseaux_2, 
                style: style_oiseaux_2,
                interactive: true,
                title: '<img src="styles/legend/oiseaux_2.png" /> oiseaux'
            });

lyr_lycee_elargi_georef_0.setVisible(true);lyr_parcour_1.setVisible(true);lyr_oiseaux_2.setVisible(true);
var layersList = [lyr_lycee_elargi_georef_0,lyr_parcour_1,lyr_oiseaux_2];
lyr_parcour_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_oiseaux_2.set('fieldAliases', {'OISEAU': 'OISEAU', 'nombre': 'nombre', });
lyr_parcour_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_oiseaux_2.set('fieldImages', {'OISEAU': 'TextEdit', 'nombre': 'TextEdit', });
lyr_parcour_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_oiseaux_2.set('fieldLabels', {'OISEAU': 'inline label', 'nombre': 'inline label', });
lyr_oiseaux_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});