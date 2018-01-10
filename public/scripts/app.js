/*
  main script for only runs every function
*/

searchForm();


(function(window, document, $, undefined) {

    $(document).on('keyup', '#myinput', function (e) {
        if(e.keyCode == 13) {
            searchData();
        }
    });

    $(document).on('click', '.btn-src', function () {
        searchData();
    });

    function searchData(){
        var word = $('#myinput').val();
        $('#gr-items-books').html('');
        $.getJSON( "/books-schema.json", function( result) {
            $.each( result.data, function( key, item ) {
                var name = item.title;
                if (name.toLowerCase().indexOf(word) >= 0)  { 
                    var html = '<article style="display: block;">';
                    html += '<img src="'+item.image+'">';
					html += '<h2>'+item.title+'</h2>';
					html += '<p>'+item.teaser+'</p></article>';
                    $('#gr-items-books').append(html);
                }
            });
        });
        
         
    }


})(window, document, jQuery);