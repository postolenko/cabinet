var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


var value,
    selectInput,
	valueList;

$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

	$(".select_input").on("click", function(e) {
		e.preventDefault();
		$(".select_wrapp").removeClass("active");
		parent = $(this).closest(".select_wrapp");
		dropdownList = parent.find(".dropdown_box");
		if(dropdownList.is(":hidden")) {
			parent.addClass("active");
		} else {
			parent.removeClass("active");
		}
	});

	$(".values_list > div").on("click", function(e) {
		e.preventDefault();
		value = $(this).text();
		parent = $(this).closest(".select_wrapp");
		selectInput = parent.find(".value_input");
 		selectInput.val(value);
 		valueList = $(this).closest(".values_list").find("div").removeClass("active");
 		$(this).addClass("active");
	});

	$(document).mouseup(function (e){
        hide_element = $(".dropdown_box");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            	hide_element.closest(".select_wrapp").removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
        	$(".select_wrapp").removeClass("active");
        }
    });

});