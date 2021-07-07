function httpPostRequest(url, body, errorMsg, callback) {
	var http = new XMLHttpRequest();
	http.open('POST', url, true);
	http.setRequestHeader('Content-type', 'application/json');
	http.addEventListener('readystatechange', processRequest, false);
	http.send(JSON.stringify(body));

	function processRequest() {
		if (http.readyState == 4) {
			if (http.status == 200) {
				try {
					callback(JSON.parse(http.responseText));
				} catch (e) {
					callback();
				}
			} else {
				console.warn(errorMsg);
				console.warn(http.responseText);
			}
		}
	}
}

function runPrem() {
    var signal = document.getElementById("precheck").value;
    httpPostRequest(
            'api-interface/precheck',
            {signal: signal},
           );
    
}
function runStart() {
    var signal = document.getElementById("start").value;
    httpPostRequest(
            'api-interface/startbtn',
            {signal: signal},
           );
    
}
function runStop() {
    var signal = document.getElementById("stop").value;
    httpPostRequest(
            'api-interface/stopbtn',
            {signal: signal},
           );
    
}