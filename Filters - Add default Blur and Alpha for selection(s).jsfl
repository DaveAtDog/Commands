// JSFL

var myFilters = fl.getDocumentDOM().getFilters();
var filterName = "blurFilter";

// if there is no blurFilter, add one
if (!test(myFilters,filterName) )
{
	fl.getDocumentDOM().addFilter(filterName);
}

// update filters list
myFilters = fl.getDocumentDOM().getFilters();

for(var i=0; i < myFilters.length; i++)
{ 
    if(myFilters[i].name == filterName)
	{ 
        myFilters[i].blurX = 10; 
        myFilters[i].blurY = 10;
        myFilters[i].quality = 'high';
    } 
}

fl.getDocumentDOM().setFilters(myFilters);




// set the alpha to 0;
for (var i = 0; i < fl.getDocumentDOM().selection.length; i++)
{
	var curSelection = fl.getDocumentDOM().selection[i];
	
	curSelection.colorMode = "alpha"
	curSelection.colorAlphaPercent = 0;
}

function test(_arr, _test)
{
	for(var i=0; i < _arr.length; i++)
	{ 
		if(_arr[i].name == _test)
		{ 
			return true;
		}
	}
	
	return false;
}



