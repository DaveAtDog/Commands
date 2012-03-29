// JSFL

var flash_doc = fl.getDocumentDOM();
var flash_lib = flash_doc.library;
var flash_tl  = flash_doc.getTimeline();
var flash_w = flash_doc.width;
var flash_h = flash_doc.height;

// Be sure to set this path to match your setup
var result = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/AddGrid.xml");


if (result.dismiss == "accept")
{
	//fl.trace(result.orientation);
	//fl.trace(result.position);
	
	var currentGuides = new XML(flash_tl.getGuidelines());
	
	// clear guides
	flash_tl.setGuidelines(new XML(<guidelines></guidelines>));
	
	var orientation = (result.orientation == 'y') ? 'h' : 'v';
	
	var num_columns = eval(result.num_columns);
	
	var side_gutters = result.side_gutters; // Boolean
	
	var gutter_width =  eval(result.gutter_width);
	
	var column_width =  eval(result.column_width);
	
	var values = new Array();
	
	
	var prevValue = 0;
	
	values.push(prevValue);
	
	fl.trace(side_gutters);
	
	for (var i = 0; i < num_columns; i++)
	{
		if(side_gutters == 'true')
		{
			//fl.trace('WITH SIDE GUTTERS');
			
			prevValue = prevValue + gutter_width;
			
			values.push(prevValue);
			
			prevValue = prevValue + column_width;
			
			values.push(prevValue);
		}
			else
		{
			//fl.trace('WITHOUT SIDE GUTTERS');
			
			prevValue = prevValue + column_width;
			
			values.push(prevValue);
			
			if (i != (num_columns - 1))
			{
				prevValue = prevValue + gutter_width;
			
				values.push(prevValue);
			}
		}
	}
	
	//fl.trace(values);
	
	
	for (var i = 0; i < values.length; i++)
	{
		var newGuide = '<guideline direction="' + orientation + '">' + values[i] + '</guideline>';
		
		currentGuides.appendChild(new XML(newGuide));
	}
	
	flash_tl.setGuidelines(new XML(currentGuides));
	
	//fl.trace(currentGuides);
}
















/*
var currentTimeline = fl.getDocumentDOM().getTimeline();

var stageH = fl.getDocumentDOM().height;
var stageW = fl.getDocumentDOM().width;

var currentGuides = new XML(currentTimeline.getGuidelines());

fl.trace(currentGuides);

var additionalGuides = ['<guideline direction="v">0</guideline>','<guideline direction="h">0</guideline>','<guideline direction="v">' + stageW + '</guideline>','<guideline direction="h">' + stageH + '</guideline>'];

for(var i = 0; i < additionalGuides.length; i++)
{
	currentGuides.appendChild(new XML(additionalGuides[i]));
}

fl.trace(currentGuides);

currentTimeline.setGuidelines(new XML(currentGuides));

*/