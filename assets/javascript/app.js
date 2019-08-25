$(document).ready(function () {


    var topics = ["Dragon Ball Z", "Space", "Music", "Futbol", "Kermit"];


    function renderButtons() {

        $("#topicButtons").empty();

        for (var i = 0; i < topics.length; i++) {

            var button = $("<button>");

            button.addClass("topic btn btn-info");

            button.attr("data-name", topics[i]);

            button.text(topics[i]);

            $("#topicButtons").append(button);

        }

    }

    renderButtons();


    function topicImages() {

        event.preventDefault();

        $("#topicImages").empty();

        var topicName = $(this).attr("data-name");

        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=CAXpgrXLq4SOSD1tjVIMhK4qHW7Mmxwv&limit=10"

        $.ajax({
            url: giphyURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);

                var responseArray = response.data;

                for (var j = 0; j < responseArray.length; j++) {

                    var figureDiv = $("<figure>");

                    figureDiv.addClass("figure col-lg-3");

                    var imageStill = responseArray[j].images.original_still.url;

                    var imageAnimate = responseArray[j].images.original.url;

                    var imageRating = responseArray[j].rating;

                    var img = $("<img>");

                    img.addClass("gif figure-img");

                    img.attr("src", imageStill);

                    img.attr("data-state", "still");

                    img.attr("data-still", imageStill);

                    img.attr("data-animate", imageAnimate);

                    img.attr("alt", "" + topicName + " image");

                    var figCaption = $("<figcaption>");

                    figCaption.addClass("figure-caption");

                    figCaption.text("Rating: " + imageRating.toUpperCase());

                    figureDiv.append(img, figCaption);

                    $("#topicImages").prepend(figureDiv);

                }

            })

    }


    $("#submit").on("click", function (event) {

        event.preventDefault();

        var topic = $("#topic-input").val().trim();

        if (topic == "") {
            return false;
        };

        topics.push(topic);

        renderButtons();

    });


    function gifState() {

        var state = $(this).attr("data-state");

        if (state === "still") {

            $(this).attr("src", $(this).attr("data-animate"));

            $(this).attr("data-state", "animate");

        } else {

            $(this).attr("src", $(this).attr("data-still"));

            $(this).attr("data-state", "still");

        }

    }


    $(document).on("click", ".gif", gifState);

    $(document).on("click", ".topic", topicImages);


})



