<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Quiz");
    outputBannerNavigation("Register");
?>
 
         
 <div class="container">
	<div class="header">
		<h2>Create Account</h2>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Username</label>
			<input type="text" placeholder="username" id="username" />
			<small>Error message</small>
		</div>
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
		<div class="form-control">
			<label for="username">Password check</label>
			<input type="password" placeholder="Password two" id="password2"/>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="username">Phone</label>
			<input type="phone" placeholder="Phone" id="phone"/>
			<small>Error message</small>
		</div>
		<p><b>Aceept the<a href="/">Terms&conditions</a></b></p>
		<button  onclick="register();">register</button>
		<button id="myButton">Signin</button>

<script type="text/javascript">
    document.getElementById("myButton").onclick = function () {
        location.href = "Signin.php";
    };
</script>
	</form>
<script src="../javascript/Register.js"></script>

<?php
    //Output the footer
    outputFooter();
?>