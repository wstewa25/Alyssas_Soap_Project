$(document).ready(function(){

    //Preload all images for the current page
    $("img").each(function(){
        var img = new Image();
    });

    //Make it clear the links on the nav bar can be clicked
    //Increase size, make bold, and fully capitalize nav bar links when they are moused over
    $(".nav_column_header").mouseenter(function(){
        $(this).addClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_lowercase");
        $(this).removeClass("nav_bar_capitalize");
        $(this).addClass("arrow_increase_size");
    });
    $(".nav_column_header").mouseleave(function(){
        $(this).addClass("nav_bar_lowercase");
        $(this).addClass("nav_bar_capitalize");
        $(this).removeClass("nav_bar_uppercase");
        $(this).removeClass("arrow_increase_size");
    });

    //Back link in product pages resizing when mouse over
    $(".back_button").mouseenter(function(){
        $(this).addClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_lowercase");
        $(this).removeClass("nav_bar_capitalize");
        $(this).addClass("nav_bar_increase_size");
    });
    $(".back_button").mouseleave(function(){
        $(this).addClass("nav_bar_lowercase");
        $(this).addClass("nav_bar_capitalize");
        $(this).removeClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_increase_size");
    });

    //Validate Link Mouse over size changes
    $(".validate_link").mouseenter(function(){
        $(this).addClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_lowercase");   
        $(this).removeClass("nav_bar_capitalize");
        $(this).addClass("arrow_increase_size");
    });
    $(".validate_link").mouseleave(function(){
        $(this).addClass("nav_bar_lowercase");
        $(this).addClass("nav_bar_capitalize");
        $(this).removeClass("nav_bar_uppercase");
        $(this).removeClass("arrow_increase_size");
    });

    //Page link mouse over size changes
    $(".page_link").mouseenter(function(){
        $(this).addClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_lowercase");
        $(this).removeClass("nav_bar_capitalize");
        $(this).addClass("arrow_increase_size");
    });
    $(".page_link").mouseleave(function(){
        $(this).addClass("nav_bar_lowercase");
        $(this).addClass("nav_bar_capitalize");
        $(this).removeClass("nav_bar_uppercase");
        $(this).removeClass("arrow_increase_size");
    });

    //Open the drop down menu for product pages in nav bar when the arrow is clicked
    //Increase text size of all subpages and arrow when moused over to make it clear they can be clicked
    $("#dropArrow").click(function() {
        $(".nav_column_subpage_list").toggle(300);
    });
    $("#dropArrow").mouseover(function(){
        $(this).addClass("arrow_increase_size");
    });
    $("#dropArrow").mouseleave(function(){
        $(this).removeClass("arrow_increase_size");
    });
    $(".subpage_list_item").mouseenter(function(){
        $(this).addClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_lowercase");
        $(this).removeClass("nav_bar_capitalize");
        $(this).addClass("nav_bar_increase_size");
    });
    $(".subpage_list_item").mouseleave(function(){
        $(this).addClass("nav_bar_lowercase");
        $(this).addClass("nav_bar_capitalize");
        $(this).removeClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_increase_size");
    });

    //Change size of submit button on contact_us page when moused over
    $(".submit_button").mouseenter(function(){
        $(this).addClass("nav_bar_uppercase");
        $(this).removeClass("nav_bar_lowercase");
        $(this).removeClass("nav_bar_capitalize");
        $(this).addClass("arrow_increase_size");
    });
    $(".submit_button").mouseleave(function(){
        $(this).addClass("nav_bar_lowercase");
        $(this).addClass("nav_bar_capitalize");
        $(this).removeClass("nav_bar_uppercase");
        $(this).removeClass("arrow_increase_size");
    });

    //Alerts the user that their email has been recieved, catches XSS
    $("#submit_button").click(function(){
        alert("Thank you for your email! I will get back to you within 24 hours!");
        $("#email_box").value("");
    });
});