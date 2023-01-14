<?php

$servername = "db4free.net:3306";

$username = "abhinavd";

$password = "qwerty12345";

$dbname = "deeznuts";



$conn = new mysqli($servername, $username, $password, $dbname);



if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

}

$sql = "select * from 'time';";

$result = $conn->query($sql);

if ($result->num_rows > 0) {



    while($row = $result->fetch_assoc()) {

        echo "Table: " . $row["Tables_in_myDB"] . "<br>";

    }

} else {

    echo "0 results";

}

$conn->close();

?> 

