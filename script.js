$(document).ready(function(){
  $("#introduction").hide();
  $("#intro-text").hide();
  $("html").hide();
  $("html").fadeIn(1000);
});

//////////////////////////////////////////////////////

// Construct options first and then pass it as a parameter
$(window).scroll(function() {
  if($(window).scrollTop() >= 750) {
    var options = {
	animationEnabled: true,
	title: {
		text: "Voter Turnout Percentage per 4 years"
	},
	axisY: {
		title: "Voter Turnout (in %)",
		suffix: "%",
		includeZero: false
	},
	axisX: {
		title: "Years"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#"%"",
		dataPoints: [
			{ label: "1990", y: 57.25},	
			{ label: "1994", y: 59.96},	
			{ label: "1998", y: 46.06},
			{ label: "2002", y: 45.07},	
			{ label: "2006", y: 45.36},
			{ label: "2010", y: 48.58},
			{ label: "2014", y: 38.69},
			{ label: "2018", y: 58}
			
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);
};
  });

