
// When the page loads, grab all of our reviews
$.get("/api/reviews", function(data) {
  console.log('/api/reviews triggered')
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("review");
  
        row.append("<p>" + data[i].username + " reviewed: </p>");
        row.append("<p>" + data[i].review + "</p>");
        row.append("<p>" + data[i].AttractionId + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#review-area").prepend(row);
  
      }
  
    }
  
  });

// Adding event listener for when user clicks the add-bttn
$("#review-submit").on("click", function(event) {
  event.preventDefault();

  // set variables

    var username = $("#username").val().trim();
    var review = $("#review-box").val().trim();
    var attraction = $("#attraction").val().trim();

    // Setup my newReviewData object
  var newReviewData = {
    username: username,
    review: review,
    AttractionId: attraction
  };

  console.log(newReviewData);


  // Send an AJAX POST-request with jQuery
  $.post("/api/reviews", newReviewData, function() {
    console.log('this post route works')
  })
  
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("review");

      row.append("<p>" + username + " reviewed: </p>");
      row.append("<p>" + review + "</p>");
      row.append("<p>" + attraction + "</p>");
      row.append("<p>At " + moment(newReviewData.created_at).format("h:mma on dddd") + "</p>");

      $("#review-area").prepend(row);

    });
  

    // Empty each input box by replacing the value with an empy string
    $("#username").val("");
    $("#review-box").val("");
    $("#attraction").val("");

});