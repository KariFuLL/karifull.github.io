<!DOCTYPE html>
<html lang="hu">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8">
    <title>11</title>
    <style>
        table, th, td{
            border: 1px solid black;
        }
        table{
            border-collapse: collapse;
        }
        td, th {
            width: 200px;
        }
    </style>
</head>
<body>

 <?php
        // $mysqli = new mysqli('localhost', 'root', '', 'beadandao11') or die(mysqli_error($mysqli));
        // $result = $mysqli->query("SELECT * FROM jatekos") or die($mysqli->error);
    ?> 

    <table>
        <tr><th>Játékos</th><th>Legjobb pont</th></tr>
        <?php
        //while ($row = $result->fetch_assoc()) : ?>
        <tr>
            <td><?php //echo $row['nev']; ?></td>
            <td><?php //echo $row['best']; ?></td>
        </tr>
        <?php // endwhile; ?>
    </table>
    <br><br>

<form action="game.php" method="POST">

<input type="text" name="name" placeholder="Név">
<input type="submit" value="Játék indítása">



</form>
    
</body>
</html>