<?php
    //$mysqli = new mysqli('localhost', 'root', '', 'beadando11') or die(mysqli_error($mysqli));

    
    
        $restart = 1;
        $newbest = $_POST['nb'];
        $nev = $_POST['name'];
        $score = $_POST['score'];
        //$mysqli->query("UPDATE jatekos SET nev='$nev', score='$score', best='$newbest' WHERE nev='$nev'") or die($mysqli->error);
        
        header("location: start.php");
    
    //echo $restart . " " . $newbest;





?>