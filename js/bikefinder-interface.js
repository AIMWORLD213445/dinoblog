var bikeFinder = require('./../js/bikefinder.js').bikeFinderModule;

var displayStolenBikes = function(stolenBikes) {
  $('#stolen-bikes').empty();
  for (var i = 0; i < stolenBikes.length; i++) {
    var title = stolenBikes[i].title;
    var serial = stolenBikes[i].serial;
    var color = stolenBikes[i].frame_colors.join(', ');
    var date_stolen = moment.unix(stolenBikes[i].date_stolen).format("MM/DD/YYYY");
    $('#stolen-bikes').append('<li class="list-group-item">'+ title +' (' + color + ') Serial Number: ' + serial + ' Date Stolen: ' + date_stolen + '</li>');
  }
}

$(document).ready(function() {

  var mybikeFinder = new BikeFinder();

  $('#find-stolen-bikes').click(function() {
    var lat = $('#lat-data').text();
    var lng = $('#lng-data').text();
    mybikeFinder.getStolenBikes(lat, lng, displayStolenBikes);
  });

});
