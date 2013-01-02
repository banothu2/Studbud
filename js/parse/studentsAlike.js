Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");


$(document).ready(
		function(){
			var currentUser = Parse.User.current(); //Checks to see if user is logged in
			if(currentUser){

					var User = Parse.Object.extend("User");

					var firstName = Parse.User.current().get("firstName");
					var lastName = Parse.User.current().get("lastName");
					$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class=''><a href='../docs/maps.html'>Maps</a></li><li class='active'><a href='../docs/students.html'>Students Alike</a></li><li class=''><a href='../docs/submitLocation.html'>Submit your Study Location</a></li><li class=''><a href='../docs/tutorView.html'>View Tutors</a></li><li class=''><a href='../docs/tutorMap.html'>Tutors Map</a></li><li class=''><a href='../docs/tutorSubmit.html'>Submit your Tutor Location</a></li><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + firstName +" " + lastName + "<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='../auth/courses.html'>Change Courses</a></li><li><a href='../auth/settings.html'>Settings</a></li><li><a id='clickedLogOut'>Log Out</a></li><li class='divider'></li><li class='nav-header'>Tutors</li><li><a href='../auth/tutorProfile.html'>Tutor Profile</a></li><li><a href='../docs/feedback.html'>Submit Feedback</a></li></ul></li></ul>");

					$("#clickedLogOut").click(
						function logOut(){
							Parse.User.logOut();
							window.location.replace("../auth/logIn.html");

						}
						);

				var User = Parse.Object.extend("User");
				var currentUserEmail = Parse.User.current().get("email")

				var courseOne = Parse.User.current().get("courseOne") || "Independent Study";
				var courseTwo = Parse.User.current().get("courseTwo") || "Independent Study";
				var courseThree = Parse.User.current().get("courseThree") || "Independent Study";
				var courseFour = Parse.User.current().get("courseFour") || "Independent Study";
				var courseFive = Parse.User.current().get("courseFive") || "Independent Study";
				var courseSix = Parse.User.current().get("courseSix") || "Independent Study";
				var courseSeven = Parse.User.current().get("courseSeven") || "Independent Study";

			
			function studentsAlike(courseNumber, inputCourseName, number){
				
				var useCourse = courseNumber;
				var inputCourse = inputCourseName;
				var j = number;
				var nameOfTab = "#tab" + j;

				if(inputCourse != "Independent Study"){
					if(j==1){
						$("#tabHeader").append("<li class='active'><a href='#tab" +j+"' data-toggle='tab'>"+ inputCourse+"</a></li>");
					}
					else{
						$("#tabHeader").append("<li class=''><a href='#tab" +j+"' data-toggle='tab'>"+ inputCourse+"</a></li>");

					}
					var query = new Parse.Query(User);
						query.find({

					    success: function(results){

							 if(j == 1){
							 	$("#tabsForTable").append("<div class='tab-pane active' id='tab" + j + "'><table class='table table-hover' id='table"+j+ "'> </table></div>");

							 } else {
					    		$("#tabsForTable").append("<div class='tab-pane' id='tab" + j + "'><table class='table table-hover' id='table"+j+ "'> </table></div>");

							 }
							var nameOfTable = "#table" + j;

					    	$(nameOfTable).append("<thead><tr><th>First Name</th><th>Last Name</th><th>Email</th></tr></thead><tbody>");
					    	$(nameOfTable).append("<tbody id='tableBody"+ j+"'></tbody");
					          for (var i = 0; i < results.length; i++) {
					            var firstName = results[i].get("firstName") || "";
					            var lastName = results[i].get("lastName") || "";
					            var email = results[i].get("email") || "";
					            var courseOne = results[i].get("courseOne");
					            var courseTwo = results[i].get("courseTwo");
					            var courseThree = results[i].get("courseThree");
					            var courseFour = results[i].get("courseFour");
					            var courseFive = results[i].get("courseFive");
					            var courseSix = results[i].get("courseSix");
					            var courseSeven = results[i].get("courseSeven");
					           	var nameOfTableBody = "#tableBody" + j;
							        if((email != currentUserEmail) && ((courseOne == inputCourse) || (courseTwo == inputCourse) || (courseThree == inputCourse) || (courseFour == inputCourse) || (courseFive == inputCourse) || (courseSix == inputCourse) || (courseSeven == inputCourse))){

										$(nameOfTableBody).append("<tr><td>"+firstName+"</td><td>"+lastName+"</td><td>"+email+"</td></tr>");
									}
							  }

						}
					  });
					}
			}

			for (var i = 1; i<8; i++){
				if(i = 1){ studentsAlike("courseOne", courseOne, i);}
				if(i = 2){ studentsAlike("courseTwo", courseTwo, i);}
				if(i = 3){ studentsAlike("courseThree", courseThree, i);}
				if(i = 4){ studentsAlike("courseFour", courseFour, i);}
				if(i = 5){ studentsAlike("courseFive", courseFive, i);}
				if(i = 6){ studentsAlike("courseSix", courseSix, i);}
				if(i = 7 ){ studentsAlike("courseSeven", courseSeven, i);}
			}


			} else {
				window.location.replace("../auth/logIn.html");
			}
	}
);