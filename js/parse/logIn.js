Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

var currentUser = Parse.User.current();
$(document).ready(
		function(){
			if (currentUser) {
				window.location.replace("../docs/index.html");
			} else {

						$("#logIn").submit(
							function regularLogin(){
								Parse.User.logIn($("#inputUsername").val(), $("#inputPassword").val(), { //$("#inputUsername").val(), $("#inputPassword").val()
									success: function(user) {
										//if login success, then redirect page to index.html
										window.location.replace("../docs/index.html");

									},
									error: function(user, error) {
										//login failed - will redirect user back to the same page but will run the append line below
								    
								    //document.getElementById("loginError").innerHTML="<div class='alert alert-error'> The Username and password did not match! Please try again </div>";

										//Login Failed - display error right now for debugging purposes
										$("#error").empty();
										$("#error").append("<div class='alert alert-error'> Oh snap! The username and password did not match! Try again!</div>");

									}
								}	
								);
								return false;
							}
						);

						$("#facebook").submit(
							function facebookLogin(){
								Parse.FacebookUtils.logIn(null, {
								  success: function(user) {
								    if (!user.existed()) {
								      //alert("User signed up and logged in through Facebook!");
								      window.location.replace("../auth/facebookLogin.html");

								    } else {
								      //alert("User logged in through Facebook!");
								      window.location.replace("../docs/index.html");

								    }
								  },
								  error: function(user, error) {
										$("#errorFacebook").empty();
										$("#errorFacebook").append("<div class='alert alert-error'> Oh snap! The user cancelled the Facebook login or did not fully authorize! Try again!</div>");
								    //alert("User cancelled the Facebook login or did not fully authorize.");
								  }
								});
								return false;
							}
						);


			}
		}
	);