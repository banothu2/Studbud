Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");


$(document).ready(
		function(){
			var currentUser = Parse.User.current(); //Checks to see if user is logged in
			if(currentUser){

					var User = Parse.Object.extend("User");

					var firstName = Parse.User.current().get("firstName");
					var lastName = Parse.User.current().get("lastName");
					
					$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class=''><a href='../docs/maps.html'>Maps</a></li><li class=''><a href='../docs/students.html'>Students Alike</a></li><li class=''><a href='../docs/submitLocation.html'>Submit your Study Location</a></li><li class='active'><a href='../docs/tutorView.html'>View Tutors</a></li><li class=''><a href='../docs/tutorMap.html'>Tutors Map</a></li><li class=''><a href='../docs/tutorSubmit.html'>Submit your Tutor Location</a></li><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + firstName +" " + lastName + "<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='../auth/courses.html'>Change Courses</a></li><li><a href='../auth/settings.html'>Settings</a></li><li><a id='clickedLogOut'>Log Out</a></li><li class='divider'></li><li class='nav-header'>Tutors</li><li><a href='../auth/tutorProfile.html'>Tutor Profile</a></li><li><a href='../docs/feedback.html'>Submit Feedback</a></li></ul></li></ul>");

					$("#clickedLogOut").click(
						function logOut(){
							Parse.User.logOut();
							window.location.replace("../auth/logIn.html");

						}
						);

			} else {
				window.location.replace("../auth/logIn.html");
			}
	}
);