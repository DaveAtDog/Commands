// JSFL

var flash_doc = fl.getDocumentDOM();
var flash_lib = flash_doc.library;
var flash_tl  = flash_doc.getTimeline();
var flash_w = flash_doc.width;
var flash_h = flash_doc.height;

var result = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/AddGuidline.xml");

//C:\Users\Dave\AppData\Local\Adobe\Flash CS4\en\Configuration\Commands

if (result.dismiss == "accept")
{
	//fl.trace(result.orientation);
	//fl.trace(result.position);
	
	var currentGuides = new XML(flash_tl.getGuidelines());
	
	// Reset guidelines
	flash_tl.setGuidelines(new XML(<guidelines></guidelines>));
	
	var orientation = (result.orientation == 'y') ? 'h' : 'v';
	
	var newGuide = '<guideline direction="' + orientation + '">' + eval(result.position) + '</guideline>';
	
	currentGuides.appendChild(new XML(newGuide));
	
	flash_tl.setGuidelines(new XML(currentGuides));
	
	//fl.trace(currentGuides);
}
