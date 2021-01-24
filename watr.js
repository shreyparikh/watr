
// break line
var br = document.createElement("br");

function create_form() {

	// create form and set attributes
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "submit.php");

	// Create input elements
	var meat = document.createElement("input");
	meat.setAttribute("type", "radio");
	meat.setAttribute("id", "meat");
	var meatL = document.createElement("label");
	meatL.innerHTML = "Meat";
	meatL.setAttribute("for", "meat");

	var dairy = document.createElement("input");
	dairy.setAttribute("type", "radio");
	dairy.setAttribute("id", "dairy");
	var dairyL = document.createElement("label");
	dairyL.innerHTML = "Dairy";
	dairyL.setAttribute("for", "dairy");

	var s = document.createElement("input");
	s.setAttribute("type", "submit");
	s.setAttribute("value", "submit");

	form.appendChild(br.cloneNode());

	form.appendChild(meat);
	form.appendChild(meatL);
	form.appendChild(dairy);
	form.appendChild(s);

	form.style.opacity = 0;
	document.getElementsByTagName("body")[0].appendChild(form);
}



