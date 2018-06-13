// JavaScript source code
$(window).ready(function(){
	$(".pregunta").click(function(){
		$.getJSON("data/results.json", function(result){
			alert(result)
			var x=1
			table =$("div.jumbotron>table")
			tbody= table.children()[0]
			list= tbody.children
			$.each(result[0], function(i, field){
			//    $("div").append(field + " ");
				a = $("<div>"+field+"</div>")
				list[x].append(a.html()) 
				x++;
			});
		});
	});
});