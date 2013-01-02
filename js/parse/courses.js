Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");


$(document).ready(
		function(){
			var currentUser = Parse.User.current();
			if(currentUser){
					var User = Parse.Object.extend("User");

					var firstName = Parse.User.current().get("firstName");
					var lastName = Parse.User.current().get("lastName");
					$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class=''><a href='../docs/maps.html'>Maps</a></li><li class=''><a href='../docs/students.html'>Students Alike</a></li><li class=''><a href='../docs/submitLocation.html'>Submit your Study Location</a></li><li class=''><a href='../docs/tutorView.html'>View Tutors</a></li><li class=''><a href='../docs/tutorMap.html'>Tutors Map</a></li><li class=''><a href='../docs/tutorSubmit.html'>Submit your Tutor Location</a></li><li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + firstName +" " + lastName + "<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='../auth/courses.html'>Change Courses</a></li><li><a href='../auth/settings.html'>Settings</a></li><li><a id='clickedLogOut'>Log Out</a></li><li class='divider'></li><li class='nav-header'>Tutors</li><li><a href='../auth/tutorProfile.html'>Tutor Profile</a></li><li><a href='../docs/feedback.html'>Submit Feedback</a></li></ul></li></ul>");

					$("#clickedLogOut").click(
						function logOut(){
							Parse.User.logOut();
							window.location.replace("../auth/logIn.html");

						}
						);
						
				var User = Parse.Object.extend("User");
				var query = new Parse.Query(User);
				var email = Parse.User.current().get("email") || "";

				if(email != "" || email == null){
						$("#coursesPage").empty();
						$("#coursesPage").append("<form class='form-horizontal' id='register'><h2 class='form-register-heading' ></h2><h4 class='form-register-heading'>Please add your semester courses</h4><div class='control-group' id='courseOneDiv'></div><div class='control-group' id='courseTwoDiv'></div><div class='control-group' id='courseThreeDiv'></div><div class='control-group' id='courseFourDiv'></div><div class='control-group' id='courseFiveDiv'></div><div class='control-group' id='courseSixDiv'></div><div class='control-group' id='courseSevenDiv'></div><div id='errorOrSuccess'></div></form><div id='buttonAdd'><button type='margin' class='btn btn-large btn-block btn-primary' type='button'>Register</button></div>");
						query.find({	
							success: function(){
								$("#welcome").empty(); // empty the entire table - useful when the page is update and you want to run the jquery append code without adding extra garbage

								Parse.User.current().fetch({
								  success: function(myObject) {
								    // The object was refreshed successfully.
								  },
								  error: function(myObject, error) {
								    // The object was not refreshed successfully.
								    // error is a Parse.Error with an error code and description.
								  }
								});
								var firstName = Parse.User.current().get("firstName");
								var lastName = Parse.User.current().get("lastName");
								var courseOne = Parse.User.current().get("courseOne") || "Independent Study";
								var courseTwo = Parse.User.current().get("courseTwo") || "Independent Study";
								var courseThree = Parse.User.current().get("courseThree") || "Independent Study";
								var courseFour = Parse.User.current().get("courseFour") || "Independent Study";
								var courseFive = Parse.User.current().get("courseFive") || "Independent Study";
								var courseSix = Parse.User.current().get("courseSix") || "Independent Study";
								var courseSeven = Parse.User.current().get("courseSeven") || "Independent Study";

								$("#welcome").append("Welcome "+ firstName + " " + lastName); // Add lines for saying "Welcome firstName lastName"
								$("#courseOneDiv").append("<label class='control-label' for='courseOne'>Course One</label><div class='controls'><input type='text' id='courseOne' placeholder='Math 231' value= '"+courseOne+"' required></div>"); // code to append for the input form with the course fields
								$("#courseTwoDiv").append("<label class='control-label' for='courseTwo'>Course Two</label><div class='controls'><input type='text' id='courseTwo' placeholder='Chem 102' value= '"+courseTwo+"' required></div>"); // code to append for the input form with the course fields
								$("#courseThreeDiv").append("<label class='control-label' for='courseThree'>Course Three</label><div class='controls'><input type='text' id='courseThree' placeholder='CS 101' value= '"+courseThree+"' required></div>"); // code to append for the input form with the course fields
								$("#courseFourDiv").append("<label class='control-label' for='courseFour'>Course Four</label><div class='controls'><input type='text' id='courseFour' placeholder='ECE 190' value= '"+courseFour+"'></div>"); // code to append for the input form with the course fields
								$("#courseFiveDiv").append("<label class='control-label' for='courseFive'>Course Five</label><div class='controls'><input type='text' id='courseFive' placeholder='Phys 212' value= '"+courseFive+"'></div>"); // code to append for the input form with the course fields
								$("#courseSixDiv").append("<label class='control-label' for='courseSix'>Course Six</label><div class='controls'><input type='text' id='courseSix' placeholder='Psych 101' value= '"+courseSix+"'></div>"); // code to append for the input form with the course fields
								$("#courseSevenDiv").append("<label class='control-label' for='courseSeven'>Course Seven</label><div class='controls'><input type='text' id='courseSeven' placeholder='Geog 101' value= '"+courseSeven+"'></div>"); // code to append for the input form with the course fields		

								$("button").click(
									function (){
									
										var user = new User();
										user.id = Parse.User.current().id;

										user.set("courseOne", $("#courseOne").val());
										user.set("courseTwo", $("#courseTwo").val());
										user.set("courseThree", $("#courseThree").val());
										user.set("courseFour", $("#courseFour").val());
										user.set("courseFive", $("#courseFive").val());
										user.set("courseSix", $("#courseSix").val());
										user.set("courseSeven", $("#courseSeven").val());

										user.save(null, {
											success: function(user){
												//send over to the main page
												$("#errorOrSuccess").empty();
												$("#errorOrSuccess").append("<div class='alert alert-success'> Your courses have been updated!</div>");
												$("#buttonAdd").empty();
												$("#buttonAdd").append("<buttonNext type='margin'  class='btn btn-large btn-block' type='submit' onClick='location.href="+ "\"" + "../docs/index.html" +"\""+ "' >Next</buttonNext>");
												Parse.User.current().fetch({
												  success: function(myObject) {
												    // The object was refreshed successfully.
												  },
												  error: function(myObject, error) {
												    // The object was not refreshed successfully.
												    // error is a Parse.Error with an error code and description.
												  }
												});
											},
											error: function(user, error){
												alert("Error: " + error.code + "" + error.message);
											}
										});
									}
								); 
								
								return false;
							}
						});
				}
				else{

					$("#coursesPage").empty();
					$("#coursesPage").append("<form class='form-horizontal' id='facebookLogin'><h2 class='form-register-heading' ></h2><h4 class='form-register-heading'>Please fill in the following information</h4><div class='control-group' id='universityDiv'></div><div class='control-group' id='firstNameDiv'></div><div class='control-group' id='lastNameDiv'></div><div class='control-group' id='emailDiv'></div><div class='control-group' id='courseOneDiv'></div><div class='control-group' id='courseTwoDiv'></div><div class='control-group' id='courseThreeDiv'></div><div class='control-group' id='courseFourDiv'></div><div class='control-group' id='courseFiveDiv'></div><div class='control-group' id='courseSixDiv'></div><div class='control-group' id='courseSevenDiv'></div><div id='errorOrSuccess'></div></form><div id='buttonAdd'><button type='margin' class='btn btn-large btn-block btn-primary' type='button'>Register</button></div>");

					query.find({
						success: function(){
							$("#welcome").empty(); // empty the entire table - useful when the page is update and you want to run the jquery append code without adding extra garbage
							// declare variables derived from Parse databrowser
							Parse.User.current().fetch({
							    success: function(myObject) {
								    // The object was refreshed successfully.
								 },
								error: function(myObject, error) {
								    // The object was not refreshed successfully.
								    // error is a Parse.Error with an error code and description.
								}
							});


							var firstName = Parse.User.current().get("firstName") || "";
							var lastName = Parse.User.current().get("lastName") || "";
							var email = Parse.User.current().get("email") || "";
							var courseOne = Parse.User.current().get("courseOne") || "Independent Study";
							var courseTwo = Parse.User.current().get("courseTwo") || "Independent Study";
							var courseThree = Parse.User.current().get("courseThree") || "Independent Study";
							var courseFour = Parse.User.current().get("courseFour") || "Independent Study";
							var courseFive = Parse.User.current().get("courseFive") || "Independent Study";
							var courseSix = Parse.User.current().get("courseSix") || "Independent Study";
							var courseSeven = Parse.User.current().get("courseSeven") || "Independent Study";
								
							$("#universityDiv").append("<label class='control-label' for='university'>University</label><div class='controls'><select class='span4' id='inputUniversity'><option>University of Illinois Urbana-Champaign</option><option>Case Western Reserve University</option></select></div>");
							$("#firstNameDiv").append("<label class='control-label' for='firstName'>First Name</label><div class='controls'><input type='text' id='firstName' placeholder='Ben' value= '"+firstName+"' required></div>"); // code to append for the input form with the course fields
							$("#lastNameDiv").append("<label class='control-label' for='lastName'>Last Name</label><div class='controls'><input type='text' id='lastName' placeholder='Johnson' value= '"+lastName+"' required></div>"); // code to append for the input form with the course fields
							$("#emailDiv").append("<label class='control-label' for='email'>Email</label><div class='controls'><input type='text' id='email' placeholder='bjohnson2@illinois.edu' value= '"+email+"' required></div>"); // code to append for the input form with the course fields
							$("#courseOneDiv").append("<label class='control-label' for='courseOne'>Course One</label><div class='controls'><input type='text' id='courseOne' placeholder='Math 231' value= '"+courseOne+"' required></div>"); // code to append for the input form with the course fields
							$("#courseTwoDiv").append("<label class='control-label' for='courseTwo'>Course Two</label><div class='controls'><input type='text' id='courseTwo' placeholder='Chem 102' value= '"+courseTwo+"' required></div>"); // code to append for the input form with the course fields
							$("#courseThreeDiv").append("<label class='control-label' for='courseThree'>Course Three</label><div class='controls'><input type='text' id='courseThree' placeholder='CS 101' value= '"+courseThree+"' required></div>"); // code to append for the input form with the course fields
							$("#courseFourDiv").append("<label class='control-label' for='courseFour'>Course Four</label><div class='controls'><input type='text' id='courseFour' placeholder='ECE 190' value= '"+courseFour+"'></div>"); // code to append for the input form with the course fields
							$("#courseFiveDiv").append("<label class='control-label' for='courseFive'>Course Five</label><div class='controls'><input type='text' id='courseFive' placeholder='Phys 212' value= '"+courseFive+"'></div>"); // code to append for the input form with the course fields
							$("#courseSixDiv").append("<label class='control-label' for='courseSix'>Course Six</label><div class='controls'><input type='text' id='courseSix' placeholder='Psych 101' value= '"+courseSix+"'></div>"); // code to append for the input form with the course fields
							$("#courseSevenDiv").append("<label class='control-label' for='courseSeven'>Course Seven</label><div class='controls'><input type='text' id='courseSeven' placeholder='Geog 101' value= '"+courseSeven+"'></div>"); // code to append for the input form with the course fields		

							$("button").click(
								function (){ // register function 
								
									var user = new User();
									user.id = Parse.User.current().id;

									if($("#inputUniversity").val() == "University of Illinois Urbana-Champaign"){
									  user.set("university", "University of Illinois Urbana-Champaign");
						              user.set("universityKey", "5kCPPpH5I5");
									}
									else if($("#inputUniversity").val() == "Case Western Reserve University"){
									  user.set("university", "Case Western Reserve University");
						              user.set("universityKey", "ih25qG1u1N");
									}
									else{

									}

									user.set("firstName", $("#firstName").val());
									user.set("lastName", $("#lastName").val());
									user.set("email", $("#email").val());
									user.set("courseOne", $("#courseOne").val());
									user.set("courseTwo", $("#courseTwo").val());
									user.set("courseThree", $("#courseThree").val());
									user.set("courseFour", $("#courseFour").val());
									user.set("courseFive", $("#courseFive").val());
									user.set("courseSix", $("#courseSix").val());
									user.set("courseSeven", $("#courseSeven").val());

									user.save(null, {
										success: function(user){

											$("#errorOrSuccess").empty();
											$("#errorOrSuccess").append("<div class='alert alert-success'> Your courses have been updated!</div>");
											$("#buttonAdd").empty();
											$("#buttonAdd").append("<buttonNext type='margin'  class='btn btn-large btn-block' type='submit' onClick='location.href="+ "\"" + "../docs/index.html" +"\""+ "' >Next</buttonNext>");
											Parse.User.current().fetch({
											  success: function(myObject) {
											    // The object was refreshed successfully.
											  },
											  error: function(myObject, error) {
											    // The object was not refreshed successfully.
											    // error is a Parse.Error with an error code and description.
											  }
											});
										},
										error: function(user, error){
											//Ran into an error 
											//Say what the error is -- add something later

											// for debugging purposes - state what error is:
											alert("Error: " + error.code + "" + error.message);
										}
									});
								}
							); 
							return false;

						}
					});
				}
			}	
			else {
				// redirect to login page 
				window.location.replace("../auth/login.html");

			}
	}
);