var token = '2644462b52924f83b1c3914d95cc24a7', // learn how to obtain it below
    hashtag = 'popular', // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 4; // how much photos do you want to get

$.ajax({
    type: "GET",
    cache: false,
    url: 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=2644462b52924f83b1c3914d95cc24a7',
    data: {
        access_token: token,
        count: num_photos
    },
    success: function(data) {
        for (var i = 0; i < 6; i++) {
            $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a></li>");
        }
    }
});