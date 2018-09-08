//add.html
$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newTable = {
      name: $("#reserve_name").val().trim(),
      phone: $("#reserve_phone").val().trim(),
      email: $("#reserve_email").val().trim(),
      id: $("#reserve_id").val().trim()
    };
    // Question: What does this code do??
    $.post("/api/restaurant", newTable)
      .then(function(data) {
        console.log(data);
        alert("Adding table...");
      });
  });

  //all.html
  $.get("/api/restaurant", function (data) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      var listGroupItem = $("<li class='list-group-item'>");
      listGroupItem.append($("<h2>").text("ID: " + data[i].id));
      listGroupItem.append($("<h2>").text("Name: " + data[i].name));
      listGroupItem.append($("<h3>").text("Email: " + data[i].email));
      listGroupItem.append($("<h3>").text("Phone: " + data[i].phone));
      $("#tableSelection").append(listGroupItem);
    }
  });