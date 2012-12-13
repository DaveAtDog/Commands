// JSFL
var dom = fl.getDocumentDOM();

var stageH = dom.height;
var stageW = dom.width;

//fill
var myFill = dom.getCustomFill();
myFill.style = "solid";
myFill.color = 0x000000;
dom.setCustomFill(myFill);

// stroke
// Fix from answer: http://stackoverflow.com/questions/4869979/jsfl-setcustomstroke-does-not-work-with-stroke-style-nostroke
dom.swapStrokeAndFill();
var tempFill = dom.getCustomFill("toolbar");
tempFill.style = "noFill";
dom.setCustomFill(tempFill);
dom.swapStrokeAndFill();

// draw rectangle

dom.addNewRectangle({left:0,top:0,right:stageW,bottom:1},0);
dom.addNewRectangle({left:stageW-1,top:0,right:stageW,bottom:stageH},0);
dom.addNewRectangle({left:0,top:stageH-1,right:stageW,bottom:stageH},0);
dom.addNewRectangle({left:0,top:0,right:1,bottom:stageH},0);