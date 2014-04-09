
		var currentView = "#wakaHome";

		$("ul.nav a").click(function() {
			$(currentView).removeClass("active");
			$(currentView).addClass("hidden");
			var showit = $(this).attr("rel");
			console.log("shifting view to: "+showit);
			$("#"+showit).removeClass("hidden");
			$("#"+showit).addClass("active");
			$("#"+showit).trigger("click");
			currentView = "#"+showit;
			return false;
		});
		
		$("#wakaInfo").click(function() {
			console.log("getting the data from server, foo");
			$.ajax({
				type: "GET",
				url: "http://www.thebrunchguide.com/waka/news.json.php",
				crossDomain: true,
				contentType: "application/json; charset=utf-8",
				dataType: "jsonp",
				jsonpCallback: "someCallBackString",
				success: function(data) {
					console.log("Got me some data for the wakaInfo div");
					$("#safetyAlerts").html(data['safetyAlerts']);
					$("#stageChanges").html(data['stageChanges']);
					$("#vendorSpecials").html(data['vendorSpecials']);
					console.log(data);
				},
				error: function() {
					console.log(this);
					alert("DOH!");
				}
			});
		});


		$("#wakaSchedule").click(function() {
			console.log("getting the data from server, foo");
			$.ajax( {url : "http://www.wakarusa.com/stage-schedule-mobile/?"+(math.random()*100),
				success : function(data) {
					console.log("Got me some data for the wakaSchedule div");
					$("#liveSchedule").html(data);
					//console.log(data);
				},
				error : function() {
					console.log("ERROR");
					$("#liveSchedule").html("Missing Schedule Data");
					//console.log(data);
				}, 
				dataType: "html"
			});
		});



		$("#wakaCampsite").click(function() {
			console.log("getting geolocation from phone");
			var onSuccess = function(position) {
				console.log("got some geolocation");
				$("#yourLocation b").html(
						 ('Latitude: '          + position.coords.latitude          + '\n' +
				          'Longitude: '         + position.coords.longitude         + '\n' +
				          'Altitude: '          + position.coords.altitude          + '\n' +
				          'Accuracy: '          + position.coords.accuracy          + '\n' +
				          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
				          'Heading: '           + position.coords.heading           + '\n' +
				          'Speed: '             + position.coords.speed             + '\n' +
				          'Timestamp: '         + position.timestamp                + '\n'
				          )
				);
				
				// onError Callback receives a PositionError object
				//
				function onError(error) {
				    alert('code: '    + error.code    + '\n' +
				          'message: ' + error.message + '\n');
				    console.log("geoloc fetch error: " + error.message + "");
				}
				
				navigator.geolocation.getCurrentPosition(onSuccess, onError);
			}
		});