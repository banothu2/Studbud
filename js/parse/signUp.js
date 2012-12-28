Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

$(document).ready( //waits for the document to load and all files to render
	function(){
		$("ON CLICKING SIGN UP BUTTON").click( //executes the below code when the button in clicked
			
			// CHANGE THE CLICK TO ON SUBMIT THEREFOR ITLL BE A FORM AND REFRESH ON FAIL



			function register(){ // register function 
				
				var user = new Parse.User();
			//$("#NAME OF FORM ID WITH USERNAME").val();
				user.set("username", );
				user.set("firstName", );
				user.set("lastName", );
				user.set("password", );
				user.set("email", );

				user.signUp(null, {
					success: function(user){
						//Sign up set worked
						document.getElementById("").innerHTML=" "; // Use this to add a modal that says the user has been created
					},
					error: function(user, error){
						//Ran into an error 
						//Say what the error is -- add something later

						// for debugging purposes - state what error is:
						alert("Error: " + error.code + "" + error.message);
					}
				})
			}
			)
	})