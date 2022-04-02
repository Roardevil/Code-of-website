<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title){
    echo '<!DOCTYPE html>
     <html>
     <head>
   <title>' . $title . '</title>
   <!-- Link to external style sheet -->
     <link rel="stylesheet" type="text/css" href="../css/styles.css">
     </head>
     <body>
    ';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputBannerNavigation($pageName){
    //Output banner and first part of navigation
   
    echo '
    <div class="header">
<a><img src="../images/img3.jpg" class="logo"></a>
<div class="header-right">';
     
    
    
    //Array of pages to link to
    $linkNames = array("Home", "Quiz", "Ranking", "Signin", "Register");
    $linkAddresses = array("Home.php", "Quiz.php", "Ranking.php","Signin.php", "Register.php");
    
    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<a ';
        if($linkNames[$x] == $pageName){
            echo 'class="active" ';
        }
        
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }

   
    echo '</div>
    </div>';
}



//Outputs closing body tag and closing HTML tag
function outputFooter(){

    echo '<footer>
    <p>Created By: Deep patel<br>
    <a href="mailto:pateldeep@gmail.com">pateldeep@gmail.com</a></p>
    </footer>
   </body>
    </html>';
}
