$(document).ready(function () {

    // create an array of strings to store interests.
    var topics = ["dragon ball z", "space", "music", "futbol", "johnny depp"];

    // create a function to create buttons from topics array.
    function renderButtons() {

        $("#topicButtons").empty();

        for (var i = 0; i < topics.length; i++) {

            var button = $("<button>");

            button.addClass("topic");

            button.attr("data-name", topics[i]);

            button.text(topics[i]);

            $("#topicButtons").append(button);

            // console.log(button.attr("data-name"));

        }

    }

    // calls renderButtons function.
    renderButtons();

    $("button").on("click", function (event) {

        event.preventDefault();

        var topicName = $(this).attr("data-name");

        // console.log(topicName);

        var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=CAXpgrXLq4SOSD1tjVIMhK4qHW7Mmxwv&limit=10"

        // console.log(giphyURL);

        $.ajax({
            url: giphyURL,
            method: "GET"
        })
        .then(function(response) {

            console.log(response);

            var responseArray = response.data;

            console.log(responseArray.length);

            for (var j = 0; j < responseArray.length; j++) {


                // get images

                var imageURL = responseArray[i].url;

                console.log(imageURL);

            }

            // var imageURL = response.data[0];

            // console.log(imageURL);



        })


    })


})


