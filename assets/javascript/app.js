$(document).ready(function () {

    // create an array of strings to store interests.
    var topics = ["Dragon Ball Z", "Space", "Music", "Futbol", "Johnny Depp"];

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

                    var imageStill = responseArray[j].images.original_still.url;

                    var imageRating = (responseArray[j].rating);

                    // console.log(imageStill);

                    // var topicDiv = $("<div>");

                    var img = $("<img>")

                    img.attr("src", imageStill);

                    // img.attr()

                    img.attr("alt", "" + topicName + " image");

                    var p = $("<p>");

                    p.text("Rating: " + imageRating.toUpperCase());

                    $("#topicImages").prepend(img, p);


                }


            })


    })


})




// Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.


// We chose animals for our theme, but you can make a list to your own liking.



// Your app should take the topics in this array and create buttons in your HTML.


// Try using a loop that appends a button for each string in the array.


// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).


// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// Rejoice! You just made something really cool.


