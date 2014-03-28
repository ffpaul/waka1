
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
			url: "http://www.thebrunchguide.com/waka/news.json",
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