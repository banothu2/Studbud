Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");




				
$(document).ready(
		function(){
			var currentUser = Parse.User.current();

			if (currentUser) {
			    // show the signup or login page
				window.location.replace("../docs/index.html");
			} else {
		
				function register(university, universityKey){

							var user = new Parse.User();
						//$("#NAME OF FORM ID WITH USERNAME").val();
							user.set("university", university);
							user.set("universityKey", universityKey);
							user.set("username", $("#username").val());
							user.set("firstName", $("#firstName").val());
							user.set("lastName", $("#lastName").val());
							user.set("password", $("#password").val());
							user.set("email", $("#email").val());

							user.signUp(null, {
								success: function(user){
									//Sign up set worked
									window.location.replace("courses.html");

								},
								error: function(user, error){
									//Ran into an error 
									//Say what the error is -- add something later
									// for debugging purposes - state what error is:
									var errorTag =  "#error" + universityKey; 
									$(errorTag).empty();
									$(errorTag).append("<div class='alert alert-error'> Oh snap! Change a few things up and try submitting again.</div>");
								}
							});
							return false;
					}				
			}
		}
);
