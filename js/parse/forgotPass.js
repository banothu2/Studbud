Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

var currentUser = Parse.User.current();
if (currentUser) {
    // show the signup or login page
	window.location.replace("../docs/index.html");
} else {
	$(document).ready(
			function(){

			$("button").click(
				function resetPassword(){
					Parse.User.requestPasswordReset($("#resetEmail").val(), {
					  success: function() {

							$("#errorOrSuccess").empty();
							$("#errorOrSuccess").append("<div class='alert alert-success'> An email has been sent to "+$("#resetEmail").val()+"!</div>");

					    // Password reset request was sent successfully
					  },
					  error: function(error) {
					    // Show the error message somewhere
					    	$("#errorOrSuccess").empty();
							$("#errorOrSuccess").append("<div class='alert alert-error'>"+error.message+"!</div>");

					  }
					});
				}
			)
		}
	);
}