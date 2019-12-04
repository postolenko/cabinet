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

   	// ----------------------
    
    $(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        var countInput = parentBlock.find("input");
        var countVal = countInput.val();
        if( $(this).hasClass("minus_btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        if(countVal == "") {
            countVal = 1;
        }
        countInput.val(countVal);
        if(parentBlock.hasClass("goods_count")) {
            countTotalPrice();
        }
    });

    // -------------------

    $(".good_table .close_btn").on("click", function(e) {
    	e.preventDefault();
    	$(this).closest(".good_table").addClass("active");
    });

    $(".return_btn").on("click", function(e) {
		e.preventDefault();
		$(this).closest(".good_table").removeClass("active");
    });


	$(".order_item .close_btn").on("click", function(e) {
    	e.preventDefault();
    	$(this).closest(".order_item").remove();
    });

});