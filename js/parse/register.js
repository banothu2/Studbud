Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

var currentUser = Parse.User.current();
if (currentUser) {
    // show the signup or login page
	window.location.replace("../docs/index.html");
} else {
$(document).ready( //waits for the document to load and all files to render
	function(){
		$("#register").submit( //executes the below code when the button in clicked

			function register(){ // register function 
				
				var user = new Parse.User();
			//$("#NAME OF FORM ID WITH USERNAME").val();
				user.set("username", $("#username").val());
				user.set("firstName", $("#firstName").val());
				user.set("lastName", $("#lastName").val());
				user.set("password", $("#password").val());
				user.set("email", $("#email").val());

				user.signUp(null, {
					success: function(user){
						//Sign up set worked
						window.location.replace("registerCourses.html");

					},
					error: function(user, error){
						//Ran into an error 
						//Say what the error is -- add something later
						// for debugging purposes - state what error is:
						$("#error").append("<div class='alert alert-error'> Oh snap! Change a few things up and try submitting again.</div>");
					}
				});
				return false;
			}
			);
	});
}