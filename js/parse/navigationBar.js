Parse.initialize("78z9KHgSR3zIeFF7soCrOiHE6D99hNTJOmnJ2oay", "E8xzL8zlCs6GFfA2kEjAuBdedyZ9vS8ErBI3vT71");

$(document).ready(
	function(){
		var currentUser = Parse.User.current();
			if (currentUser) {
					alert("Current user");
					$("#navigationBar").append("");

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
				$("#navigationBar").append("<ul class='nav'><li class='active'><a href='index.html'>Home</a></li><li class=''><a href='../auth/logIn.html'>Login</a></li><li class=''><a href='../auth/register.html'>Register</a></li><li class=''><a href='../auth/forgotPass.html'>Forgot Password</a></li><li class=''><a href='aboutUs.html'>About Us</a></li><li class=''><a href='contactUs.html'>Contact Us</a></li><li class=''><a href='faqs.html'>FAQs</a></li></ul>");
			}
	}
);