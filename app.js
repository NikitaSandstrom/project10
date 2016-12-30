$(document).ready(function () {
    var spotifyAPI = "https://api.spotify.com/v1/artists/0HlxL5hisLf59ETEPM3cUA/albums";
    function displayAlbums(data) {
        console.log(data);
        var albumHTML = '<ul id="albumGallery">';
        var albums = [data.items[0].images[1].url, data.items[6].images[1].url, data.items[8].images[1].url, data.items[14].images[1].url, data.items[15].images[1].url, data.items[16].images[1].url, data.items[17].images[1].url];
        var info = [data.items[0].name, data.items[6].name, data.items[8].name, data.items[14].name, data.items[15].name, data.items[16].name, data.items[17].name];
        var i = 0;
        while (i < albums.length) {
            console.log("working");
            albumHTML += '<li class="clicking">';
            albumHTML += '<a href="' + albums[i] + '">';
            albumHTML += '<img src="' + albums[i] + '" alt=" Album Title: ' + info[i] + '">';
            albumHTML += '</a>';
            albumHTML += '</li>';
            i += 1;
            console.log("done");
        }
        albumHTML += '</ul>';
        $("#albums").html(albumHTML);


        var $overlay = $('<div id="overlay"></div>');
        var $overlayHolder = $('<div class="Hold"></div>');
        var $image = $('<img>');
        var $caption = $('<p class="captionInfo"></p>');
        var $artist = '<p class="captionInfo">Artist: Scooter</p>';

        $overlayHolder.append($image);
        $overlayHolder.append($caption);
        $overlay.append($overlayHolder);
        $("body").append($overlay);

        $('#albumGallery').on('click', 'a', function (e) {
            console.log("click");

            var imageLocation = $(this).attr("href");

            $image.attr("src", imageLocation);

            $overlay.show();

            var captionText = $(this).children("img").attr("alt");

            $caption.html(captionText);
            $caption.append($artist);

            e.preventDefault();
        });

        $(document).on('click', function (e) {
            if ($(e.target).has('.Hold').length) {
                $overlay.hide();
            }
        });

    }
    $.getJSON(spotifyAPI, displayAlbums);

});