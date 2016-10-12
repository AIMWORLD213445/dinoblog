var googleMapsKey = require('./../.env').googleMapsApiKey;

LatLong = function(){
}

LatLong.prototype.getLatLong = function(address, displayFunction) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + googleMapsKey).then(function(response) {
    console.log(response);
    var latitude = response.results[0].geometry.location.lat;
    var longitude = response.results[0].geometry.location.lng;
    displayFunction(latitude, longitude);
  }).fail(function(error) {
    console.log(error);
    $('.showLatLong').text(error);
  });
}

exports.latLongModule = LatLong;
