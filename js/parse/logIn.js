Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

$(document).ready(
	function(){
		$("#NAME OF FORM").submit(
			function(){
				Parse.User.logIn(    ,     , { //$("#inputUsername").val(), $("#inputPassword").val()
					success: function(user) {
						//if login success, then redirect page to index.html
						window.location.replace("index.html");

					},
					error: function(user, error) {
						//login failed - will redirect user back to the same page but will run the append line below
				    
				    //document.getElementById("loginError").innerHTML="<div class='alert alert-error'> The Username and password did not match! Please try again </div>";

						//Login Failed - display error right now for debugging purposes
						alert("Error: " + error.code + "" + error.message);

				}
			}
			)
	})