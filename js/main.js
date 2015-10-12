//IIFE

// // (function () {


//     etsy.results.forEach( function (item) {
//         console.log(item);
//     });





// }());
(function () {

  var templateString = $("#itemTemplate").text();

  var renderTemplate = _.template(templateString);

  _.each(etsy.results, function(item) {

     console.log(item);

     var freshHTML = renderTemplate(item);
     $('.forsaleimages').append(freshHTML);
  });

}());