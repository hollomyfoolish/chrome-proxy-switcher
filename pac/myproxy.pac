function FindProxyForURL(url, host) {	
	// return "PROXY 4.5.6.7:8080; PROXY 7.8.9.10:8080"
	// return "DIRECT";
	// return "HTTP proxy.pvgl.sap.corp:8080";
	
	// normalize
	url = url.toLowerCase();
	if(url.startsWith('http://')){
		url = url.substring(7);
	}else if(url.startsWith('https://')){
		url = url.substring(8);
	}
	
	// only google need the proxy
	var urlList = [/^.+\.youtube\.com/, /^.+\.google\.com/];
	for(var i = 0; i < urlList.length; i++){
		if(urlList[i].test(url)){
			return "PROXY proxy.pvgl.sap.corp:8080";
		}
	}
	return "DIRECT";
}