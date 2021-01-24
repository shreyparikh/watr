
// break line
var br = document.createElement("br");

// Populate the index.html with personal form
function create_form() {

	// create form and set attributes
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/controllers/submit.php");
	form.style.alignContent = 'center';

	//////////////////////////////////////////////////////////
	// Diet Input
	//////////////////////////////////////////////////////////
	var dietcontainer = document.createElement("div");

	var meatcontainer = document.createElement("div");
	meatcontainer.id = "meatcontainer";
	var mLabel = document.createElement("label");
	mLabel.setAttribute("for", "meatcontainer");
	mLabel.innerHTML = "What would you rate your meat consumption?";	
	var meatH = document.createElement("input");
	meatH.setAttribute("type", "radio");
	meatH.name = "meat";
	meatH.id = "meatH";
	meatH.value = "high";
	meatH.required = true;
	var mHLabel = document.createElement("label");
	mHLabel.innerHTML = "High";
	mHLabel.setAttribute("for", "meatH");
	var meatM = document.createElement("input");
	meatM.setAttribute("type", "radio");
	meatM.name = "meat";
	meatM.id = "meatM";
	meatM.value = "med";
	var mMLabel = document.createElement("label");
	mMLabel.innerHTML = "Medium";
	mMLabel.setAttribute("for", "meatM");
	var meatL = document.createElement("input");
	meatL.setAttribute("type", "radio");
	meatL.name = "meat";
	meatL.id = "meatL";
	meatL.value = "low";
	var mLLabel = document.createElement("label");
	mLLabel.innerHTML = "Low";
	mLLabel.setAttribute("for", "meatL");
	var meatN = document.createElement("input");
	meatN.setAttribute("type", "radio");
	meatN.name = "meat";
	meatN.id = "meatN";
	meatN.value = "none";
	var mNLabel = document.createElement("label");
	mNLabel.innerHTML = "None";
	mNLabel.setAttribute("for", "meatN");

	meatcontainer.appendChild(meatH);
	meatcontainer.appendChild(mHLabel);
	meatcontainer.appendChild(meatM);
	meatcontainer.appendChild(mMLabel);
	meatcontainer.appendChild(meatL);
	meatcontainer.appendChild(mLLabel);
	meatcontainer.appendChild(meatN);
	meatcontainer.appendChild(mNLabel);


	var dairycontainer = document.createElement("div");
	dairycontainer.id = "dairycontainer";
	var dLabel = document.createElement("label");
	dLabel.setAttribute("for", "dairycontainer");
	dLabel.innerHTML = "What would you rate your dairy consumption?";
	var dairyH = document.createElement("input");
	dairyH.setAttribute("type", "radio");
	dairyH.name = "dairy";
	dairyH.id = "dairyH";
	dairyH.value = "high";
	dairyH.required = true;
	var dHLabel = document.createElement("label");
	dHLabel.innerHTML = "High";
	dHLabel.setAttribute("for", "dairyH");
	var dairyM = document.createElement("input");
	dairyM.setAttribute("type", "radio");
	dairyM.name = "dairy";
	dairyM.id = "dairyM";
	dairyM.value = "med";
	var mMLabel = document.createElement("label");
	mMLabel.innerHTML = "Medium";
	mMLabel.setAttribute("for", "dairyM");
	var dairyL = document.createElement("input");
	dairyL.setAttribute("type", "radio");
	dairyL.name = "dairy";
	dairyL.id = "dairyL";
	dairyL.value = "low";
	var dLLabel = document.createElement("label");
	dLLabel.innerHTML = "Low";
	dLLabel.setAttribute("for", "dairyL");
	var dairyN = document.createElement("input");
	dairyN.setAttribute("type", "radio");
	dairyN.name = "dairy";
	dairyN.id = "dairyN";
	dairyN.value = "none";
	var dNLabel = document.createElement("label");
	dNLabel.innerHTML = "None";
	dNLabel.setAttribute("for", "dairyN");

	dairycontainer.appendChild(dairyH);
	dairycontainer.appendChild(dHLabel);
	dairycontainer.appendChild(dairyM);
	dairycontainer.appendChild(mMLabel);
	dairycontainer.appendChild(dairyL);
	dairycontainer.appendChild(dLLabel);
	dairycontainer.appendChild(dairyN);
	dairycontainer.appendChild(dNLabel);
	
	dietcontainer.appendChild(mLabel);
	dietcontainer.appendChild(meatcontainer);
	dietcontainer.appendChild(dLabel);
	dietcontainer.appendChild(dairycontainer);
	///////////////////////////////////////////////////////////
	// Clothing input
	///////////////////////////////////////////////////////////
	var clothingcontainer = document.createElement("div");
	var innerclothingcontainer = document.createElement("div");
	innerclothingcontainer.id = "innerclothingcontainer";
	var cLabel = document.createElement("label");
	cLabel.innerHTML = "How often do you buy new clothes?";
	cLabel.setAttribute("for", "innerclothingcontainer");

	var weekly = document.createElement("input");
	weekly.setAttribute("type", "radio");
	weekly.setAttribute("id", "weekly");
	weekly.name = "clothfreq";
	weekly.value = "weekly";
	var weeklyL = document.createElement("label");
	weeklyL.innerHTML = "Weekly";
	weeklyL.setAttribute("for", "weekly");

	var monthly = document.createElement("input");
	monthly.setAttribute("type", "radio");
	monthly.setAttribute("id", "monthly");
	monthly.name = "clothfreq";
	monthly.value = "monthly";
	var monthlyL = document.createElement("label");
	monthlyL.innerHTML = "Monthly";
	monthlyL.setAttribute("for", "monthly");

	var semimonthly = document.createElement("input");
	semimonthly.setAttribute("type", "radio");
	semimonthly.setAttribute("id", "semimonthly");
	semimonthly.name = "clothfreq";
	semimonthly.value = "semimonthly";
	var semimonthlyL = document.createElement("label");
	semimonthlyL.innerHTML = "Semi-Monthly";
	semimonthlyL.setAttribute("for", "semimonthly");

	var seasonally = document.createElement("input");
	seasonally.setAttribute("type", "radio");
	seasonally.setAttribute("id", "seasonally");
	seasonally.name = "clothfreq";
	seasonally.value = "seasonally";
	var seasonallyL = document.createElement("label");
	seasonallyL.innerHTML = "Seasonally";
	seasonallyL.setAttribute("for", "seasonally");

	var rarely = document.createElement("input");
	rarely.setAttribute("type", "radio");
	rarely.setAttribute("id", "rarely");
	rarely.name = "clothfreq";
	rarely.value = "rarely";
	var rarelyL = document.createElement("label");
	rarelyL.innerHTML = "Rarely";
	rarelyL.setAttribute("for", "rarely");

	rarely.required = true;

	innerclothingcontainer.appendChild(weekly);
	innerclothingcontainer.appendChild(weeklyL);
	innerclothingcontainer.appendChild(monthly);
	innerclothingcontainer.appendChild(monthlyL);
	innerclothingcontainer.appendChild(semimonthly);
	innerclothingcontainer.appendChild(semimonthlyL);
	innerclothingcontainer.appendChild(seasonally);
	innerclothingcontainer.appendChild(seasonallyL);
	innerclothingcontainer.appendChild(rarely);
	innerclothingcontainer.appendChild(rarelyL);

	clothingcontainer.appendChild(cLabel);
	clothingcontainer.appendChild(innerclothingcontainer);
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
	shower.name = "shower";
	showerval.innerHTML = shower.value + " minutes";
	shower.oninput = function(){
		showerval.innerHTML = this.value + " minutes";
	}
	var showerL = document.createElement("label");
	showerL.innerHTML = "How long do you shower each day?";
	showerL.setAttribute("for", "shower");
	showercontainer.appendChild(showerL);
	showercontainer.appendChild(shower);
	showercontainer.appendChild(showerval);

	var toiletcontainer = document.createElement("div");
	var toilet = document.createElement("input");
	var flushval = document.createElement("p");
	toilet.setAttribute("type", "range");
	toilet.min = 0;
	toilet.max = 10;
	toilet.value = 3;
	toilet.id = "toilet";
	toilet.name = "toilet";
	flushval.innerHTML = toilet.value + " flushes";
	toilet.oninput = function(){
		flushval.innerHTML = this.value + " flushes";
	}
	var toiletL = document.createElement("label");
	toiletL.innerHTML = "Toilet flushes per day";
	toiletL.setAttribute("for", "toilet");
	var lowflow_toilet = document.createElement("input");
	lowflow_toilet.setAttribute("type", "checkbox");
	lowflow_toilet.id = "lowflow_toilet";
	lowflow_toilet.name = "lowflow_toilet";
	var lowflow_toiletL = document.createElement("label");
	lowflow_toiletL.innerHTML = "Do you have a low-flow toilet? (Made after 1992)";
	lowflow_toiletL.setAttribute("for", "lowflow_toilet");
	toiletcontainer.appendChild(toiletL);
	toiletcontainer.appendChild(toilet);
	toiletcontainer.appendChild(flushval);	
	toiletcontainer.appendChild(lowflow_toiletL);
	toiletcontainer.appendChild(lowflow_toilet);

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
	dishwasher.value = "dishwasher";
	var dishwasherL = document.createElement("label");
	dishwasherL.innerHTML = "I use a dishwasher";
	dishwasherL.setAttribute("for", "dishwasher");
	var handwash = document.createElement("input");
	handwash.setAttribute("type", "radio");
	handwash.name = "dishwasher";
	handwash.id = "handwash";
	handwash.value = "handwash";
	var handwashL = document.createElement("label");
	handwashL.innerHTML = "I wash by hand";
	handwashL.setAttribute("for", "handwash");
	
	handwash.required = true;
	dishwashercontainer.appendChild(dishwasher);
	dishwashercontainer.appendChild(dishwasherL);
	dishwashercontainer.appendChild(handwash);
	dishwashercontainer.appendChild(handwashL);

	var washingcontainer = document.createElement("div");
	var washm = document.createElement("input");
	washm.setAttribute("type", "range");
	var washmval = document.createElement("p");
	washm.min = 0;
	washm.max = 15;
	washm.value = 5;
	washm.id = "washer";
	washm.name = "washer";
	washmval.innerHTML = washm.value + " loads";
	washm.oninput = function(){
		washmval.innerHTML = this.value + " loads";
	}
	var washmL = document.createElement("label");
	washmL.innerHTML = "Washing machine uses per week";
	washmL.setAttribute("for", "washer");
	var washHE = document.createElement("input");
	washHE.setAttribute("type", "checkbox");
	washHE.id = "washerHE";
	washHE.name = "washerHE";
	var washHEL = document.createElement("label");
	washHEL.innerHTML = "My washer is high efficiency"
	washHEL.setAttribute("for", "washerHE");
	washingcontainer.appendChild(washmL);
	washingcontainer.appendChild(washm);
	washingcontainer.appendChild(washmval);
	washingcontainer.appendChild(washHEL);
	washingcontainer.appendChild(washHE);

	var sinkcontainer = document.createElement("div");
	var sink = document.createElement("input");
	sink.setAttribute("type", "range");
	var sinkval = document.createElement("p");
	sink.min = 0;
	sink.max = 20;
	sink.value = 5;
	sink.id = "sink";
	sink.name = "sink";
	sinkval.innerHTML = sink.value + " minutes";
	sink.oninput = function(){
		sinkval.innerHTML = this.value + " minutes";
	}
	var sinkL = document.createElement("label");
	sinkL.innerHTML = "Minutes sink left running per day";
	sinkL.setAttribute("for", "sink");
	sinkcontainer.appendChild(sinkL);
	sinkcontainer.appendChild(sink);
	sinkcontainer.appendChild(sinkval);

	appliancecontainer.appendChild(dishwashercontainer);
	appliancecontainer.appendChild(washingcontainer);
	appliancecontainer.appendChild(sinkcontainer);
	//////////////////////////////////////////////////////////////////////////
	// END PERSONAL LEVEL SURVEY
	//////////////////////////////////////////////////////////////////////////
	// BEGIN REGIONAL LEVEL
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

/* When the user clicks on the button,
	toggle between hiding and showing the dropdown content */
	function drop() {
		document.getElementById("stateDropdown").classList.toggle("show");
		  }
	  
		  // Close the dropdown menu if the user clicks outside of it
		  window.onclick = function(event) {
			if (!event.target.matches('.dropbtn')) {
			  var dropdowns = document.getElementsByClassName("state-content");
			  var i;
			  for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
				  openDropdown.classList.remove('show');
				}
			  }
			}
		  }


