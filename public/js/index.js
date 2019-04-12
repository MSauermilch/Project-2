var connection = require("../config/config.js");

$(document).ready(function() {

  var $calendar = $("#calendar");

  function objToSql(ob) {
    var arr =[]
      for(var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
          if(typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          arr.push(key + "=" + value)
        }
      }
      return arr.toString();
  }

  var Calendar = function(tableInput, cb) {
    var queryString = "SELECT * FROM track";
    connection.query(queryString, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    })
  }

  var update = function(table, objColVals, conditon, cb) {
    var queryString = "UPDATE" + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    QueryString += conditon;

    console.log(queryString);
  }

});



// Get references to page elements
//var $exampleText = $("#example-text");
//var $exampleDescription = $("#example-description");
//var $submitBtn = $("#submit");


// The API object contains methods for each kind of request we'll make
var API = {
  saveCalendar: function(data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/example",
      data: JSON.stringify(data)
    });
  },
  getCalendar: function(data) {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
