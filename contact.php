


<?php 
/*

// error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
echo "PHP is working SAMAN.<br>";

// Import PHPMailer classes
//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if (isset($_POST['send'])) {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Create an instance of PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                      // Use SMTP
        $mail->Host = 'smtp.gmail.com';                       // Set Gmail SMTP server
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'badalsaman032@gmail.com';             // Your Gmail address
        $mail->Password = 'uglm mbaq jbfh qtmo';                // Your Gmail app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;      // Enable SSL encryption
        $mail->Port = 465;                                    // TCP port for SSL

        // Recipients
        $mail->setFrom($email, $name);                        // From user (form data)
        $mail->addAddress('saman10.web@gmail.com');            // Your email to receive messages

        // Content
        $mail->isHTML(true);                                  // Email format as HTML
        $mail->Subject = 'New Message from Contact Form';
        $mail->Body = "
            <h3>Contact Form Submission</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        $mail->send();
        echo "Message has been sent successfully.";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}*/
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
echo "PHP is working Bro.<br>";

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if (isset($_POST['send'])) {
    echo "Form submitted.<br>";

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer();

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'badalsaman032@gmail.com';
        $mail->Password = 'uglm mbaq jbfh qtmo'; // use App Password
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom($email, $name);
        $mail->addAddress('saman10.web@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'New Message from Contact Form';
        $mail->Body = "
            <h3>Contact Form Submission</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        if ($mail->send()) {
            echo "✅ Message sent successfully.";
        } else {
            echo "❌ Mailer Error: " . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        echo "❌ Message could not be sent. Error: {$e->getMessage()}";
    }
}
?>

?>

