<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);

    echo "<h1>Thank you for contacting us, $name!</h1>";
    echo "<p>We will reach out to you at $email or $phone.</p>";
} else {
    echo "Please submit the form correctly.";
}
?>
