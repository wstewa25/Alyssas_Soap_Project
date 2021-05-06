$(document).ready(function() { //getJSON request for faq page
	$.getJSON("json/faq.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){ // Loop through each item in json file and add it to the webpage
                $("#accordion").append(
                    "<h3 class = \"increaseToXLarge\">" + value.Question + "</h3>"
                    + "<div><p>" + value.Answer + "</p></div>");
            });
        });
        $( "#accordion" ).accordion( "refresh" ); //Refresh the accordion widget once the data has been loaded so that css will apply
    });
});