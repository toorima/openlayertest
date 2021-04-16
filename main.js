import "ol/ol.css";
import $ from "jquery";
//import Draw, { createBox } from "ol/interaction/Draw";
import Map from "ol/Map";
import View from "ol/View";
import GeoJSON from "ol/format/GeoJSON";
//import { Fill, Stroke, Style, Text } from "ol/style";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";

var OSMlayer = new TileLayer({
  // OpenStreetMap tile
  source: new OSM()
});

var ShapeLayerJSON = JSON.parse($("#shapebox").val());

var BoxLayerJSON = JSON.parse($("#boundingbox").val());
/*
var PointCircleLayer = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "EPSG:3857"
    }
  },
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [4e6, -2e6],
          [8e6, 2e6]
        ]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [4e6, 2e6],
          [8e6, -2e6]
        ]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-5e6, -1e6],
            [-4e6, 1e6],
            [-3e6, -1e6]
          ]
        ]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        coordinates: [
          [
            [-1e6, -7.5e5],
            [-1e6, 7.5e5]
          ],
          [
            [1e6, -7.5e5],
            [1e6, 7.5e5]
          ],
          [
            [-7.5e5, -1e6],
            [7.5e5, -1e6]
          ],
          [
            [-7.5e5, 1e6],
            [7.5e5, 1e6]
          ]
        ]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-5e6, 6e6],
              [-5e6, 8e6],
              [-3e6, 8e6],
              [-3e6, 6e6]
            ]
          ],
          [
            [
              [-2e6, 6e6],
              [-2e6, 8e6],
              [0, 8e6],
              [0, 6e6]
            ]
          ],
          [
            [
              [1e6, 6e6],
              [1e6, 8e6],
              [3e6, 8e6],
              [3e6, 6e6]
            ]
          ]
        ]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "GeometryCollection",
        geometries: [
          {
            type: "LineString",
            coordinates: [
              [-5e6, -5e6],
              [0, -5e6]
            ]
          },
          {
            type: "Point",
            coordinates: [4e6, -5e6]
          },
          {
            type: "Polygon",
            coordinates: [
              [
                [1e6, -6e6],
                [2e6, -4e6],
                [3e6, -6e6]
              ]
            ]
          }
        ]
      }
    }
  ]
};
*/
var ShapeLayerSource = new VectorSource({
  features: new GeoJSON().readFeatures(ShapeLayerJSON, {
    featureProjection: "EPSG:3857"
  })
});

var BoxLayerSource = new VectorSource({
  features: new GeoJSON().readFeatures(BoxLayerJSON, {
    featureProjection: "EPSG:4326"
  })
});

//var source = new VectorSource({ wrapX: false });

var ShapeLayer = new VectorLayer({
  source: ShapeLayerSource
});

var BoxLayer = new VectorLayer({
  source: BoxLayerSource
});

var map = new Map({
  layers: [OSMlayer, ShapeLayer, BoxLayer /*, PointCircleLayer*/],
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 1
  })
});

/*
function drawShape() {
  ShapeLayerSource.refresh();
}
function draw_box() {}
function draw_point() {}
*/
/*
var typeSelect = document.getElementById("type");

var draw; // global so we can remove it later
function addInteraction() {
  var value = typeSelect.value;
  if (value !== "None") {
    var geometryFunction;
    if (value === "Box") {
      value = "Circle";
      geometryFunction = createBox();
    }

    draw = new Draw({
      source: source,
      type: value,
      geometryFunction: geometryFunction
    });
    map.addInteraction(draw);
  }
}
*/
/**
 * Handle change event.
 */
/*
typeSelect.onchange = function () {
  map.removeInteraction(draw);
  addInteraction();
};

document.getElementById("undo").addEventListener("click", function () {
  draw.removeLastPoint();
});

addInteraction();

var featureOverlay = new VectorLayer({
  source: new VectorSource(),
  map: map,
  style: function (feature) {
    highlightStyle.getText().setText(feature.get("name"));
    return highlightStyle;
  }
});

var highlightStyle = new Style({
  stroke: new Stroke({
    color: "#f00",
    width: 1
  }),
  fill: new Fill({
    color: "rgba(255,0,0,0.1)"
  }),
  text: new Text({
    font: "12px Calibri,sans-serif",
    fill: new Fill({
      color: "#000"
    }),
    stroke: new Stroke({
      color: "#f00",
      width: 3
    })
  })
});

var highlight;
var displayFeatureInfo = function (pixel) {
  var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
    return feature;
  });

  var info = document.getElementById("info");
  if (feature) {
    info.innerHTML =
      feature.getGeometry().getType() +
      ":" +
      feature
        .getGeometry()
        .transform("EPSG:3857", "EPSG:4326")
        .getCoordinates();
  } else {
    info.innerHTML = "&nbsp;";
  }

  if (feature !== highlight) {
    if (highlight) {
      featureOverlay.getSource().removeFeature(highlight);
    }
    if (feature) {
      featureOverlay.getSource().addFeature(feature);
    }
    highlight = feature;
  }
};

map.on("pointermove", function (evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel);
});

map.on("click", function (evt) {
  displayFeatureInfo(evt.pixel);
});

*/
