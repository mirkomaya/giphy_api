$(document).ready(function () {

    // create an array of strings to store interests.
    var topics = ["dragon ball z", "space", "music", "futbol", "johnny depp"];

    // create a function to create buttons from topics array.
    function renderButtons() {

        $("#topicButtons").empty();

        for (var i = 0; i < topics.length; i++) {

            var button = $("<button>");

            button.attr("data-name", topics[i]);

            button.text(topics[i]);

            $("#topicButtons").append(button);

            console.log(button.attr("data-name"));

        }

    }

    // calls renderButtons function.
    renderButtons();

    
    $("#topicButtons").on("click", function (event) {

        event.preventDefault();

        var picTop = button.attr("data-name");

        console.log(picTop);

    })














});


