Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

$(document).ready(
	function(){
		var currentUser = Parse.User.current();
			if (currentUser) {
					var User = Parse.Object.extend("User");

					var firstName = Parse.User.current().get("firstName");
					var lastName = Parse.User.current().get("lastName");
					$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class='active'><a href='../docs/maps.html'>Maps</a></li><li class=''><a href='../docs/students.html'>Students Alike</a></li><li class=''><a href='../docs/submitLocation.html'>Submit your Study Location</a></li><li class=''><a href='../docs/tutorView.html'>View Tutors</a></li><li class=''><a href='../docs/tutorMap.html'>Tutors Map</a></li><li class=''><a href='../docs/tutorSubmit.html'>Submit your Tutor Location</a></li><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + firstName +" " + lastName + "<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='../auth/courses.html'>Change Courses</a></li><li><a href='../auth/settings.html'>Settings</a></li><li><a id='clickedLogOut'>Log Out</a></li><li class='divider'></li><li class='nav-header'>Tutors</li><li><a href='../auth/tutorProfile.html'>Tutor Profile</a></li><li><a href='../docs/feedback.html'>Submit Feedback</a></li></ul></li></ul>");

					// code for logout
					$("#clickedLogOut").click(
						function logOut(){
							Parse.User.logOut();
							window.location.replace("../auth/logIn.html");

						}
						);

					// displays study data when button is clicked
					$("#presentStudyData").click(
						function presentStudy(){
					      var Map = Parse.Object.extend("Map");
					      var University = Parse.Object.extend("Universities");
    					  var query = new Parse.Query(Map);

    					  // Obtain current date (in milliseconds since 1970/01/01 and substract 2 days) 
					      var d = new Date();
                		  var dateCheck = d.getTime() - 172800000;

                		  query.equalTo("universityId", Parse.User.current().relation("Universities").parent.get("universityId"));

  						  query.find({
							    success: function(results){
										$("#studyDataTable").empty();
										$("#studyDataTable").append("<thead><tr><th>First Name</th><th>Last Name</th><th>Subject</th><th>Date</th><th>Starting</th><th>Ending</th><th>Notes</th><th>Contact</th><th>Location</th></tr></thead>");

							          for (var i = 0; i < results.length; i++) {

							            // Access Relational Data
							            var userInfo = results[i].get("userId") || "";
							            var firstName;
							            var lastName;

						            	userInfo.fetch({
						            		success: function(userInfo){
						            			firstName = userInfo.get("firstName") || "";
						            			lastName = userInfo.get("lastName") || "";
						            		}
						            	});
							            

										//Get direct data
							            var address = results[i].get("address") || "No address available";
							            var contact = results[i].get("contact") || "";
							            var date = results[i].get("date") || "";
							            var ending = results[i].get("endTime") || "";
							            var latitude = results[i].get("latitude") || "";
							            var longitude = results[i].get("longitude") || "";
							            var notes = results[i].get("notes") || "";
							            var starting = results[i].get("startTime") || "";
							            var subject = results[i].get("subject") || "";
							            // Check against date for latest
							            // used for conversion purposes 
							            var dateConvert = new Date(date);
							            // Array of Month names. January is monthNames[0], etc.
							            var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

							            if(date > dateCheck && ((subject == Parse.User.current().get("courseOne")) || (subject == Parse.User.current().get("courseTwo")) || (subject == Parse.User.current().get("courseThree")) || (subject == Parse.User.current().get("courseFour")) || (subject == Parse.User.current().get("courseFive")) || (subject == Parse.User.current().get("courseSix")) || (subject == Parse.User.current().get("courseSeven"))))
								            {
												$("#studyDataTable").append("<tbody><tr><td>"+firstName+"</td><td>"+lastName+"</td><td>"+subject+"</td><td>"+ monthNames[dateConvert.getMonth()]+ " " + dateConvert.getDate() + " " +dateConvert.getFullYear() +"</td><td>"+starting+"</td><td>"+ending+"</td><td>"+notes+"</td><td>"+contact+"</td><td>"+ address+"</td></tr></tbody>");
											}


									  }
								}
							
						  });

						}
					);
			} else {
				window.location.replace("../auth/login.html");
			}
	}
);