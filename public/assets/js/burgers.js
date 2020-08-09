// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log("newDevoured = ", newDevoured);

    var newDevouredState = {
      devoured: !newDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevouredState);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
      ingredients: $("#cai").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // $(".modify-form").on("submit", function (event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   // Get the ID by finding an element with a "name" attribute equal to the string "id"
  //   var name = $("[name=burger]").val().trim();
  //   console.log(name);

  //   var updatedBurger = {
  //     ingredients: $(".modify-form [name=newburger]").val().trim(),
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/burgers/" + name, {
  //     type: "PUT",
  //     data: updatedBurger,
  //   }).then(function () {
  //     console.log("updated name ", name);
  //     // Reload the page to get the updated list
  //     location.reload();
  //   });
  // });
});
