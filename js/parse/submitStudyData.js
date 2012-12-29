Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

var currentUser = Parse.User.current(); //Checks to see if user is logged in
	if(currentUser){
		// when logged in:

		$(document).ready(//Wait for document to be ready
			function submitOrder() {

					$("button").click(

						function submitMapper(){

			//				Parse.User.logIn($("#inputUsername").val(), $("#inputPassword").val(), {
							var Mapper = Parse.Object.extend("mapper");
							var mapper = new Mapper();
							 
							mapper.save({
							  latitude: $("#inputLatitude").val(),
							  longitude: $("#inputLongitude").val(),
							  notes: $("#inputNotes").val(),
							  subject: $("#inputSubject").val()
							}, {
							  success: function(map) {
							    // The object was saved successfully.
							    alert("worked!");
							  },
							  error: function(map, error) {
							    // The save failed.
							    alert("failed");
							    // error is a Parse.Error with an error code and description.
							  }
							}); 

						}	
					)
			}
		);
	}	
	else {
		// redirect to login page 
		window.location.replace("logIn.html");
	}