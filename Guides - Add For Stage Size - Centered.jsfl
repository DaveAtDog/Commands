﻿// JSFL
var currentTimeline = fl.getDocumentDOM().getTimeline();

var stageH = fl.getDocumentDOM().height;
var stageW = fl.getDocumentDOM().width;

var currentGuides = new XML(currentTimeline.getGuidelines());

// clear guides
currentTimeline.setGuidelines(new XML(<guidelines></guidelines>));

//fl.trace(currentGuides);

var additionalGuides = ['<guideline direction="v">' + -(stageW/2) + '</guideline>','<guideline direction="h">' + -(stageH/2) + '</guideline>','<guideline direction="v">' + (stageW - stageW/2) + '</guideline>','<guideline direction="h">' + (stageH - stageH/2) + '</guideline>'];

for(var i = 0; i < additionalGuides.length; i++)
{
	currentGuides.appendChild(new XML(additionalGuides[i]));
}

//fl.trace(currentGuides);

currentTimeline.setGuidelines(new XML(currentGuides));