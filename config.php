<?php

$con = mysqli_connect("us-cdbr-iron-east-02.cleardb.net","b604555a674f4d","3d655edb","heroku_8bd1761ba7d8a37");
// $con=mysqli_connect("us-cdbr-iron-east-02.cleardb.net","b604555a674f4d","3d655edb","");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Perform queries 
// mysqli_query($con,"INSERT INTO Persons (FirstName,LastName,Age) 
// VALUES ('Glenn','Quagmire',33)");
?>