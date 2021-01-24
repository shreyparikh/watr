
// break line
var br = document.createElement("br");

function create_form() {

	// create form and set attributes
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "submit.php");
	form.style.alignContent = 'center';

	//////////////////////////////////////////////////////////
	// Diet Input
	//////////////////////////////////////////////////////////
	var dietcontainer = document.createElement("div");

	var meat = document.createElement("input");
	meat.setAttribute("type", "checkbox");
	meat.setAttribute("id", "meat");
	var meatL = document.createElement("label");
	meatL.innerHTML = "Meat";
	meatL.setAttribute("for", "meat");

	var dairy = document.createElement("input");
	dairy.setAttribute("type", "checkbox");
	dairy.setAttribute("id", "dairy");
	var dairyL = document.createElement("label");
	dairyL.innerHTML = "Dairy";
	dairyL.setAttribute("for", "dairy");

	dietcontainer.appendChild(meat);
	dietcontainer.appendChild(meatL);
	dietcontainer.appendChild(dairy);
	dietcontainer.appendChild(dairyL);
	///////////////////////////////////////////////////////////
	// Clothing input
	///////////////////////////////////////////////////////////
	var clothingcontainer = document.createElement("div");

	var weekly = document.createElement("input");
	weekly.setAttribute("type", "radio");
	weekly.setAttribute("id", "weekly");
	weekly.name = "clothfreq";
	var weeklyL = document.createElement("label");
	weeklyL.innerHTML = "Weekly";
	weeklyL.setAttribute("for", "weekly");

	var monthly = document.createElement("input");
	monthly.setAttribute("type", "radio");
	monthly.setAttribute("id", "monthly");
	monthly.name = "clothfreq";
	var monthlyL = document.createElement("label");
	monthlyL.innerHTML = "Monthly";
	monthlyL.setAttribute("for", "monthly");

	var semimonthly = document.createElement("input");
	semimonthly.setAttribute("type", "radio");
	semimonthly.setAttribute("id", "semimonthly");
	semimonthly.name = "clothfreq";
	var semimonthlyL = document.createElement("label");
	semimonthlyL.innerHTML = "Semi-Monthly";
	semimonthlyL.setAttribute("for", "semimonthly");

	var seasonally = document.createElement("input");
	seasonally.setAttribute("type", "radio");
	seasonally.setAttribute("id", "seasonally");
	seasonally.name = "clothfreq";
	var seasonallyL = document.createElement("label");
	seasonallyL.innerHTML = "Seasonally";
	seasonallyL.setAttribute("for", "seasonally");

	var rarely = document.createElement("input");
	rarely.setAttribute("type", "radio");
	rarely.setAttribute("id", "rarely");
	rarely.name = "clothfreq";
	var rarelyL = document.createElement("label");
	rarelyL.innerHTML = "Rarely";
	rarelyL.setAttribute("for", "rarely");

	clothingcontainer.appendChild(weekly);
	clothingcontainer.appendChild(weeklyL);
	clothingcontainer.appendChild(monthly);
	clothingcontainer.appendChild(monthlyL);
	clothingcontainer.appendChild(semimonthly);
	clothingcontainer.appendChild(semimonthlyL);
	clothingcontainer.appendChild(seasonally);
	clothingcontainer.appendChild(seasonallyL);
	clothingcontainer.appendChild(rarely);
	clothingcontainer.appendChild(rarelyL);
	////////////////////////////////////////////////////////////////
	// Daily Habits
	////////////////////////////////////////////////////////////////
	var habitcontainer = document.createElement("div");

	var showercontainer = document.createElement("div");
	var shower = document.createElement("input");
	var showerval = document.createElement("p");
	shower.setAttribute("type", "range");
	shower.min = 0;
	shower.max = 30;
	shower.value = 10;
	shower.id = "shower";
	shower.oninput = function(){
		showerval.innerHTML = this.value + " minutes";
	}
	shower.onload = shower.oninput;
	var showerL = document.createElement("label");
	showerL.innerHTML = "How long do you shower each day?";
	showerL.setAttribute("for", "shower");
	showercontainer.appendChild(showerL);
	showercontainer.appendChild(shower);
	showercontainer.appendChild(showerval);

	var toiletcontainer = document.createElement("div");
	var toilet = document.createElement("input");
	toilet.setAttribute("type", "range");
	toilet.min = 0;
	toilet.max = 10;
	toilet.value = 3;
	toilet.id = "toilet";
	var toiletL = document.createElement("label");
	toiletL.innerHTML = "Toilet flushes per day";
	toiletL.setAttribute("for", "toilet");
	var lowflow_toilet = document.createElement("input");
	lowflow_toilet.setAttribute("type", "checkbox");
	lowflow_toilet.id = "lowflow_toilet";
	var lowflow_toiletL = document.createElement("label");
	lowflow_toiletL.innerHTML = ""							// TODO(Andrew): prompt for low flow toilet
	lowflow_toiletL.setAttribute("for", "lowflow_toilet");
	toiletcontainer.appendChild(toilet);
	toiletcontainer.appendChild(toiletL);
	toiletcontainer.appendChild(lowflow_toilet);
	toiletcontainer.appendChild(lowflow_toiletL);

	habitcontainer.appendChild(showercontainer);
	habitcontainer.appendChild(toiletcontainer);
	/////////////////////////////////////////////////////////////////////////
	// Appliance Usage
	/////////////////////////////////////////////////////////////////////////
	var appliancecontainer = document.createElement("div");

	var dishwashercontainer = document.createElement("div");
	var dishwasher = document.createElement("input");
	dishwasher.setAttribute("type", "radio");
	dishwasher.name = "dishwasher";
	dishwasher.id = "dishwasher";
	var dishwasherL = document.createElement("label");
	dishwasherL.innerHTML = "I use a dishwasher";
	dishwasherL.setAttribute("for", "dishwasher");
	var handwash = document.createElement("input");
	handwash.setAttribute("type", "radio");
	handwash.name = "dishwasher";
	handwash.id = "handwash";
	var handwashL = document.createElement("label");
	handwashL.innerHTML = "I wash by hand";
	handwashL.setAttribute("for", "handwash");
	dishwashercontainer.appendChild(dishwasher);
	dishwashercontainer.appendChild(dishwasherL);
	dishwashercontainer.appendChild(handwash);
	dishwashercontainer.appendChild(handwashL);

	var washingcontainer = document.createElement("div");
	var washm = document.createElement("input");
	washm.setAttribute("type", "range");
	washm.min = 0;
	washm.max = 15;
	washm.value = 5;
	washm.id = "washer";
	var washmL = document.createElement("label");
	washmL.innerHTML = "Washing machine uses per week";
	washmL.setAttribute("for", "washer");
	var washHE = document.createElement("input");
	washHE.setAttribute("type", "checkbox");
	washHE.id = "washerHE";
	var washHEL = document.createElement("label");
	washHEL.innerHTML = "My washer is high efficiency"
	washHEL.setAttribute("for", "washerHE");
	washingcontainer.appendChild(washm);
	washingcontainer.appendChild(washmL);
	washingcontainer.appendChild(washHE);
	washingcontainer.appendChild(washHEL);

	var sinkcontainer = document.createElement("div");
	var sink = document.createElement("input");
	sink.setAttribute("type", "range");
	sink.min = 0;
	sink.max = 20;
	sink.value = 5;
	sink.id = "sink";
	var sinkL = document.createElement("label");
	sinkL.innerHTML = "Minutes sink left running per day";
	sinkL.setAttribute("for", "sink");
	sinkcontainer.appendChild(sink);
	sinkcontainer.appendChild(sinkL);

	appliancecontainer.appendChild(dishwashercontainer);
	appliancecontainer.appendChild(washingcontainer);
	appliancecontainer.appendChild(sinkcontainer);
	//////////////////////////////////////////////////////////////////////////
	// END PERSONAL LEVEL SURVEY
	//////////////////////////////////////////////////////////////////////////


	var s = document.createElement("input");
	s.setAttribute("type", "submit");
	s.setAttribute("value", "submit");

	form.appendChild(br.cloneNode());

	form.appendChild(dietcontainer);
	form.appendChild(clothingcontainer);
	form.appendChild(habitcontainer);
	form.appendChild(appliancecontainer);
	form.appendChild(s);

	document.getElementsByTagName("body")[0].appendChild(form);
}


