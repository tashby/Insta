var starWars;
var api = 'http://swapi.co/api/people';

$.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: api,
            success: function (data) {
                /*alert('success');*/
                
                var html = "";
                $.each(data.results, function(index, value){
                    html += '<p>' + value.count +'</p>';
                    console.log(value);
                    $('#search-results').html(html);
                });
            }});
