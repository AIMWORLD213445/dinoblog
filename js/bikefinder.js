BikeFinder = function(){
}

BikeFinder.prototype.getStolenBikes = function(lat, lng, displayFunction) {
  $.get('https://bikeindex.org/api/v2/bikes_search/stolen?page=1&per_page=10&proximity='+ lat + '%2C' + lng + '&proximity_square=50&access_token=api%20key').then(function(response) {
    displayFunction(response.bikes);
  }).fail(function(error) {
    console.log(error);
    $('.showStolenBikes').text(error);
  });
}

exports.bikeFinderModule = BikeFinder;
