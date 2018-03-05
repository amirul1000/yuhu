   function createCookie(name,value,days) {
	      var thirtyDays = 1000*60*60*24*days;
          var expires = new Date((new Date()).valueOf() + thirtyDays);
	      document.cookie = name+"="+value+"; " + expires + ";domain=;path=/";
     }
function readCookie(name) {
	try {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
		}
		catch(err) {
		   return null;
		}
	return null;
}
function eraseCookie(name) {
	createCookie(name,"",-1);
}