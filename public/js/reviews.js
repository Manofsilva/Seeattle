


// Adding event listener for when user clicks the add-bttn
$("#review-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newReview object
  var newReview = {
    username: $("#username").val().trim(),
    review: $("#review-box").val().trim()
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
      row.append("<p>At " + moment(newReview.created_at).format("h:mma on dddd") + "</p>");

      $("#review-area").prepend(row);

    });

    // Empty each input box by replacing the value with an empy string
    $("#username").val("");
    $("#review-box").val("");

});
