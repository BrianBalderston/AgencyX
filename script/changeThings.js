// JavaScript Document

(function() {
	////"use strict";
	///console.log('fired');
	
	
	var theNavigation = document.querySelectorAll('.main-navigation'),
		theHeader = document.querySelector('.heading'),
		subHeader = document.querySelector('.main-copy h2'),
		contentText = document.querySelector('.main-copy p'),
		theImage = document.querySelector('.main-copy img'),
		appliedClass;
	
	
	function changeElements() 
	{
		////debugger;
		
		theHeader.classList.remove(appliedClass);
		subHeader.classList.remove(appliedClass);
		theImage.classList.remove(appliedClass);
		
		
		theHeader.classList.add(this.id);
		subHeader.classList.add(this.id);
		theImage.classList.add(this.id);
		
		
		///setAttribute.src = dynamicContent[this.id].image;
		
		appliedClass = this.id;
		
		///take the id of the clicked element, 
		//use it to retrieve the correct content and then replace the content on the page.
		subHeader.firstChild.nodeValue = dynamicContent[this.id].headline;
		contentText.firstChild.nodeValue = dynamicContent[this.id].text; ////dynamicContent is in contentObject.js
		theImage.src = dynamicContent[this.id].image;
		
	}
	
	[].forEach.call(theNavigation, function(image) {
		image.addEventListener('click', changeElements, false);
	});
	
	
	// load the content when the page loads
	subHeader.firstChild.nodeValue = dynamicContent['home'].headline;
	contentText.firstChild.nodeValue = dynamicContent['home'].text;
	theHeader.classList.add('home');
	

})();