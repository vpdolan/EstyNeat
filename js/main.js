//IIFE
// }());
(function () {

  var templateString = $("#itemtemplate").text();
  var templateFunction = _.template(templateString);

  _.each(etsy.results, function(item) {

     console.log(item);

  var itemHTML = templateFunction(item);
   $('.forsaleimages').append(itemHTML);
  });

  $('.item').mouseenter(function(event) {
    var btn = $(this);
    btn.find('.item-icons').addClass('.show').css("display", "inline")

  });

  $('.item').mouseleave(function(event) {
    var btn = $(this);
    btn.find('.item-icons').addClass('.show').css("display", "none");

  });
 

}());