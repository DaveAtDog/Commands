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




