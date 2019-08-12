<?php

$con=mysqli_connect("localhost","root","","grafico");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Perform queries 
// mysqli_query($con,"SELECT * FROM Persons");
// mysqli_query($con,"INSERT INTO Persons (FirstName,LastName,Age) 
// VALUES ('Glenn','Quagmire',33)");
?>