console.log("hello world")
alert("hello world")

var musician = ['Whitney Houston', 'Janet Jackson', 'Prince'];

// Generic function for displaying musician data 
    function renderButtons(){ 

        // // Deletes the musician prior to adding new musician (this is necessary otherwise you will have repeat buttons)
        $('#musicianView').empty();

        // Loops through the array of musician
        for (var i = 0; i < musician.length; i++){

            // Then dynamicaly generates buttons for each musician in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('musician'); // Added a class 
            a.attr('data-name', musician[i]); // Added a data-attribute
            a.text(bands[i]); // Provided the initial button text
            $('#musicianView').append(a); // Added the button to the HTML  
        }


    function buttonDisplay(){
        $('button').on('click', function() {
           var band = $('#musicain-input').val().trim();
           for (var i = 0; i < musician.length; i++){
             var musician = $(this).data(.musician)
           for (var i = 0; i < musician.length; i++){
          var musician = $(this).data('musician');
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + bands + "&api_key=dc6zaTOxFJmzC&limit=10";

            
            $.ajax({
                    url: queryURL,
                    method: 'GET'
                }
                })
                .done(function(response) {

                    var results = response.data;
                
                    for (var i = 0; i < results.length; i++) {

                       

                        
                        var musicianDiv = $('<div>');

                        var p = $('<p>').text("Rating: " + results[i].rating);

                        var musicianImage = $('<img>');
                        musicianImage.attr('src', results[i].images.fixed_height.url);

                        musicianDiv.append(p);
                        musicianDiv.prepend(bandsImage);

                        $('#gifsAppearHere').prepend(musicianDiv);
                    }

               
       };
    }
    }
    
renderButtons();
//buttonDisplay();
