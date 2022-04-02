<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("My Game Website - Quiz");
    outputBannerNavigation("Ranking");
?>
<h1> Welcome to Ranking page</h1>
<div id="Ranking" ></div>
<button id="myButton" class="float-left submit-button" >Signin</button>
<button id="myButton2" class="float-left submit-button" >Restart Quiz</button>
<script>
document.getElementById("myButton2").onclick = function () {
        location.href = "Quiz.php";
    };
</script>
<script src="../javascript/Ranking.js"></script>

<?php
    //Output the footer
    outputFooter();
?>