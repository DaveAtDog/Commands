// JSFL

var currentTimeline = fl.getDocumentDOM().getTimeline();

// store original guide lines
var currentGuides = new XML(currentTimeline.getGuidelines());

// clear guides
currentTimeline.setGuidelines(new XML(<guidelines></guidelines>));

//fl.trace(currentGuides);



for (var i = 0; i < fl.getDocumentDOM().selection.length; i++)
{
	var curSelection = fl.getDocumentDOM().selection[i];
	
	var additionalGuides = new Array();

	if (curSelection) {
		additionalGuides.push('<guideline direction="v">' + curSelection.x + '</guideline>');
		additionalGuides.push('<guideline direction="h">' + curSelection.y + '</guideline>');
		additionalGuides.push('<guideline direction="v">' + (curSelection.x + curSelection.width) + '</guideline>');
		additionalGuides.push('<guideline direction="h">' + (curSelection.y + curSelection.height) + '</guideline>');
		
		for(var j = 0; j < additionalGuides.length; j++)
		{
			currentGuides.appendChild(new XML(additionalGuides[j]));
		}
	}	
}


/*
if (curSelection) {
	additionalGuides.push('<guideline direction="v">' + curSelection.x + '</guideline>');
	additionalGuides.push('<guideline direction="h">' + curSelection.y + '</guideline>');
	additionalGuides.push('<guideline direction="v">' + (curSelection.x + curSelection.width) + '</guideline>');
	additionalGuides.push('<guideline direction="h">' + (curSelection.y + curSelection.height) + '</guideline>');
	
	for(var i = 0; i < additionalGuides.length; i++)
	{
		currentGuides.appendChild(new XML(additionalGuides[i]));
	}
}

*/ 

//fl.trace(currentGuides);

currentTimeline.setGuidelines(new XML(currentGuides));

