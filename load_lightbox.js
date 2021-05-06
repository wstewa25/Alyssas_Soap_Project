$(document).ready(function() { //loads the homepage images and alts into the lightbox plugin in index.html
	$.getJSON("json/home_lightbox.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                $("#homepage_pics").append( //Add each picture with its alt tag to the home page using lightbox attributes
                    "<a href = " + value.link + " data-lightbox = \"vecta\" data-title = " + value.title + ">"
                    +"<img src = " + value.link + " alt = " + value.title + " class = \"home_pic\">"
                    + "</a>"
                );
            });
        });
    });
});