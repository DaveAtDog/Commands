//
// murp
//
// This command was recorded by Adobe Flash CS4.
//

/*
var curSelection = fl.getDocumentDOM().selection[0]; 

if (curSelection)
{ 
    curSelection.x = Math.floor(curSelection.x);
    curSelection.y = Math.floor(curSelection.y);
}
*/

for (var i = 0; i < fl.getDocumentDOM().selection.length; i++)
{
	var curSelection = fl.getDocumentDOM().selection[i];
	
	if (curSelection)
	{
		var storedX = curSelection.x;
		var storedY = curSelection.y;
		
		curSelection.x = Math.floor(storedX);
		curSelection.y = Math.floor(storedY);
	}	
}




