var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Niteroi_1 = new ol.format.GeoJSON();
var features_Niteroi_1 = format_Niteroi_1.readFeatures(json_Niteroi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niteroi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niteroi_1.addFeatures(features_Niteroi_1);
var lyr_Niteroi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niteroi_1, 
                style: style_Niteroi_1,
                popuplayertitle: 'Niteroi',
                interactive: true,
                title: '<img src="styles/legend/Niteroi_1.png" /> Niteroi'
            });
var format_Movimento_Massa_Classes_2 = new ol.format.GeoJSON();
var features_Movimento_Massa_Classes_2 = format_Movimento_Massa_Classes_2.readFeatures(json_Movimento_Massa_Classes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Movimento_Massa_Classes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Movimento_Massa_Classes_2.addFeatures(features_Movimento_Massa_Classes_2);
var lyr_Movimento_Massa_Classes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Movimento_Massa_Classes_2, 
                style: style_Movimento_Massa_Classes_2,
                popuplayertitle: 'Movimento_Massa_Classes',
                interactive: false,
    title: 'Movimento_Massa_Classes<br />\
    <img src="styles/legend/Movimento_Massa_Classes_2_0.png" /> Alta<br />\
    <img src="styles/legend/Movimento_Massa_Classes_2_1.png" /> Média<br />' });
var format_Inundacao_Classes_3 = new ol.format.GeoJSON();
var features_Inundacao_Classes_3 = format_Inundacao_Classes_3.readFeatures(json_Inundacao_Classes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundacao_Classes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundacao_Classes_3.addFeatures(features_Inundacao_Classes_3);
var lyr_Inundacao_Classes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundacao_Classes_3, 
                style: style_Inundacao_Classes_3,
                popuplayertitle: 'Inundacao_Classes',
                interactive: false,
    title: 'Inundacao_Classes<br />\
    <img src="styles/legend/Inundacao_Classes_3_0.png" /> Alta<br />\
    <img src="styles/legend/Inundacao_Classes_3_1.png" /> Média<br />' });
var group_QGIS2WEB = new ol.layer.Group({
                                layers: [lyr_Niteroi_1,lyr_Movimento_Massa_Classes_2,lyr_Inundacao_Classes_3,],
                                fold: 'open',
                                title: 'QGIS2WEB'});

lyr_GoogleMaps_0.setVisible(true);lyr_Niteroi_1.setVisible(true);lyr_Movimento_Massa_Classes_2.setVisible(false);lyr_Inundacao_Classes_3.setVisible(false);
var layersList = [lyr_GoogleMaps_0,group_QGIS2WEB];
lyr_Niteroi_1.set('fieldAliases', {'nome': 'nome', 'geometriaa': 'geometriaa', 'geocodigo': 'geocodigo', 'anoderefer': 'anoderefer', 'Inund_alta': 'Inund_alta', 'Inund_med': 'Inund_med', 'Mov_alta': 'Mov_alta', 'Mov_media': 'Mov_media', });
lyr_Movimento_Massa_Classes_2.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'Area_km2': 'Area_km2', });
lyr_Inundacao_Classes_3.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'Area_km2': 'Area_km2', });
lyr_Niteroi_1.set('fieldImages', {'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'geocodigo': 'TextEdit', 'anoderefer': 'Range', 'Inund_alta': 'TextEdit', 'Inund_med': 'TextEdit', 'Mov_alta': 'TextEdit', 'Mov_media': 'TextEdit', });
lyr_Movimento_Massa_Classes_2.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'Area_km2': 'TextEdit', });
lyr_Inundacao_Classes_3.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'Area_km2': 'TextEdit', });
lyr_Niteroi_1.set('fieldLabels', {'nome': 'inline label - always visible', 'geometriaa': 'inline label - always visible', 'geocodigo': 'inline label - always visible', 'anoderefer': 'inline label - always visible', 'Inund_alta': 'inline label - always visible', 'Inund_med': 'inline label - always visible', 'Mov_alta': 'inline label - always visible', 'Mov_media': 'inline label - always visible', });
lyr_Movimento_Massa_Classes_2.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'Area_km2': 'no label', });
lyr_Inundacao_Classes_3.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'Area_km2': 'no label', });
lyr_Inundacao_Classes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});