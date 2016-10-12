var googleMapsKey = require('./../.env').googleMapsApiKey;

LatLong = function(){
}

LatLong.prototype.getLatLong = function(address, displayFunction) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + googleMapsKey).then(function(response) {
    console.log(response);
    var latitude = Math.round(response.results[0].geometry.location.lat * 1000) / 1000;
    var longitude = Math.round(response.results[0].geometry.location.lng * 1000) / 1000;
    displayFunction(latitude, longitude);
  }).fail(function(error) {
    console.log(error);
    $('.showLatLong').text(error);
  });
}

exports.latLongModule = LatLong;
