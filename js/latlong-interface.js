var latLong = require('./../js/latlong.js').latLongModule;

var displayLatLong = function(lat, lng) {
  $('#lat-data').text(lat);
  $('#lng-data').text(lng);
}

$(document).ready(function() {
  var mylatLong = new latLong();
  $('#latlong-generator').submit(function(event) {
    event.preventDefault();
    var address = $('#address').val();
    mylatLong.getLatLong(address, displayLatLong);
  });
});
