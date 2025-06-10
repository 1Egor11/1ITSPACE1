<?php
header("Access-Control-Allow-Orgin: *");
header("Access-Control-Allow-Methods: *");

// going to use above code 
require 'database.php'; 

// sql query to fetch all the data
$query = "SELECT * FROM `planets`";
// mysql_query will execute the query to fetch data 
if ($result = mysqli_query($mysqli,$query)) 
{ 
    // echo "Query Executed"; 
    // loop will iterate until all data is fetched 
    while ($row = $result->fetch_assoc()) 
    { 
        echo '<div id="'.$row['id'].'">';
        echo '<p class="title">'.$row['title'].'</p>'; 
        echo '<p class="desc">'.$row['desc'].'</p>'; 
        echo '<p class="mass">'.$row['mass'].'</p>'; 
        echo '<p class="radius">'.$row['radius'].'</p>'; 
        echo '<p class="temp">'.$row['temp'].'</p>'; 
        echo '<p class="period">'.$row['period'].'</p>'; 
        echo '<p class="fact1">'.$row['fact1'].'</p>'; 
        echo '<p class="fact2">'.$row['fact2'].'</p>'; 
        echo '<p class="url">'.$row['url'].'</p>'; 
        echo '</div>';
    } 
} 
else
{ 
    echo "Error in execution!"; 
} 
?>