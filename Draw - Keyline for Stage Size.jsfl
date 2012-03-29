﻿// JSFL
var doc = fl.getDocumentDOM();

var stageH = doc.height;
var stageW = doc.width;


// draw rectangle
/*
doc.addNewLine({x:0, y:0}, {x:stageW, y:0});
doc.addNewLine({x:stageW, y:0}, {x:stageW, y:stageH});
doc.addNewLine({x:stageW, y:stageH}, {x:0, y:stageH});
doc.addNewLine({x:0, y:stageH}, {x:0, y:0});
*/

doc.addNewRectangle({left:0,top:0,right:stageW,bottom:1},0);
doc.addNewRectangle({left:stageW-1,top:0,right:stageW,bottom:stageH},0);
doc.addNewRectangle({left:0,top:stageH-1,right:stageW,bottom:stageH},0);
doc.addNewRectangle({left:0,top:0,right:1,bottom:stageH},0);

//fill

var myFill = doc.getCustomFill();
myFill.style = "solid";
myFill.color = 0x000000;
doc.setCustomFill(myFill);