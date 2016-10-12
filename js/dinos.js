Dinos = function(){
}

Dinos.prototype.getDinosText = function(paragraphs, words, displayFunction) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + words).then(function(response) {
    displayFunction(response);
  }).fail(function(error) {
    $('.showDinoBlog').text(error.responseJSON.message);
  });
}

exports.dinosModule = Dinos;
