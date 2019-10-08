$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?post_id=23)
    var url = window.location.search;
    var attractionId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
  
    // If we have this section in our url, we pull out the post id from the url
    // In localhost:8080/cms?post_id=1, postId is 1
    // if (url.indexOf("?post_id=") !== -1) {
    //   postId = url.split("=")[1];
    //   getPostData(postId);
    // }
  
    // Getting jQuery references to the post body, title, form, and category select
    var bodyInput = $("#body");
    var titleInput = $("#title");
    var reviewsForm = $("#reviews");
    var postCategorySelect = $("#category");
    // Giving the postCategorySelect a default value
    postCategorySelect.val("Read a Review");
    // Adding an event listener for when the form is submitted
    $(reviewsForm).on("submit", function(event) {
      event.preventDefault();
      // Wont submit the post if we are missing a body or a title
      if (!titleInput.val().trim() || !bodyInput.val().trim()) {
        return;
      }
      // Constructing a newPost object to hand to the database
      var newReview = {
        title: titleInput.val().trim(),
        body: bodyInput.val().trim(),
        category: postCategorySelect.val(),
        // attractionId: attractionId
      }; 

      submitReview(newReview);
      console.log(newReview);

    })
  
  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
    //   if (updating) {
    //     newPost.id = postId;
    //     updatePost(newPost);
    //   }
    //   else {
    //     submitPost(newPost);
    //   }
    // });
  
    // Submits a new post and brings user to blog page upon completion
    function submitReview(review) {
      $.post("/api/reviews/", review, function() {
        window.location.href = "/review";
      });
    }
  
    // Gets post data for a post if we're editing
    function getPostData(id) {
      $.get("/api/posts/" + id, function(data) {
        if (data) {
          // If this post exists, prefill our cms forms with its data
          titleInput.val(data.title);
          bodyInput.val(data.body);
          postCategorySelect.val(data.category);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post
      })
        .then(function() {
          window.location.href = "/blog";
        });
    }
  });
  