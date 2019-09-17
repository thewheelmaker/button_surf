//localStorage.setItem('Freetaburlasdw',url);
if(localStorage.getItem('Freetaburlasdw')) {
	 
	var isithere= localStorage.getItem('Freetaburlasdw');
	
	if(isithere.includes("blogger")||isithere.includes("blogspot")){
	document.getElementById('l_home').href=localStorage.getItem('Freetaburlasdw');
	localStorage.setItem('OFreetaburlasdw',isithere); //vanha
	
	}else{
		if(localStorage.getItem('OFreetaburlasdw')) {
			document.getElementById('l_home').href=localStorage.getItem('OFreetaburlasdw');
			localStorage.setItem('Freetaburlasdw',localStorage.getItem('OFreetaburlasdw'));
			
			
		}
		//alert("You need be in a blogger or a blogspot.");
		
		
		
		
	}
 // populateStorage();
 
}