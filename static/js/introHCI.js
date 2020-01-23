'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Ask your own heart");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});
	
	$("a.thumbnail").click(projectClick);
	function projectClick(e) {
		e.preventDefault();
		$(this).css("background-color", "green");
		
		var containingProject = $(this).closest(".project");
	    var description = $(containingProject).find(".project-description");
    		if (description.length == 0) {
       			$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    		} else {
       			$(description).fadeToggle()
    		}
	}	
}