Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

$(document).ready(
	function(){
		var currentUser = Parse.User.current();
			if (currentUser) {
					$("#navigationBar").append("<ul class='nav'><li class=''><a href='../docs/index.html'>Home</a></li><li class=''><a href='../auth/registerCourses.html'>Change Courses</a></li><li class='active'><a href='../docs/maps.html'>Maps</a></li><li class=''><a href='../docs/submitLocation.html'>Submit your Study Location</a></li></ul>");

			} else {
				$("#navigationBar").append("<ul class='nav'><li class='active'><a href='../docs/index.html'>Home</a></li><li class=''><a href='../auth/logIn.html'>Login</a></li><li class=''><a href='../auth/register.html'>Register</a></li><li class=''><a href='../auth/forgotPass.html'>Forgot Password</a></li><li class=''><a href='../docs/aboutUs.html'>About Us</a></li><li class=''><a href='../docs/contactUs.html'>Contact Us</a></li><li class=''><a href='../docs/faqs.html'>FAQs</a></li></ul>");
			}
	}
);