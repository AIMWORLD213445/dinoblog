var Dinos = require('./../js/dinos.js').dinosModule;

var displayDinoBlogEntry = function(blogEntryContent) {
  $('.showDinoBlog').html(blogEntryContent);
}

$(document).ready(function() {
  var myDinos = new Dinos();
  $('#generateBlog').click(function() {
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    myDinos.getDinosText(paragraphs, words, displayDinoBlogEntry);
  });
});
