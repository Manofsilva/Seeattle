


// Adding event listener for when user clicks the add-bttn
$("#review-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newReview object
  var newReview = {
    username: $("#username").val().trim(),
    review: $("#review-box").val().trim(),
    attraction: $("#attraction").val().trim()
  };
  
  console.log(newReview);

  // Send an AJAX POST-request with jQuery
  $.post("/api/reviews", newReview)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("review");

      row.append("<p>" + newReview.username + " reviewed: </p>");
      row.append("<p>" + newReview.review + "</p>");
      row.append("<p>" + newReview.attraction + "</p>");
      row.append("<p>At " + moment(newReview.created_at).format("h:mma on dddd") + "</p>");

      $("#review-area").prepend(row);

    });

    // Empty each input box by replacing the value with an empy string
    $("#username").val("");
    $("#review-box").val("");
    $("#attraction").val("");

});

// When the page loads, grab all of our reviews
$.get("/api/reviews", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("review");

      row.append("<p>" + data[i].username + " reviewed.. </p>");
      row.append("<p>" + data[i].review + "</p>");
      row.append("<p>" + data[i].attraction + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#review-area").prepend(row);

    }

  }

});