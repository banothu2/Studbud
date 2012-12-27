Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

var currentUser = Parse.User.current(); //Checks to see if user is logged in
	if(currentUser){
		// when logged in:

		//Need to do 2 things. 
			// 1. populate the data
			// 2. open fields to be eddited
		$(document).ready(//Wait for document to be ready
			function () {
				var User = Parse.Object.extend("User");
				var query = new Parse.Query(User);

				query.find({
					success: function(){
						$("#NAME_OF_TABLE tbody").empty(); // empty the entire table - useful when the page is update and you want to run the jquery append code without adding extra garbage
						// declare variables derived from Parse databrowser
						var firstName = Parse.User.current.get("firstName");
						var lastName = Parse.User.current.get("lastName");
						var courseOne = Parse.User.current.get("courseOne");
						var courseTwo = Parse.User.current.get("courseTwo");
						var courseThree = Parse.User.current.get("courseTwo");
						var courseFour = Parse.User.current.get("courseTwo");
						var courseFive = Parse.User.current.get("courseTwo");
						var courseSix = Parse.User.current.get("courseTwo");
						var courseSeven = Parse.User.current.get("courseTwo");

						$("#NAME_OF_TABLE").append(""); // Add lines for saying "Welcome firstName lastName"
						$("#NAME_OF_TABLE").append(""); // code to append for the input form with the course fields
					

						$("buttonUpdate").click(
							function registerCourse(){ // register function 
								
								var User = Parse.Object.extend("User");
								var user = new Parse.User();
							//$("#NAME OF FORM ID WITH USERNAME").val();
								user.set("courseOne", );
								user.set("courseTwo", );
								user.set("courseThree", );
								user.set("courseFour", );
								user.set("courseFive", );
								user.set("courseSix", );
								user.set("courseSeven", );

								user.save(null, {
									success: function(saveInput){
										//send over to the main page
									},
									error: function(saveInput, error){
										//Ran into an error 
										//Say what the error is -- add something later

										// for debugging purposes - state what error is:
										alert("Error: " + error.code + "" + error.message);
									}
								});
							}
							)
					}
				})
			}
		)
	}	
	else {
		// redirect to login page 
		window.location.replace("login.html");
	}