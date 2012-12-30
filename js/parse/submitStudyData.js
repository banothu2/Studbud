Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

var currentUser = Parse.User.current(); //Checks to see if user is logged in
	if(currentUser){
		// when logged in:

		$(document).ready(//Wait for document to be ready
			function submitOrder() {
				var User = Parse.Object.extend("User");
				var query = new Parse.Query(User);

				query.find({
					success: function(){
						var firstName = Parse.User.current().get("firstName");
						var lastName = Parse.User.current().get("lastName");
						$("#inputNameParse").empty();
						$("#inputNameParse").append("<input class='input-medium search-query' id='inputName' type='text' value='" + firstName + " " + lastName+"' disabled></input>");
					
						var courseOne = Parse.User.current().get("courseOne") || "Independent Study";
						var courseTwo = Parse.User.current().get("courseTwo") || "Independent Study";
						var courseThree = Parse.User.current().get("courseThree") || "Independent Study";
						var courseFour = Parse.User.current().get("courseFour") || "Independent Study";
						var courseFive = Parse.User.current().get("courseFive") || "Independent Study";
						var courseSix = Parse.User.current().get("courseSix") || "Independent Study";
						var courseSeven = Parse.User.current().get("courseSeven") || "Independent Study";

						$("#inputSubject").empty();
						$("#inputSubject").append("<select class='span2' id='inputSubject'><option>"+courseOne + "</option><option>" + courseTwo+ "</option><option>" + courseThree+ "</option><option>" + courseFour + "</option><option>" + courseFive + "</option><option>" + courseSix + "</option><option>" + courseSeven+ "</option></select>");

					}
				})
                      $('#viewOnMap').click(function(){
                      		$("#mapStatic").empty();
                        var url = GMaps.staticMapURL({
                          size: [610, 350],
                          zoom: 16,
                          lat: $("#inputLatitude").val(),
                          lng: $("#inputLongitude").val(),
                          markers: [
                            {lat: $("#inputLatitude").val(), lng: $("#inputLongitude").val(), color: 'blue'}
                          ]
                        });
                        $('<img/>').attr('src', url).appendTo('#mapStatic');
                      });




					$("buttonSubmit").click(

						function submitMapper(){

			//				Parse.User.logIn($("#inputUsername").val(), $("#inputPassword").val(), {
							var Mapper = Parse.Object.extend("mapper");
							var mapper = new Mapper();
							 			                

							var d = new Date();
                			var dateCheck = d.getFullYear()+ ""+d.getMonth() +""+d.getDate();

							mapper.save({

							  latitude: $("#inputLatitude").val(),
							  longitude: $("#inputLongitude").val(),
							  name: $("#inputName").val(),
							  subject: $("#inputSubject").val(),
							  notes: $("#inputNotes").val(),
							  contact: $("#inputContact").val(),
							  date: dateCheck
							  
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
		window.location.replace("../auth/logIn.html");
	}