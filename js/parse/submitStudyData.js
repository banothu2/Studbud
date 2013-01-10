Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

var currentUser = Parse.User.current(); //Checks to see if user is logged in
	if(currentUser){
		// when logged in:

		$(document).ready(//Wait for document to be ready
			function submitOrder() {

					var User = Parse.Object.extend("User");

					var firstName = Parse.User.current().get("firstName");
					var lastName = Parse.User.current().get("lastName");
					$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class=''><a href='../docs/maps.html'>Maps</a></li><li class=''><a href='../docs/students.html'>Students Alike</a></li><li class='active'><a href='../docs/submitLocation.html'>Submit your Study Location</a></li><li class=''><a href='../docs/tutorView.html'>View Tutors</a></li><li class=''><a href='../docs/tutorMap.html'>Tutors Map</a></li><li class=''><a href='../docs/tutorSubmit.html'>Submit your Tutor Location</a></li><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + firstName +" " + lastName + "<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='../auth/courses.html'>Change Courses</a></li><li><a href='../auth/settings.html'>Settings</a></li><li><a id='clickedLogOut'>Log Out</a></li><li class='divider'></li><li class='nav-header'>Tutors</li><li><a href='../auth/tutorProfile.html'>Tutor Profile</a></li><li><a href='../docs/feedback.html'>Submit Feedback</a></li></ul></li></ul>");

					$("#clickedLogOut").click(
						function logOut(){
							Parse.User.logOut();
							window.location.replace("../auth/logIn.html");

						}
						);

				var User = Parse.Object.extend("User");
				var query = new Parse.Query(User);

				query.find({
					success: function(){
						var firstName = Parse.User.current().get("firstName");
						var lastName = Parse.User.current().get("lastName");
						$("#inputNameParse").empty();
						$("#inputNameParse").append("<input class='input-medium search-query' id='inputName' type='text' value='" + firstName + " " + lastName+"' disabled></input>");
					
						var courseOne = Parse.User.current().get("courseOne") || "Independent Study";
						var courseTwo = Parse.User.current().get("courseTwo") || "Independent Study";
						var courseThree = Parse.User.current().get("courseThree") || "Independent Study";
						var courseFour = Parse.User.current().get("courseFour") || "Independent Study";
						var courseFive = Parse.User.current().get("courseFive") || "Independent Study";
						var courseSix = Parse.User.current().get("courseSix") || "Independent Study";
						var courseSeven = Parse.User.current().get("courseSeven") || "Independent Study";

						$("#inputSubject").empty();
						$("#inputSubject").append("<select class='span3' id='inputSubject'><option>"+courseOne + "</option><option>" + courseTwo+ "</option><option>" + courseThree+ "</option><option>" + courseFour + "</option><option>" + courseFive + "</option><option>" + courseSix + "</option><option>" + courseSeven+ "</option></select>");

					}
				})
                      $('#viewOnMap').click(function(){
                      		$("#mapStatic").empty();
                        var url = GMaps.staticMapURL({
                          size: [610, 350],
                          zoom: 16,
                          lat: $("#inputLatitude").val(),
                          lng: $("#inputLongitude").val(),
                          markers: [
                            {lat: $("#inputLatitude").val(), lng: $("#inputLongitude").val(), color: 'blue'}
                          ]
                        });
                        $('<img/>').attr('src', url).appendTo('#mapStatic');
                      });




					$("buttonSubmit").click(

						function submitMapper(){

			//				Parse.User.logIn($("#inputUsername").val(), $("#inputPassword").val(), {
							var Map = Parse.Object.extend("Map");
							var Map = new Map();
							 			                

							var d = new Date();
                			var dateCheck = d.getTime();
                			if($("#inputLatitude").val()== "" || $("#inputLongitude").val() == ""){
                				$("#error").empty();
							   	$("#error").append("<div class='alert alert-error'>Oh oh! The location is missing!</div>")

                			}
                			else{

							Map.save({

							  universityId: Parse.User.current().relation("Universities").parent.get("universityId"),
							  userId: Parse.User.current(),
							  address: $("#inputAddress").val(),
							  latitude: $("#inputLatitude").val(),
							  longitude: $("#inputLongitude").val(),
							  name: $("#inputName").val(),
							  subject: $("#inputSubject option:selected").val(),
							  startTime: $("#inputStart").val(),
							  endTime: $("#inputEnd").val(),
							  notes: $("#inputNotes").val(),
							  contact: $("#inputContact").val(),
							  date: dateCheck
							  
							}, {
							  success: function(map) {
							    // The object was saved successfully.
							   	$("#error").empty();
							   	$("#error").append("<div class='alert alert-success'>Your submission has been successfully recorded and added to the map!</div>")
							  },
							  error: function(map, error) {
							    // The save failed.
							   	$("#error").empty();
							   	$("#error").append("<div class='alert alert-error'>Oh oh! Something went wrong! Please try again. </div>")
							    // error is a Parse.Error with an error code and description.
							  }
							}); 
							}

						}	
					)

			}
		);
	}	
	else {
		// redirect to login page 
		window.location.replace("../auth/logIn.html");
	}