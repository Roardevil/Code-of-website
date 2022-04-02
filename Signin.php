<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Quiz");
    outputBannerNavigation("Signin");
?>



<div class="container">

	<div class="header">
		<h2>Signin</h2>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Email</label>
			<input type="email" placeholder="email" id="email" />
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="username">Password</label>
			<input type="password" placeholder="Password" id="password"/>
			<small>Error message</small>
		</div>
		<p><b>Aceept the<a href="/">Terms&conditions</a></b></p>
	<button type="submitbutton" onclick="login();">Login</button>
	<button id="myButton">Register</button>

<script type="text/javascript">
    document.getElementById("myButton").onclick = function () {
        location.href = "Register.php";
    };
</script>
	</form>
	<p style="color: red;" id="FeedbackPara"></p>
	
<script src="../javascript/Signin.js"></script>



<?php
    //Output the footer
    outputFooter();
?>