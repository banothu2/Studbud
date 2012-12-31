Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");


$(document).ready(
		function(){
			var currentUser = Parse.User.current(); //Checks to see if user is logged in
			if(currentUser){

								//$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class='active'><a href='../auth/registerCourses.html'>Change Courses</a></li><li class=''><a href='../docs/maps.html'>Maps</a></li><li class=''><a href='../docs/submitLocation.html'>Submit your Study Location</a></li></ul>");
				// when logged in:

				//Need to do 2 things. 
					// 1. populate the data
					// 2. open fields to be eddited
						var User = Parse.Object.extend("User");
						var query = new Parse.Query(User);


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
								var courseOne = Parse.User.current().get("courseOne") || "";
								var courseTwo = Parse.User.current().get("courseTwo") || "";
								var courseThree = Parse.User.current().get("courseThree") || "";
								var courseFour = Parse.User.current().get("courseFour") || "";
								var courseFive = Parse.User.current().get("courseFive") || "";
								var courseSix = Parse.User.current().get("courseSix") || "";
								var courseSeven = Parse.User.current().get("courseSeven") || "";
								
								$("#universityDiv").append("<label class='control-label' for='university'>University</label><div class='controls'><select class='span4' id='inputUniversity'><option>University of Illinois Urbana-Champaign</option><option>Case Western Reserve University</option></select></div>")

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

									//$("#NAME OF FORM ID WITH USERNAME").val();
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
			else {
				// redirect to login page 
				window.location.replace("../auth/login.html");
				//$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class=''><a href='../auth/logIn.html'>Login</a></li><li class=''><a href='../auth/register.html'>Register</a></li><li class=''><a href='../auth/forgotPass.html'>Forgot Password</a></li><li class=''><a href='../docs/aboutUs.html'>About Us</a></li><li class=''><a href='../docs/contactUs.html'>Contact Us</a></li><li class=''><a href='../docs/faqs.html'>FAQs</a></li></ul>");

			}
	}
);