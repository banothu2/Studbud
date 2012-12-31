Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

$(document).ready(
function () {

		$("buttonLogout").click(

			function (){

				Parse.User.logOut();
				 
				var currentUser = Parse.User.current();  // this will now be null

				window.location.replace("../auth/logIn.html");

			}
		)
}
	);
