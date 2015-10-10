$(document).ready(function () {
    $('.search').keyup(function () {
    

        var minlength = 3;
        var animal = $(this).val();


        if (animal.length >= minlength) {
            var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
  
            var flickrOptions = {
                tags: animal,
                format: "json"
            };
            $.getJSON(flickerAPI, flickrOptions, displayPhotos);
        };

  
        function displayPhotos(data) {
            var photoHTML = '<ul>';
            $.each(data.items, function (i, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50>';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a> </li>';
            });
            photoHTML += '</ul>'
            $("#photos").html(photoHTML);
        };

    });
});