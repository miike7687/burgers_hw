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
    $.ajax("/api/burgers/status/" + id, {
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

  $(".modify-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $("[name=id]").val().trim();
    console.log(id);
    var newIngredients = $(".modify-form [name=newburger]").val().trim();
    console.log(newIngredients);

    var updatedBurger = {
      ingredients: newIngredients,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/ingredients/" + id, {
      type: "PUT",
      data: updatedBurger,
    }).then(function () {
      // console.log("updated ingredients ", ingredients);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
