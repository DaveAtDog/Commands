// JSFL

var currentTimeline = fl.getDocumentDOM().getTimeline();

// store original guide lines
var currentGuides = new XML(currentTimeline.getGuidelines());

// clear guides
currentTimeline.setGuidelines(new XML(<guidelines></guidelines>));

for (var i = 0; i < fl.getDocumentDOM().selection.length; i++)
{
	var curSelection = fl.getDocumentDOM().selection[i];
	
	var additionalGuides = new Array();

	if (curSelection) {
		additionalGuides.push('<guideline direction="v">' + Math.round(curSelection.x + (curSelection.width/2)) + '</guideline>');
		additionalGuides.push('<guideline direction="h">' + Math.round(curSelection.y + (curSelection.height/2)) + '</guideline>');
		
		for(var j = 0; j < additionalGuides.length; j++)
		{
			currentGuides.appendChild(new XML(additionalGuides[j]));
		}
	}	
}

currentTimeline.setGuidelines(new XML(currentGuides));

