// JSFL

var flash_doc = fl.getDocumentDOM();
var flash_lib = flash_doc.library;
var flash_tl  = flash_doc.getTimeline();
var flash_w = flash_doc.width;
var flash_h = flash_doc.height;

// Be sure to set this path to match your setup
var result = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/AddGuidline.xml");

//C:\Users\Dave\AppData\Local\Adobe\Flash CS4\en\Configuration\Commands

if (result.dismiss == "accept")
{
	//fl.trace(result.orientation);
	//fl.trace(result.position);
	
	var currentGuides = new XML(flash_tl.getGuidelines());
	
	// clear guides
	flash_tl.setGuidelines(new XML(<guidelines></guidelines>));
	
	var orientation = (result.orientation == 'y') ? 'h' : 'v';
	
	fl.trace(result.orientation);
	
	var newGuide = '<guideline direction="' + orientation + '">' + eval(result.position) + '</guideline>';
	
	currentGuides.appendChild(new XML(newGuide));
	
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