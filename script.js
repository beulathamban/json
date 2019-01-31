$("button").click(function() {

	$.getJSON("data.json", function (dataObj) { // any name instead of dataObj
	 $.each(dataObj, function (key, value) { //any name instead of key and value
	 	$("ul").append("<li>" + value.name + "</li>");

	 });
	});
	
});