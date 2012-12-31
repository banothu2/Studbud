Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

$(document).ready(
	function(){
		var currentUser = Parse.User.current();
			if (currentUser) {

					var User = Parse.Object.extend("User");

					var firstName = Parse.User.current().get("firstName");
					$("#navigationBar").append("<ul class='nav'><li class='active'><a href='../docs/index.html'>Home</a></li><li class=''><a href='../auth/registerCourses.html'>Change Courses</a></li><li class=''><a href='../docs/maps.html'>Maps</a></li><li class=''><a href='../docs/submitLocation.html'>Submit your Study Location</a></li><li class=''><a class='' href='./index.html'>Welcome " + firstName + "!</a></li><li class=''><a class='' id='clickedLogOut'>Log Out</a></li></ul>");
					
					$("#clickedLogOut").click(
						function(){
							Parse.User.logOut();
							window.location.replace("../auth/logIn.html");

						}
						);
							/* <ul class='nav'>
		                        <li class='active'>
		                          <a href='index.html'>Home</a>
		                        </li>
		                        <li class=''>
		                          <a href='./getting-started.html'>Get started</a>
		                        </li>
		                        <li class=''>
		                          <a href='./scaffolding.html'>Scaffolding</a>
		                        </li>
		                        <li class=''>
		                          <a href='./base-css.html'>Base CSS</a>
		                        </li>
		                        <li class=''>
		                          <a href='./components.html'>Components</a>
		                        </li>
		                        <li class=''>
		                          <a href='./javascript.html'>JavaScript</a>
		                        </li>
		                        <li class=''>
		                          <a href='./customize.html'>Customize</a>
		                        </li>
		                    </ul> */
			} else {
				$("#navigationBar").append("<ul class='nav'><li class='active'><a href='../docs/index.html'>Home</a></li><li class=''><a href='../auth/logIn.html'>Login</a></li><li class=''><a href='../auth/register.html'>Register</a></li><li class=''><a href='../auth/forgotPass.html'>Forgot Password</a></li><li class=''><a href='../docs/aboutUs.html'>About Us</a></li><li class=''><a href='../docs/contactUs.html'>Contact Us</a></li><li class=''><a href='../docs/faqs.html'>FAQs</a></li></ul>");
			}
	}
);