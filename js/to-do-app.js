alert("Instructions: Type in your to-do item and click 'enter' to submit!")

//Check off specific to-dos by clicking

$("ul").on("click", "li", (function(){

	$(this).toggleClass("completed")

}));

//Clicking on X to remove to-do

$("ul").on("click", "span", (function(event){

	$(this).parent().fadeOut(500, function(){

		$(this).remove();
	});

	event.stopPropagation();

}));

//Adding to-do

$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>");

	}
});

$("input[type='text']").on("click", function(event){

	$(this).val("");
});


$(".fa-edit").click(function(){

	$("input[type='text']").fadeToggle();

})



