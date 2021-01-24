// break line
var br = document.createElement("br");

function create_form() {
	// create form and set attributes
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "submit.php");

	// Create input elements
	var meat = document.createElement("input");
	var dairy = document.createElement("input");
	meat.setAttribute("type", "radio");
	dairy.setAttribute("type", "radio");

	//var diet = document.createElement("label");
}

create_form();