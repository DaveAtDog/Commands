// JSFL
var currentTimeline = fl.getDocumentDOM().getTimeline();

var stageH = fl.getDocumentDOM().height;
var stageW = fl.getDocumentDOM().width;

var currentGuides = new XML(currentTimeline.getGuidelines());

// clear guides
currentTimeline.setGuidelines(new XML(<guidelines></guidelines>));

//fl.trace(currentGuides);

var additionalGuides = ['<guideline direction="v">0</guideline>','<guideline direction="h">0</guideline>'];

for(var i = 0; i < additionalGuides.length; i++)
{
	currentGuides.appendChild(new XML(additionalGuides[i]));
}

//fl.trace(currentGuides);

currentTimeline.setGuidelines(new XML(currentGuides));