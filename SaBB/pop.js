if(localStorage.getItem('savewords')){
	//document.getElementById("on1").style.backgroundColor = localStorage.getItem('Wcolor');
	 document.getElementById("txx").value=localStorage.getItem('savewords');
	}

function mys(){
	let te=document.getElementById('q').value;
	if(te.length<1){
		chrome.tabs.update({ url: "https://praybook2.blogspot.com/" });
		
	}else{
	let teurl=encodeURIComponent(te+" site:blogspot.com -User Profile -google+ OR site:blogger.com -User Profile -google+");
	//let vakio=encodeURIComponent("site:blogspot.com"); 
	//var texti="rrr"
	//console.log("ee");//ei toimi täällä
	let newURL = 'https://www.google.com/search?q=' + teurl+'&btnI';
	 //chrome.tabs.create({ url: newURL });
	 chrome.tabs.update({ url: newURL });
	//alert(newURL); // tää toimii vaihda se yksi nappi tämän tyyliseksi siittä puuttuu site
	}

	
	}
function solif(){
//document.getElementById('l_home').href="lil"
//otetaan nykyinen url
 //chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
//var tabs= window.location.href;
//chrome.tabs.getCurrent(function(tabs){var tap=tabs.url;alert(tap);});
 
 chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    let url = tabs[0].url;
	//alert(url);
	localStorage.setItem('Freetaburlasdw',url);
	//seuraavaksi tää laitetaan storageen jolla sitten uudelleen nauhoitetaan linkki jos storagw ei tyhjä
});

 

}
function factor(){
	if(localStorage.getItem('Freetaburlasdw')) {
	localStorage.removeItem('Freetaburlasdw');	
	}
	if(localStorage.getItem('OFreetaburlasdw')) {
	localStorage.removeItem('OFreetaburlasdw');	
	}
	

	
}
function shc1(){
	if(localStorage.getItem('Wborders')){
		localStorage.removeItem('Wborders');	
		chrome.storage.sync.set({"Wborders": 'none'}, function() {
     
    });
	}else{
	localStorage.setItem('Wborders',"solid");	
chrome.storage.sync.set({"Wborders": 'solid'}, function() {
     
    });
	
	}
	
	
	
	if(localStorage.getItem('Wcolor')){
		localStorage.removeItem('Wcolor');	
	}else{
	localStorage.setItem('Wcolor',"Crimson");	
	}
	 window.close();
	
	
}
function shc2(){
	if(localStorage.getItem('Tborders')){
		localStorage.removeItem('Tborders');	
		chrome.storage.sync.set({"Tborders": 'none'}, function() {
     
    });
	}else{
	localStorage.setItem('Tborders',"solid");	
chrome.storage.sync.set({"Tborders": 'solid'}, function() {
     
    });
	
	}
	
	
	
	if(localStorage.getItem('Tcolor')){
		localStorage.removeItem('Tcolor');	
	}else{
	localStorage.setItem('Tcolor',"Crimson");	
	}
	 window.close();
	
	
}
function savew(){
let ilt = document.getElementById("txx").value;	

localStorage.setItem('savewords',ilt);	

chrome.storage.sync.set({"savewordsc": ilt}, function() {
     
    });
	//alert(localStorage.getItem('savewords'));
	window.close();
}
document.getElementById("but").addEventListener('click', mys);
document.getElementById("anch").addEventListener('click', solif);
document.getElementById("home").addEventListener('click', factor);

document.getElementById("on1").addEventListener('click', shc1);
document.getElementById("on2").addEventListener('click', shc2);

document.getElementById("save").addEventListener('click', savew);