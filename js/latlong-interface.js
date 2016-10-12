var latLong = require('./../js/latlong.js').latLongModule;

var displayLatLong = function(lat, lng) {
  $('#lat-data').text(lat);
  $('#lng-data').text(lng);
}

$(document).ready(function() {

  var mylatLong = new LatLong();

  $('#latlong-generator').submit(function(event) {
    event.preventDefault();
    var address = $('#address').val();
    $('#queried-location').text(address);
    mylatLong.getLatLong(address, displayLatLong);
  });

});
