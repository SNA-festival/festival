function changeImage() {
    var image = document.getElementById('movie');
   
    if (image.src.match("http://c.dryicons.com/images/icon_sets/handy_part_2_icons/png/128x128/movie.png")) {
        image.src = "http://png-3.findicons.com/files/icons/1261/sticker_system/128/movie.png";
    } else {
        image.src = "http://c.dryicons.com/images/icon_sets/handy_part_2_icons/png/128x128/movie.png";
    }

}