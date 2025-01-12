<!DOCTYPE html>
<html>
<head>
    <title>Student Marks and Grade</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
            text-align: center;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
        form {
            width: 50%;
            margin: 20px auto;
            text-align: center;
        }
    </style>
</head>
<body>
    <form method="POST" action="">
        <h2>Enter Marks for Each Subject</h2>
        <label>Math:</label>
        <input type="number" name="math" required><br><br>
        <label>Science:</label>
        <input type="number" name="science" required><br><br>
        <label>English:</label>
        <input type="number" name="english" required><br><br>
        <label>History:</label>
        <input type="number" name="history" required><br><br>
        <label>Geography:</label>
        <input type="number" name="geography" required><br><br>
        <button type="submit">Submit</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get marks from user input
        $marks = [
            "Math" => $_POST["math"],
            "Science" => $_POST["science"],
            "English" => $_POST["english"],
            "History" => $_POST["history"],
            "Geography" => $_POST["geography"]
        ];

        // Calculate total and average marks
        $totalMarks = array_sum($marks);
        $averageMarks = $totalMarks / count($marks);

        // Determine grade
        if ($averageMarks > 90) {
            $grade = "A";
        } elseif ($averageMarks > 80) {
            $grade = "B";
        } elseif ($averageMarks > 70) {
            $grade = "C";
        } elseif ($averageMarks > 60) {
            $grade = "D";
        } else {
            $grade = "F";
        }

        // Display the results in a table
        echo "<table>
                <tr>
                    <th>Subject</th>
                    <th>Marks Obtained</th>
                </tr>";
        foreach ($marks as $subject => $mark) {
            echo "<tr>
                    <td>$subject</td>
                    <td>$mark</td>
                  </tr>";
        }
        echo "<tr>
                <th>Total Marks</th>
                <td>$totalMarks</td>
              </tr>
              <tr>
                <th>Average Marks</th>
                <td>" . number_format($averageMarks, 2) . "</td>
              </tr>
              <tr>
                <th>Grade</th>
                <td>$grade</td>
              </tr>
              </table>";
    }
    ?>
</body>
</html>
