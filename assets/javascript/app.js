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

            // console.log(button.attr("data-name"));

            // <button type="button" class="btn btn-light">Light</button>

        }

    }


    renderButtons();


    // $(".topic").on("click", function (event) {

    function topicImages() {

        event.preventDefault();

        $("#topicImages").empty();

        var topicName = $(this).attr("data-name");

        // console.log(topicName);

        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + topicName + "&api_key=CAXpgrXLq4SOSD1tjVIMhK4qHW7Mmxwv&limit=10"

        // console.log(giphyURL);

        $.ajax({
            url: giphyURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);

                var responseArray = response.data;

                // console.log(responseArray);

                for (var j = 0; j < responseArray.length; j++) {

                    var figureDiv = $("<figure>"); //new

                    figureDiv.addClass("figure col-lg-3"); //new

                    var imageStill = responseArray[j].images.original_still.url;

                    var imageAnimate = responseArray[j].images.original.url;

                    var imageRating = responseArray[j].rating;

                    var img = $("<img>");

                    img.addClass("gif figure-img"); // new

                    // img.addClass("gif col-lg-3 figure-img"); // old

                    img.attr("src", imageStill);

                    img.attr("data-state", "still");

                    img.attr("data-still", imageStill);

                    img.attr("data-animate", imageAnimate);

                    img.attr("alt", "" + topicName + " image");

                    // var p = $("<p>");

                    // p.text("Rating: " + imageRating.toUpperCase());

                    var figCaption = $("<figcaption>");

                    figCaption.addClass("figure-caption");

                    figCaption.text("Rating: " + imageRating.toUpperCase());

                    figureDiv.append(img, figCaption); //new
                    // figureDiv.append(figCaption);

                    $("#topicImages").prepend(figureDiv);

                    // $("#topicImages").prepend(img);

                    // $("figure").prepend(img, figCaption);

                    // $("figure").prepend(img); olddddddddd

                    // $("<img>").text(figCaption);

                    // $(".gif").append(p);

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

        // console.log(state);

        if (state === "still") {

            $(this).attr("src", $(this).attr("data-animate"));

            $(this).attr("data-state", "animate");

            // console.log($(this).attr("src"));

            // console.log($(this).attr("data-state"));


        } else {

            $(this).attr("src", $(this).attr("data-still"));

            $(this).attr("data-state", "still");

        }
    }


    $(document).on("click", ".gif", gifState);

    $(document).on("click", ".topic", topicImages);





    // $(document).on("click", "#topicButtons", displayTopicInfo, gifState);

    // $(".gif").on("click", gifState)



})



