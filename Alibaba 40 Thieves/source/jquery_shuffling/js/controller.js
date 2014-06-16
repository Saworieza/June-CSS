$(document).ready(function() {    
	var array_img = new Array();
	
	var children = $("#container").children();
	var child = $("#container div:first-child");
	
	for (i=0; i<children.length; i++) {		
		array_img[i] = $("#"+child.attr("id")+" img").attr("src");
		child = child.next();
	}

	$("#btresetShuffle").click(function() {
		var children = $("#container").children();
		var child = $("#container div:first-child");

		for (i=0; i<children.length; i++) {		
			$("#img"+parseInt(i+1)).attr("src", array_img[i]);

			child = child.next();
		}
	});
});

/* this function from:
 * http://www.admixweb.com/2010/08/24/javascript-tip-get-a-random-number-between-two-integers/
 */
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function shuffle() {
	var children = $("#container").children();
	var child = $("#container div:first-child");
		
	var array_img = new Array();

	for (i=0; i<children.length; i++) {		
		array_img[i] = $("#"+child.attr("id")+" img").attr("src");
		child = child.next();
	}
	
	var child = $("#container div:first-child");
	
	for (z=0; z<children.length; z++) {
		randIndex = randomFromTo(0, array_img.length - 1);
		
		// set new image
		$("#"+child.attr("id")+" img").attr("src", array_img[randIndex]);
		array_img.splice(randIndex, 1);
		
		child = child.next();
	}
}