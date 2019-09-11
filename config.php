<?php

// $mysqli =  new mysqli("unisa2.cmcm9du8iyu1.us-east-1.rds.amazonaws.com","concorrencia","n4D6(gu(9S(Ekb5","alavancagem_demo");
// $con = mysqli_connect("unisa2.cmcm9du8iyu1.us-east-1.rds.amazonaws.com","concorrencia","n4D6(gu(9S(Ekb5","alavancagem_demo");
// $con = mysqli_connect("us-cdbr-iron-east-02.cleardb.net","b604555a674f4d","3d655edb","heroku_8bd1761ba7d8a37");
// $mysqli = new mysqli("us-cdbr-iron-east-02.cleardb.net","b604555a674f4d","3d655edb","heroku_8bd1761ba7d8a37");
$mysqli = new mysqli("localhost","root","","grafico");
$con = mysqli_connect("localhost","root","","grafico");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

?>