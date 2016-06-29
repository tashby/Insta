var starWars;
    api = 'http://swapi.co/api/';

function gotData(data){
    starWars = data;
}
 
function getSearch(){
        var url = api + input;
    $.getJSON(url, gotData);
    console.log();
}

function setup(){
    var button = ('.submit').select;
    button.mouseClick(getSearch);

    input = ('#search-form').select;
}


$.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: api,
            success: function (data) {
                alert('success');
                console.log(data);
                var html = "";
                $.each(data, function(index, value){
                    html += '<p>' + data +'</p>';
                    console.log(data);
                    $('#search-results').html(html);
                });
            }});
