<?php
//Include the PHP functions to be used on the page 
include('common.php');

//Output header and navigation 
outputHeader(" HomePage");
outputBannerNavigation("Home");
?>
<!-- code for the slideshow on home page    -->
<div style="padding-left:20px"></div>
<div class="slideshow-container">

  <div class="mySlides fade">
    <img src="../images/slide1.jpg" style="width:80%; height:50%">
    <div class="text">Page 1</div>
  </div>




  <div class="mySlides fade">
    <img src="../images/img4.pnG" style="width:80%; height:50%">
    <div class="text">Page 2</div>
  </div>
  

  <div class="mySlides fade">
    <img src="../images/img5.pnG" style="width:80%; height:50%">
    <div class="text">Page 3</div>
  </div>
  
</div>

  <br>

  <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>
<script src="../javascript/home.js"></script>
 
  <?php
  //Output the footer
  outputFooter();
  ?>