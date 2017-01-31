// Initialize your app
// template7Pages: true,
var myApp = new Framework7({
	material: true, //enable Material theme
	modalTitle: 'AuroSave',
	pushstate: true,
	modalButtonOk: 'OK',
	modalButtonCancel: 'Cancel',
	allowDuplicateUrls: true, // allow loading of new pages that have same url as currently "active" page in View
});
	
// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
});

// Ajax setting for timeout
  $$.ajaxSetup({
	// cache: false,
	crossDomain: true, // don't know if it's working for CORS properly, on localhost - CORS failed during ajax form submit, regular submit ok
	timeout: 9000, // 9 seconds, same as timeout in  ptrContent.on setTimeout
	error: function(xhr) {
		myApp.hideProgressbar();
		var status = xhr.status;
		myApp.alert( "Check Internet connection" , 'Network Error', function () {
			$$(".back").click();
			});
	}
});

// Back Button! Call onDeviceReady when PhoneGap is loaded. At this point, the document has loaded but phonegap-1.0.0.js has not. When PhoneGap is loaded and talking with the native device, it will call the event deviceready.
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() { // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
	
	document.addEventListener("backbutton", onBackKeyDown, false); // Register the event listener backButton
	// initPushwoosh();
	
// uuid
	// Get UUID
 	window.plugins.uniqueDeviceID.get(successUuid, failUuid);
 	function successUuid(uuid)
	{
		// myApp.alert(uuid);
		localStorage.setItem("uuid",uuid);
		// myApp.alert("uuid localstorage: " + localStorage.getItem("uuid"));
		var uuid = uuid;
	};

	function failUuid(uuid)
	{
		myApp.alert('no UUID!');
	};   
	
}


/* var successUuid = function(uuid) {
	myApp.alert(uuid);
	localStorage.setItem("uuid",uuid);
	// myApp.alert("uuid localstorage: " + localStorage.getItem("uuid"));
};

var failUuid = function(uuid) {
	myApp.alert('no UUID!');
}; */

 
 
// myApp.onPageInit('*', function(page){
myApp.onPageAfterAnimation('*', function(page){
	if (localStorage.getItem("token") === null) {
		var panelContent = '<div class="list-block"><div class="list-group"><ul><a href="index.html"><li class="item-content list-panel-addnews close-panel item-link"><div class="item-media"><i class="icon icon-person-black"></i></div><div class="item-inner"><div class="item-title">Log In / Sign Up</div></div></li></a><a href="#"><li class="item-content close-panel"><div class="item-media"><i class="icon icon-close-black"></i></div><div class="item-inner"><div class="item-title">Close panel</div></div></li></a></ul></div></div>';
		$$('.panel').html(panelContent);
	}
	
	else {
		// myApp.alert("login ok");
	}
	
}); 

function onBackKeyDown() { // Handle the back button
	if(mainView.activePage.name == "home"){ navigator.app.exitApp(); }
	else { mainView.router.back(); }
}

if(mainView.activePage.name == "home"){ 
	if (localStorage.getItem("token") === null) {
		// myApp.alert("you need to login");
		// mainView.router.loadPage("login.html");
		mainView.router.loadPage("upload.html");
	}
	
	else {
		mainView.router.loadPage("upload.html");
	}

}

myApp.onPageAfterAnimation ('home',function(page){
	if (localStorage.getItem("token") === null) {
		mainView.router.loadPage("login.html");
	}
	
	else {
		mainView.router.loadPage("upload.html");
	}
});


// myApp.onPageInit('upload',function(page){
myApp.onPageAfterAnimation('upload',function(page){
	
	// window.plugins.uniqueDeviceID.get(successUuid, failUuid);
	
	
		// myApp.alert(device.uuid);
	
	
	// Get UUID
/* 	window.plugins.uniqueDeviceID.get(successUuidUpload, failUuidUpload);
	function successUuidUpload(uuid)
	{
		myApp.alert(uuid);
		localStorage.setItem("uuid",uuid);
		// myApp.alert("uuid localstorage: " + localStorage.getItem("uuid"));
	};

	function failUuidUpload(uuid)
	{
		myApp.alert('no UUID!');
	};  */
	
    // myApp.alert("uuid localstorage: " + localStorage.getItem("uuid"));

	
	if (localStorage.getItem("email") === null) {
		// mainView.router.loadPage("login.html");
		document.getElementById('emailSettings').value = localStorage.getItem("uuid");
	}
	
	else {
		// mainView.router.loadPage("upload.html");
		document.getElementById('emailSettings').value = localStorage.getItem("email");
	}
	
	document.getElementById('tokenSettings').value = localStorage.getItem("token");
	document.getElementById('sendUploadButton').disabled = 'disabled';
	
    // myApp.alert("emailSettings: " + document.getElementById('emailSettings').value);
	
	
	
/* 	
	cordova.plugins.diagnostic.isLocationAvailable(function(available){
    console.log("Location is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});
	
 */	
	
	
	
	// navigator.geolocation.getCurrentPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
	
	// navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
	// myApp.alert(document.getElementById('emailSettings').value);
	// myApp.alert(document.getElementById('tokenSettings').value);
	// myApp.alert("upload");
	// document.getElementById('sendUploadButton').disabled = 'disabled';
	
/* 	
	cordova.plugins.diagnostic.isLocationAvailable(function(available){
    // console.log("Location is " + (available ? "available" : "not available"));
    myApp.alert("Location is " + (available ? "available" : "not available"));
	}, function(error){
		// console.error("The following error occurred: "+error);
		myApp.alert("The following error occurred: "+error);
	});
	 */	
	 
	 
	 
/* 	
	cordova.plugins.locationAccuracy.request(function (success){
		// console.log("Successfully requested accuracy: "+success.message);
		myApp.alert("Successfully requested accuracy: "+success.message);
	}, function (error){
		console.error("Successfully requested accuracy: "+success.message);
		if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED){
			if(window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")){
				cordova.plugins.diagnostic.switchToLocationSettings();
			}
		}
	}, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
 */


	
});

function refreshPosition() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	// myApp.alert('Refresh');	
}

myApp.onPageInit('history',function(page){
	
	var userEmail = localStorage.getItem("email");
	var token = localStorage.getItem("token");
	var uuid = localStorage.getItem("uuid");
	
	// http://api.aurosave.com/v1/history.php?emailSettings=4blogga@gmail.com&tokenSettings=d9b1d7db4cd6e70935368a1efb10e377
	// $$.get('http://api.aurosave.com/v1/history.php', {emailSettings:userEmail, tokenSettings:token, uuidSettings:uuid}, function (data) {
	$$.get('http://api.aurosave.com/v1/historyuuid.php', {emailSettings:userEmail, tokenSettings:token, uuidSettings:uuid}, function (data) {
	// $$.get('http://api.aurosave.com/v1/history.php?emailSettings=4blogga@gmail.com&tokenSettings=d9b1d7db4cd6e70935368a1efb10e377', {emailSettings:'4blogga@gmail.com', tokenSettings:'d9b1d7db4cd6e70935368a1efb10e377'}, function (data) {
	$$('.page-content').html(data);
	});
	
});


myApp.onPageInit('forgot',function(page){
	
	$$('form.ajax-submit').on('submitted', function (e) {
		var xhr = e.detail.xhr; // actual XHR object
		var signupdata = e.detail.data.replace(/(\r\n|\n|\r)/gm,""); // Ajax response from action file
		
		// localStorage.setItem("token",upassInput.replace(/(\r\n|\n|\r)/gm,""));
		
		if (signupdata == 'Check your e-mail or SMS to get new Password') {
			
			
			// var txtemailInputSignup = document.getElementById('txtemailsignup').value;
			// localStorage.setItem("email",txtemailInputSignup);
			// mainView.router.loadPage("verify.html");
			
			myApp.alert(signupdata);	
			localStorage.clear();
			mainView.router.loadPage("login.html");
			}
		else {
			// document.getElementById('signupResult').innerHTML = signupdata;
			myApp.alert(signupdata);	
		}		
	});
	
});



// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
var onSuccess = function(position) {
    // alert('Latitude: '          + position.coords.latitude          + '\n' +
          // 'Longitude: '         + position.coords.longitude         + '\n' +
          // 'Altitude: '          + position.coords.altitude          + '\n' +
          // 'Accuracy: '          + position.coords.accuracy          + '\n' +
          // 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          // 'Heading: '           + position.coords.heading           + '\n' +
          // 'Speed: '             + position.coords.speed             + '\n' +
          // 'Timestamp: '         + position.timestamp                + '\n');
		  
	// var jsonURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDiZegbNO1OXvmTnWIg3QLtEWkglpWCzVQ';
	var jsonURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyDiZegbNO1OXvmTnWIg3QLtEWkglpWCzVQ';
	$$.getJSON(jsonURL, function (json) {
		console.log(json['results'][0]['formatted_address']);
		document.getElementById('uploadCoords').innerHTML = json['results'][0]['formatted_address'];
	});
};

// onError Callback receives a PositionError object
function onError(error) {
    // alert('code: '    + error.code    + '\n' +
          // 'message: ' + error.message + '\n');
		  
	// myApp.alert('Please enable location to use\n' +
				// 'code: '    + error.code    + '\n' +
				// 'message: ' + error.message + '\n');	 

				  
	myApp.alert('Please enable location to use');	
}


myApp.onPageInit('signup',function(page){		
	document.getElementById('submitSignupButton').disabled = 'disabled';
	

	$$('input[name="confpass"]').on('keyup keydown change', function (e) { 
		var txtpassVal = $$('#txtpass').val();
		var confpassVal = $$('#confpass').val();
		if (txtpassVal == confpassVal ) {
			document.getElementById('signupResult').innerHTML = 'Passwords are the same';
			document.getElementById('submitSignupButton').disabled = false;
			
			// myApp.alert('txtemailInputSignup' + txtemailInputSignup);
		}
		else {
			document.getElementById('submitSignupButton').disabled = 'disabled';
			document.getElementById('signupResult').innerHTML = 'Passwords are NOT the same';


		}
	});
	
	$$('form.ajax-submit').on('submitted', function (e) {
		var xhr = e.detail.xhr; // actual XHR object
		var signupdata = e.detail.data; // Ajax response from action file
		
		if (signupdata == 'Success!') {
			
			
			var txtemailInputSignup = document.getElementById('txtemailsignup').value;
			localStorage.setItem("email",txtemailInputSignup);
			mainView.router.loadPage("verify.html");
			}
		else {
			document.getElementById('signupResult').innerHTML = signupdata;
		}		
	});

});

myApp.onPageInit('verify',function(page){	

	document.getElementById('txtemailverify').value = localStorage.getItem("email");	

	$$('form.ajax-submit').on('submitted', function (e) {
		var xhr = e.detail.xhr; // actual XHR object
		var data = e.detail.data; // Ajax response from action file
		var upassInput = data.substr(18);
		var our_string = data;	
		if(our_string.indexOf('User Logged in ok') + 1) {
		   // console.log(data);
			
		var txtemailInput = document.getElementById('txtemailverify').value;	
		localStorage.setItem("email",txtemailInput);
		// localStorage.setItem("token",upassInput.trim)
		localStorage.setItem("token",upassInput.replace(/(\r\n|\n|\r)/gm,""));
		mainView.router.loadPage("upload.html");
			
		}else{
			// document.getElementById('verifyResult').innerHTML = data;
			myApp.alert("Error: " + data);
		}	
			
	});

});


myApp.onPageInit('settings', function (page) {

	document.getElementById('submitSettingsButton').disabled = 'disabled';

	
	
	var userEmailGet = localStorage.getItem("email");
	var tokenGet = localStorage.getItem("token");
	
	$$.get('http://api.aurosave.com/v1/info.php', {emailSettingsChange:userEmailGet, tokenSettingsChange:tokenGet}, function (data) {
		
	// http://api.aurosave.com/v1/info.php?emailSettingsChange=4blogga@gmail.com&tokenSettingsChange=d9b1d7db4cd6e70935368a1efb10e377
	// $$.get('http://api.aurosave.com/v1/history.php?emailSettings=4blogga@gmail.com&tokenSettings=d9b1d7db4cd6e70935368a1efb10e377', {emailSettings:'4blogga@gmail.com', tokenSettings:'d9b1d7db4cd6e70935368a1efb10e377'}, function (data) {
	// $$('.page-content').html(data);
	// myApp.alert(data.firstName);
	
	var jsonSettings = JSON.parse ( data );
	
	myApp.showIndicator();
	document.getElementById('firstname').value = jsonSettings.firstName;
	document.getElementById('lastname').value = jsonSettings.lastName;
	document.getElementById('address').value = jsonSettings.address;
	myApp.hideIndicator();
	});
	
	// myApp.showPreloader();
	// myApp.hidePreloader();
	
	// var tokenHid = localStorage.getItem("token");
	// var emailHid = localStorage.getItem("email");
	
	
	document.getElementById('emailSettingsChange').value = localStorage.getItem("email");
	document.getElementById('tokenSettingsChange').value = localStorage.getItem("token");
	
	// document.getElementById('firstname').value = localStorage.getItem("firstname");
	// document.getElementById('lastname').value = localStorage.getItem("lastname");
	// document.getElementById('address').value = localStorage.getItem("address");
	
	// document.getElementById('emailSettingsChange').value = 'tokenHid';
	// document.getElementById('tokenSettingsChange').value = emailHid;
	// document.getElementById('firstname').value = '1112222222222';
	// myApp.alert("email: " + document.getElementById('emailSettings').value + "\ntoken: " + document.getElementById('tokenSettings').value);
	
	$$('input[name="newpassword"]').on('keyup keydown change', function (e) {
		var txtpassVal = $$('#newpassword').val();
		var confpassVal = $$('#confirmnewpassword').val();
		if (txtpassVal == confpassVal ) {
		document.getElementById('servSettings').innerHTML = 'Passwords are the same';
		
		
		document.getElementById('submitSettingsButton').disabled = false;
		}
		else {
			document.getElementById('submitSettingsButton').disabled = 'disabled';
		document.getElementById('servSettings').innerHTML = 'Passwords are NOT the same';
		}
	});
	
	$$('input[name="confirmnewpassword"]').on('keyup keydown change', function (e) {
		document.getElementById('submitSettingsButton').disabled = 'disabled';
		var txtpassVal = $$('#newpassword').val();
		var confpassVal = $$('#confirmnewpassword').val();
		if (txtpassVal == confpassVal ) {
			document.getElementById('servSettings').innerHTML = 'Passwords are the same';
			document.getElementById('submitSettingsButton').disabled = false;
		}
		else {
			document.getElementById('submitSettingsButton').disabled = 'disabled';
			document.getElementById('servSettings').innerHTML = 'Passwords are NOT the same';
		}
	});
	
	$$('input[name="oldpassword"]').on('keyup keydown change', function (e) {
		document.getElementById('submitSettingsButton').disabled = false;
		// var txtpassVal = $$('#newpassword').val();
		// var confpassVal = $$('#confirmnewpassword').val();
		// if (txtpassVal == confpassVal ) {
			// document.getElementById('servSettings').innerHTML = 'Passwords are the same';
			// document.getElementById('submitSettingsButton').disabled = false;
		// }
		// else {
			// document.getElementById('submitSettingsButton').disabled = 'disabled';
			// document.getElementById('servSettings').innerHTML = 'Passwords are NOT the same';
		// }
	});

	$$('form.ajax-submit').on('submitted', function (e) {
		myApp.showIndicator();
		var xhr = e.detail.xhr; // actual XHR object
		var data = e.detail.data; // Ajax response from action file
		// console.log("data: " + data);
		// document.getElementById('servSettings').innerHTML = data;
		var upassInput = data.substr(12);
		var our_string = data;	
		myApp.hideIndicator();
		if(our_string.indexOf('New token') + 1) {
			myApp.alert('Password and Settings updated');
			localStorage.setItem("token",upassInput)
			mainView.router.loadPage("upload.html");
		}else if(our_string.indexOf('Error') + 1) {
			myApp.alert(data);
			
			console.log('settings error: ' + data);

		}else{
			
			// var firstname = document.getElementById('firstname').value;
			// var lastname = document.getElementById('lastname').value;
			// var address = document.getElementById('address').value;
			
			
			// localStorage.setItem("firstname",firstname);
			// localStorage.setItem("lastname",lastname);
			// localStorage.setItem("address",address);
			
			myApp.alert('Settings updated');
			mainView.router.loadPage("upload.html");
		}	
	

	});
});  

myApp.onPageInit('loginext', function (page) {
	$$('form.ajax-submit').on('submitted', function (e) {
		var xhr = e.detail.xhr; // actual XHR object
		var data = e.detail.data; // Ajax response from action file
		// document.getElementById('servResultLogin').innerHTML = data;
		
		var txtemailInput = document.getElementById('txtemail').value;
		
		var upassInput = data.substr(18);
		var our_string = data;	
		// console.log("data: " + data);
		// console.log("our_string: " + data);
		// console.log("upassInput: " + data);
		
		// if(our_string.indexOf('User Logged in ok') + 1) {
		if(our_string.indexOf('User Logged in ok') + 1) {
			// myApp.alert("User Logged in ok");
			
			localStorage.setItem("email",txtemailInput);
			localStorage.setItem("token",upassInput);
			
			var panelContent = '<div class="list-block"><div class="list-group"><ul><a href="index.html"><li class="item-content list-panel-addnews close-panel item-link"><div class="item-media"><i class="icon icon-home-black"></i></div><div class="item-inner"><div class="item-title">Home</div></div></li></a><a href="history.html"><li class="item-content list-panel-addnews close-panel item-link"><div class="item-media"><i class="icon icon-folder-open-black"></i></div><div class="item-inner"><div class="item-title">History</div></div></li></a><a href="about.html"><li class="item-content list-panel-addnews close-panel item-link"><div class="item-media"><i class="icon icon-info-black"></i></div><div class="item-inner"><div class="item-title">About</div></div></li></a><a href="settings.html"><li class="item-content list-panel-addnews close-panel item-link"><div class="item-media"><i class="icon icon-form-settings"></i></div><div class="item-inner"><div class="item-title">Settings</div></div></li></a><a href="#" onclick="logOutClear();"><li class="item-content list-panel-addnews close-panel item-link"><div class="item-media"><i class="icon icon-person-black"></i></div><div class="item-inner"><div class="item-title">Logout</div></div></li></a><a href="#"><li class="item-content close-panel"><div class="item-media"><i class="icon icon-close-black"></i></div><div class="item-inner"><div class="item-title">Close panel</div></div></li></a> </ul></div></div>';
			$$('.panel').html(panelContent);
			
			mainView.router.loadPage("index.html");
			
		} else if (data == 'User NOT activated!') {
			mainView.router.loadPage("verify.html");
		}else {
		myApp.alert("Error: " + data);
			// document.getElementById('verifyResult').innerHTML = data;
		}	
	});
});  

// logout
function logOutClear() {
	// localStorage.clear();
	localStorage.removeItem('token');
	localStorage.removeItem('email');
	localStorage.clear();
	myApp.alert('You logged out');
	// mainView.router.loadPage("login.html");
	mainView.router.loadPage("upload.html");
}


/**  * Take picture with camera  */
function takePicture() {
	navigator.camera.getPicture(
		function(uri) {
			var img = document.getElementById('camera_image');
			// var img = document.getElementById('camera_icon_image');
			img.style.visibility = "visible";
			img.style.display = "block";
			img.src = uri;
			// document.getElementById('camera_status').innerHTML = "Success";
			// alert(uri);
			document.getElementById('sendUploadButton').disabled = false;

		},
		function(e) {
			myApp.alert('Capture error: ' + e);
			// console.log("Error getting picture: " + e);
		},
		{ quality: 75, targetWidth: 1920, targetHeight: 1080, destinationType: navigator.camera.DestinationType.FILE_URI});
		
		document.getElementById('sendUploadButton').disabled = false;
};



/**  * BEST Select picture from album  */
function selectPicture() {
	
	navigator.camera.getPicture(
		function(uri) {
			if (uri.substring(0,21)=="content://com.android") {
				photo_split=uri.split("%3A");
				uri="content://media/external/images/media/"+photo_split[1];
			}
			var img = document.getElementById('camera_image');
			img.style.visibility = "visible";
			img.style.display = "block";
			img.src = uri;
		},
		function(e) {
			myApp.alert('Error taking a picture<br />Restart and try again please.<br />' + e);
		},
		{ quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM});
};



				/* function testPicture() {
					var loc = document.getElementById('uploadCoords').innerHTML;
					
					// myApp.alert(loc);	
					if (!loc) {
						myApp.alert('Please enable location to use');
					}
					
				} */


/**  * Upload current picture  */


function uploadPicture() {
	var loc = document.getElementById('uploadCoords').innerHTML;
	
	// Get URI of picture to upload
	var img = document.getElementById('camera_image');
	var imageURI = img.src;
	
	// var imageURI = "c:\000.jpg";
	
		// myApp.alert('img.src:' + img.src);
	
	if (!loc) {
		myApp.alert('Please enable location to use');	
		}
	else {
	// Verify server has been entered
	// server = document.getElementById('serverUrl').value;
		var server = 'http://api.aurosave.com/v1/uploaduuid.php';
		if (server) {
			
			// Specify transfer options
			var options = new FileUploadOptions();
			options.fileKey="file";
			options.fileName = (new Date).getTime()+".jpg";
			options.mimeType="image/jpeg";
			options.chunkedMode = false;
			
			var params = new Object();
			params.comment = document.getElementById('comment').value;
			params.emailSettings = document.getElementById('emailSettings').value;
			
			// myApp.alert("emailSettings: " + document.getElementById('emailSettings').value);
			
			
			params.tokenSettings = document.getElementById('tokenSettings').value;
			params.uploadCoords = document.getElementById('uploadCoords').innerHTML;
			options.params = params;
			// myApp.alert(params.uploadCoords);
			
			// Transfer picture to server
			myApp.showPreloader('Sending image...');
			
				var ft = new FileTransfer();
				ft.upload(imageURI, server, function(r) {
				// document.getElementById('uploadResult').innerHTML = "Upload successful: "+r.bytesSent+" bytes uploaded.";  
				document.getElementById("imageurl").value = options.fileName;
				// document.getElementById('uploadResult').innerHTML = r.response;
				
					
					
				myApp.hidePreloader();
				myApp.alert('Photo sent succefully','Thanks!');
				document.getElementById("imageurl").value = null;
				// mainView.router.loadPage("history.html");
				
				
			}, function(error) {
				// document.getElementById('uploadResult').innerHTML = "Upload failed: Code = "+error.code;            	
				myApp.hidePreloader();
				myApp.alert('Error:<br />'+error.code);
			}, options);
		}
	}
}

/**
 * View pictures uploaded to the server
 */
function viewUploadedPictures() {
	
	// Get server URL
	server = document.getElementById('serverUrl').value;
	if (server) {
		
		// Get HTML that lists all pictures on server using XHR	
		var xmlhttp = new XMLHttpRequest();

		// Callback function when XMLHttpRequest is ready
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState === 4){

				// HTML is returned, which has pictures to display
				if (xmlhttp.status === 200) {
					document.getElementById('server_images').innerHTML = xmlhttp.responseText;
				}

				// If error
				else {
					document.getElementById('server_images').innerHTML = "Error retrieving pictures from server.";
				}
			}
		};
		xmlhttp.open("GET", server , true);
		xmlhttp.send();       	
	}	
}