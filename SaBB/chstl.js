 chrome.storage.sync.get(['Wborders'], function(result) {
        //  console.log('Value currently is ' + result.Wborders);
		var  tr12=" border:" +result.Wborders+"; ";
		localStorage.removeItem('Wb');
		localStorage.setItem('Wb',tr12);
       //console.log(tr12);
	   });

chrome.storage.sync.get(['Tborders'], function(result) {
        //  console.log('Value currently is ' + result.Wborders);
		var  tr14=" border:" +result.Tborders+"; ";
		localStorage.removeItem('Tb');
		localStorage.setItem('Tb',tr14);
     // console.log(tr14);
	   });
	   
chrome.storage.sync.get(['savewordsc'], function(result) {
        //  console.log('Value currently is ' + result.Wborders);
		var  tr18=result.savewordsc;
		localStorage.removeItem('Texxt');
		localStorage.setItem('Texxt',tr18);
     // console.log(tr14);
	   });